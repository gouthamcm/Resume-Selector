from resume_selector.models import User, Contact, Features
import json
import operator
from django.db.models import Q, Sum
from functools import reduce

count = 0


def getskillsandcontact(skills):
    # f = open(fileloc)
    # skills = json.load(f)
    # contact_list = skills["Contact_Number_In_Resume"]
    email_list = skills["Email_Address_In_Resume"]
    links_list = skills["links_In_Resume"]
    skills.pop("Contact_Number_In_Resume")
    skills.pop("Email_Address_In_Resume")
    skills.pop("links_In_Resume")

    email_list.append("")
    links_list.append("")
    return skills, email_list, links_list


def addEntry(firstname, mail, web, skilldict):
    userobj = User(f_name=firstname)
    userobj.save()
    contactobj = Contact(user_id=userobj, email=mail, website=web)
    contactobj.save()
    for skillname, freq in skilldict.items():
        featureobj = Features(user_id=userobj, skill=skillname, frequency=freq)
        featureobj.save()
    return User.user_id


def getRanked(skillist):
    featureset = Features.objects.filter(
        reduce(operator.or_, (Q(skill__contains=x) for x in skillist)))
    featureset_groupedByUser = featureset.values('user_id').annotate(
        score=Sum('frequency')).order_by('-score')
    sortset = list(
        featureset_groupedByUser.all().values_list('user_id', flat=True))
    userset = User.objects.filter(user_id__in=sortset)
    res = sorted(userset, key=lambda x: sortset.index(x.user_id))
    return res

def getContact(user):
    res = Contact.objects.filter(user_id=user).first()
    
    return res


def save_to_db(first_name, skill_set):
    skills, email_list, links_list = getskillsandcontact(skill_set)
    addEntry(first_name, email_list[0], links_list[0], skills)