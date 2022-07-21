import { addImage } from "./addImage.js";

const addImageV2 = (url) => {
  // put your code here
  return addImage(url);
};

// examples

addImageV2(
  "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
)
  .then((data) => console.log(data))
  .catch((error) => console.log(error)); // ==> 'Image load failed' // ==> { width: 200, height: 100 }
