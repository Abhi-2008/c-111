Webcam.set({
    height:300,
    width:310,
    image_format: 'png',
    png_quality: 90,
    constraints:{
    facingMode:"environment"
    }
});
camera=document.getElementById("camera");
Webcam.attach('#camera');