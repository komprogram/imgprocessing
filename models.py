from django.db import models

# Create your models here.
class ImageUpload(models.Model):
	imgfile = models.FileField(upload_to = 'images/', )

	def __str__(self):
		return self.imgfile.name