from rest_framework.response import Response
from rest_framework.decorators import api_view
from datetime import datetime
import os
from resume_selector.util import selector, custom
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes, authentication_classes


@api_view(['POST'])
def post(request):
    file = request.data['file']
    first_name = request.data['first_name']
    # file_name = first_name + str(datetime.now().timestamp())
    file_name = first_name
    print(os.getcwd())
    file_path = os.path.join('resume_selector/static/uploads', file_name)
    # save file on disk
    with open(file_path, 'wb+') as out:
        for chunk in file.chunks():
            out.write(chunk)

    skill_set = selector.pdftoJson(file_path)
    print(skill_set)
    custom.save_to_db(first_name, skill_set)

    return Response(dict(err_msg=""))


@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def get(request):
    employer = request.user
    auth = request.auth
    if auth is None:
        return Response(dict(err_msg="Unauthorized"), status=401)

    keywords = request.data['keywords']

    users = custom.getRanked(keywords)

    res = []
    # get contact details
    for user in users:
        user_dict = {}
        print(user)
        user_dict['first_name'] = user.f_name
        user_dict['resume'] = 'static/uploads/'+user.f_name
        contact = custom.getContact(user)
        user_dict['email'] = contact.email
        user_dict['website'] = contact.website
        # ['resume_link']

        res.append(user_dict)

    print(res)

    return Response(dict(err_msg="", users=res))































# from django.views import View
# from django.http import JsonResponse, HttpResponse, HttpResponseBadRequest
# from django.contrib.auth import login, authenticate
# from django.contrib.auth.decorators import login_required
# from django.contrib.auth.models import User
# from django.views.decorators.http import require_http_methods
# from django.template import loader
#
#
# class LoginView(View):
#     def post(self, request):
#         try:
#             username = request.POST['username']
#             password = request.POST['password']
#         except KeyError:
#             return HttpResponseBadRequest("Missing User Credentials")
#
#         user = authenticate(request, username=username, password=password)
#         if user is not None:
#             login(request, user)
#             return HttpResponse("success page")
#         else:
#             return HttpResponse("invalid Cred")
#
#     # def get(self, request):
#     #     return HttpResponse("login page")
#
#
# class SignupView(View):
#     def post(self, request):
#         try:
#             username = request.POST['username']
#             password = request.POST['password']
#             email = request.POST['email']
#         except KeyError:
#             return HttpResponseBadRequest("Missing User details for signup")
#         user = User.objects.create_user(username, email=email,
#                                         password=password)
#
#         return HttpResponse('success')
#
#     def get(self, request):
#         template = loader.get_template('resume_selector/index.html')
#         return HttpResponse(template.render())
#
#
# @require_http_methods(['POST'])
# def upload_resume(request):
#     return HttpResponse("Post")
#
#
# @login_required
# @require_http_methods(['GET'])
# def resume(request):
#     return HttpResponse("Get")
