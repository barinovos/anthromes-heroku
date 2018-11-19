import trackTransforms from './trackTransforms';
import loadCanvas from './loadCanvas';
import redraw from './redraw';
import connectZoom from './zoom';
import connectEvents from './events';

let zoom = { in: () => {}, out: () => {} },
  redrawMapped,
  obj;
document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = 'none';

function init(canvasId, data) {
  obj = loadCanvas(canvasId, data);
  trackTransforms(obj.ctx);
  redraw(obj.ctx, obj.images, obj.canvas.width, obj.canvas.height);
  const last = {
    x: obj.canvas.width / 2,
    y: obj.canvas.height / 2,
    dragStart: null,
  };
  redrawMapped = () => redraw(obj.ctx, obj.images, obj.canvas.width, obj.canvas.height);
  zoom = connectZoom(obj.canvas, obj.ctx, last, redrawMapped);
  connectEvents(obj.canvas, obj.ctx, last, redrawMapped);
}

function moveToPoint(x, y) {
  zoom.resetZoom(obj.ctx);
  const pt = obj.ctx.transformedPoint(x, y);
  obj.ctx.translate(pt.x, pt.y);
  redrawMapped();
}

export default {
  init,
  zoomIn: () => zoom.in(),
  zoomOut: () => zoom.out(),
  moveToPoint: (x, y) => moveToPoint(x, y),
};
