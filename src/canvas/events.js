export default function connectEvents(canvas, ctx, last, cb) {
  const getOffset = ev => ({
    x: ev.offsetX || (ev.touches && ev.touches[0].clientX) || ev.pageX - canvas.offsetLeft,
    y: ev.offsetY || (ev.touches && ev.touches[0].clientY) || ev.pageY - canvas.offsetTop,
  });

  const onDown = evt => {
    last.x = getOffset(evt).x;
    last.y = getOffset(evt).y;
    last.dragStart = ctx.transformedPoint(last.x, last.y);
  };

  const onMove = evt => {
    last.x = getOffset(evt).x;
    last.y = getOffset(evt).y;
    if (last.dragStart) {
      const pt = ctx.transformedPoint(last.x, last.y);
      ctx.translate(pt.x - last.dragStart.x, pt.y - last.dragStart.y);
      cb();
    }
  };

  // touch devices
  if (
    'ontouchstart' in window ||
    (window.DocumentTouch && document instanceof window.DocumentTouch) ||
    navigator.msMaxTouchPoints > 0
  ) {
    canvas.addEventListener('touchstart', onDown, false);
    canvas.addEventListener('touchmove', onMove, false);
    canvas.addEventListener('touchend', () => (last.dragStart = null), false);
  } else {
    canvas.addEventListener('mousedown', onDown, false);
    canvas.addEventListener('mousemove', onMove, false);
    canvas.addEventListener('mouseup', () => (last.dragStart = null), false);
  }
}
