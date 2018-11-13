import json
from django.template import RequestContext
from django.http import HttpResponseRedirect, JsonResponse
from django.shortcuts import render
from .forms import  UploadFileForm
from .models import ImageUpload


my_list = []



def index(request):
	if request.method =='POST':
		form = UploadFileForm(request.POST, request.FILES)
		if form.is_valid():
			instance = ImageUpload(imgfile = request.FILES['imgfile'])
			instance.save()
		images1 = ImageUpload.objects.all()
		del my_list[:]
		image_path = instance.imgfile.path
		return render(request, 'imgprocapp/index.html',{'images':images1})

	else:
		form = UploadFileForm()
		images = ImageUpload.objects.all()
		return render(request, 'imgprocapp/index.html', {'images':images, 'form':form})

def gallery(request):
	return render(request, 'imgprocapp/gallery.html')

'''def index(request):
    if request.method == 'POST':
		form = UploadFileForm(request.POST, request.FILES)
		if form.is_valid():
			instance = ImageUpload(file_field=request.FILES['imgfile'])
			instance.save()
		images1 = ImageUpload.objects.all()
		del my_list[:]
		image_path = instance.imgfile.path
	return render(request, 'index.html',{'images':images1, 'label':label})
	else:
		form = UploadFileForm()
		images1 = ImageUpload.objects.all()
		return render(request, 'index.html', {'images': images 'form': form})'''