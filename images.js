const trImages = ["img/DSC00636.jpg", "img/S85-26822-medium-2000.jpg", "img/s66-45615-orig.jpg"]
var step = 0;
trChangeImage();

function trChangeImage() {
    // exit if no images, or step = number of items in array (4)
    if (typeof trImages == "undefined" ||  step == trImages.length) return;     
  
    document.querySelector('#tom-roche').src = trImages[step];
    step++;


    if (trImages.length === step ) step = 0
  };
