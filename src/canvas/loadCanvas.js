export default function loadCanvas(id, data) {
  const canvas = document.getElementById(id);
  const ctx = canvas.getContext('2d');
  const wW = window.innerWidth - 5;
  const wH = window.innerHeight - 75;
  canvas.width = wW;
  canvas.height = wH;

  // load image from data url
  const images = data.map(image => {
    const obj = new Image();
    obj.onload = () => ctx.drawImage(obj, image.x, image.y);
    obj.src = image.url;
    return {
      obj,
      x: image.x,
      y: image.y,
    };
  });

  return {
    canvas,
    ctx,
    images,
  };
}
