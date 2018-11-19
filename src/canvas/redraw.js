export default function redraw(ctx, images, width, height) {
  // Clear the entire canvas
  const p1 = ctx.transformedPoint(0, 0);
  const p2 = ctx.transformedPoint(width, height);
  ctx.clearRect(p1.x, p1.y, p2.x - p1.x, p2.y - p1.y);

  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, width, height);
  ctx.restore();

  images.forEach(im => ctx.drawImage(im.obj, im.x, im.y));
}
