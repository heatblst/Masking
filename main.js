var result = document.querySelector('.result');
var img_result = document.querySelector('.img-result');
var img_w = document.querySelector('.image-width');
var options = document.querySelector('.options');
var Crop = document.querySelector('.Crop');
var cropped = document.querySelector('.cropped');
var upload = document.querySelector('#loader');
var cropper = '';
var link = document.querySelector('.main');
var flow = document.querySelector('.flow');
 
loader.addEventListener('change', (e) => {
  if (e.target.files.length) {
    const reader = new FileReader();
    reader.onload = (e)=> {
      if(e.target.result){
        var img = document.createElement('img');
        img.id = 'image';
        img.src = e.target.result
        result.innerHTML = '';
        crop.classList.remove('hide');
        result.appendChild(img);
        cropper = new Cropper(img);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }
});

Crop.addEventListener('click',(e)=>{
  e.preventDefault();
  var imgSrc = cropper.getCroppedCanvas({
    width: img_w.value 
    }).toDataURL();
   cropped.classList.remove('hide');
   img_result.classList.remove('hide');
   go.classList.remove('hide');
   flow.classList.remove('hide');
   gone.classList.remove('hide');
   cropped.src = imgSrc;
   
   
});
function set2(){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    canvas.width=cropped.width;
    canvas.height=cropped.height;   
    ctx.drawImage(cropped, 0, 0);
  }
function set1(){
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    canvas.width=cropped.width;
    canvas.height=cropped.height;
    ctx.drawImage(cropped, 0, 0);
  }


