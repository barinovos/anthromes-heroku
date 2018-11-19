import trackTransforms from './trackTransforms';
import loadCanvas from './loadCanvas';
import redraw from './redraw';
import connectZoom from './zoom';
import connectEvents from './events';

let zoom = { in: () => {}, out: () => {} };
document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = 'none';

function init(canvasId, data) {
  const obj = loadCanvas(canvasId, data);
  trackTransforms(obj.ctx);
  redraw(obj.ctx, obj.images, obj.canvas.width, obj.canvas.height);
  const last = {
    x: obj.canvas.width / 2,
    y: obj.canvas.height / 2,
    dragStart: null,
  };
  const cb = () => redraw(obj.ctx, obj.images, obj.canvas.width, obj.canvas.height);
  zoom = connectZoom(obj.canvas, obj.ctx, last, cb);
  connectEvents(obj.canvas, obj.ctx, last, cb);
}

export default {
  init,
  zoomIn: () => zoom.in(),
  zoomOut: () => zoom.out(),
};
