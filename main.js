const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let img = new Image();
let fileName = '';

const downloadBtn = document.getElementById('download-btn');
const uploadFile = document.getElementById('upload-file');
const revertBtn = document.getElementById('revert-btn');
//const uploadFile = document.getElementById('upload-file');



//const uploadFile = document.getElementById('upload-file');

function blur() {
    var blur = $("#blur").slider("value");
    var grayscale = $("#grayscale").slider("value");
    var brightness = $("#brightness").slider("value");
    var contrast = $("#contrast").slider("value");
    var rotate = $("#rotate").slider("value");
    var invert = $("#invert").slider("value");
    var opacity = $("#opacity").slider("value");
    var saturate = $("#saturate").slider("value");
    var sepia = $("#sepia").slider("value");
    $("#canvas").css("-webkit-filter", "blur(" + blur + "px)" + "brightness(" + brightness + "%)" + "grayscale(" + grayscale + "%)" + "hue-rotate(" + rotate + "deg)" + "contrast(" + contrast + "%)" + "invert(" + invert + "%)" + "opacity(" + opacity + "%)" + "saturate(" + saturate + ")" + "sepia(" + sepia + "%)");
  
  }
  //***********SLIDERS*************//
  
  $(function() {
    $("#blur").slider({
      orientation: "horizontal",
      min: 0,
      max: 25,
      value: 0,
      slide: blur,
      change: blur
    });
    $("#grayscale").slider({
      orientation: "horizontal",
      min: 0,
      max: 100,
      value: 0,
      slide: blur,
      change: blur
    });
    $("#brightness").slider({
      orientation: "horizontal",
      min: 100,
      max: 1000,
      value: 0,
      slide: blur,
      change: blur
    });
  
    $("#contrast").slider({
      orientation: "horizontal",
      min: 0,
      max: 1000,
      value: 100,
      slide: blur,
      change: blur
    });
    $("#rotate").slider({
      orientation: "horizontal",
      min: -180,
      max: 180,
      value: 0,
      slide: blur,
      change: blur
    });
  
    $("#saturate").slider({
      orientation: "horizontal",
      min: 0,
      max: 100,
      value: 1,
      slide: blur,
      change: blur
    });
  
    $("#sepia").slider({
      orientation: "horizontal",
      min: 0,
      max: 100,
      value: 0,
      slide: blur,
      change: blur
    });
  
    $("#opacity").slider({
      orientation: "horizontal",
      min: 0,
      max: 100,
      value: 100,
      slide: blur,
      change: blur
    });
  
    $("#invert").slider({
      orientation: "horizontal",
      min: 0,
      max: 100,
      value: 0,
      slide: blur,
      change: blur
    });
  });

  revertBtn.addEventListener('click', e =>{
    $('#canvas', img, function($){
      this.revert();
    });
  });




//Upload Image
uploadFile.addEventListener('change', (e) =>{
  const file = document.getElementById('upload-file').files[0];

  //initialize filereader
  const reader = new FileReader();
  if(file) {
    fileName = file.name;
    reader.readAsDataURL(file);
  }

  //Add image to canvas
  reader.addEventListener('load', () => {
    //create image
    img = new Image();
    //set src
    img.src = reader.result;
    //on image load, add to canvas
    img.onload = function(){
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
     // canvas.removeAttribute('data-caman-id');
    };
  }, 
  false
  );
});



downloadBtn.addEventListener('click', e =>{
  e.preventDefault();
  const fileExtension = fileName.slice(-4);
  let newFileName;
  if (fileExtension === '.jpg' || fileExtension === '.png') {
    newFileName = fileName.substring(0, fileName.length-4) + '-edited.jpg';
    console.log(newFileName);
  }

  download(canvas, newFileName);
});

function download(canvas, fileName){
  console.log(fileName);
  let e;
  var link = document.createElement('a');
  link.innerHTML = 'download image';
  link.download = fileName;
  link.href = document.getElementById("canvas").toDataURL('image/jpeg', 0.8);
  e = new MouseEvent('click');

  link.dispatchEvent(e);
}

 /*   var link = document.createElement('a');
    link.innerHTML = 'download image';
    link.href = canvas.toDataURL();
    link.download = "mypainting.png";
}, false);
document.body.appendChild(link);*/

