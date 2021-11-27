from django.db import models

class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    f_name = models.CharField(max_length=50)

    def __str__(self):
        return self.f_name


class Contact(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    email = models.CharField(max_length=50)
    website = models.CharField(max_length=50)

    def __str__(self):
        return self.email + " " + self.website


class Features(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    skill = models.CharField(max_length=50)
    frequency = models.IntegerField(default=0)

    def __str__(self):
        return str(self.user_id) + " " + self.skill + " " + str(self.frequency)
