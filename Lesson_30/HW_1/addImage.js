export const addImage = (imgSrc) => {
  const falsePromise = new Promise((resolveCb, rejectCb) => {
    const imgElem = document.createElement("img");
    imgElem.setAttribute("alt", "My photo");

    imgElem.src = imgSrc;
    const containerElem = document.querySelector(".page");
    containerElem.append(imgElem);

    function onImageLoaded() {
      const { width, height } = imgElem;
      resolveCb({ width, height });
    }

    imgElem.addEventListener("load", onImageLoaded);
    imgElem.addEventListener("error", () =>
      rejectCb(new Error("Image load is failed..."))
    );
  });

  return falsePromise;
};
