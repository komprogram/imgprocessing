from django import forms

class UploadFileForm(forms.Form):
	class Meta:
		file = forms.FileField(label = 'Select a file')