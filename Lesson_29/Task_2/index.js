function addImage(imgSrc, callback) {
  const imgElem = document.createElement("img");
  imgElem.setAttribute("alt", "My photo");

  imgElem.src = imgSrc;
  const containerElem = document.querySelector(".page");
  console.log(imgElem);
  containerElem.append(imgElem);

  function onImageLoaded() {
    const { width, height } = imgElem;
    callback(null, { width, height });
  }

  imgElem.addEventListener("load", onImageLoaded);
  imgElem.addEventListener("error", () => callback("Image load failed"));
}

function onImageLoaded(error, data) {
  if (error) {
    console.log(error);
    return;
  }

  const { width, height } = data;
  const sizeElem = document.querySelector(".image-size");
  sizeElem.textContent = `${width} x ${height}`;
}

const imgLink =
  "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg";
addImage(imgLink, onImageLoaded);
