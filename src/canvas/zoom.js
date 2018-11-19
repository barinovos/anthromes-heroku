let scaleFactor = 1.1;
let currentFactor = 1;
let zoomBound;
const maxZoomLevel = 6;

export default function connectZoom(canvas, ctx, last, cb) {
  canvas.addEventListener('DOMMouseScroll', handleScroll, false);
  canvas.addEventListener('mousewheel', handleScroll, false);
  zoomBound = zoom.bind(null, ctx, last, cb);
  return {
    in: () => zoomBound(3),
    out: () => zoomBound(-3),
  };
}

function handleScroll(evt) {
  const delta = evt.wheelDelta ? evt.wheelDelta / 40 : evt.detail ? -evt.detail : 0;
  if (delta) zoomBound(delta);
  return evt.preventDefault() && false;
}

function zoom(ctx, last, cb, delta) {
  const factor = Math.pow(scaleFactor, delta);
  const newFactor = Math.abs(factor) * currentFactor;
  if (newFactor > maxZoomLevel || newFactor < 1 / maxZoomLevel) return;
  currentFactor = newFactor;
  const pt = ctx.transformedPoint(last.x, last.y);
  ctx.translate(pt.x, pt.y);
  ctx.scale(factor, factor);
  ctx.translate(-pt.x, -pt.y);
  cb();
}
