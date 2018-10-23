import React from 'react';

function loadCanvas(url1, url2) {
  document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = 'none';
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  const wW = window.innerWidth - 5;
  const wH = window.innerHeight - 75;
  canvas.width = wW;
  canvas.height = wH;
  // ctx.drawImage(this, 0, 0, this.width, this.height, 0, 0, wW, wH);

  // load image from data url
  const imageObj = new Image();
  const imageObj2 = new Image();
  imageObj.onload = () => ctx.drawImage(imageObj, 0, 0);
  imageObj.src = url1;
  imageObj2.onload = () => ctx.drawImage(imageObj2, 3020, 0);
  imageObj2.src = url2;

  /*canvas.addEventListener('wheel', () => {
    ctx.scale(2, 2);
    ctx.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height, 0, 0, wW, wH);
  });*/

  trackTransforms(ctx);

  function redraw() {
    // Clear the entire canvas
    const p1 = ctx.transformedPoint(0, 0);
    const p2 = ctx.transformedPoint(canvas.width, canvas.height);
    ctx.clearRect(p1.x, p1.y, p2.x - p1.x, p2.y - p1.y);

    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();

    ctx.drawImage(imageObj, 0, 0);
    ctx.drawImage(imageObj2, 3020, 0);
  }

  redraw();

  let lastX = canvas.width / 2,
    lastY = canvas.height / 2;
  let dragStart;

  const getOffset = ev => ({
    x: ev.offsetX || (ev.touches && ev.touches[0].clientX) || ev.pageX - canvas.offsetLeft,
    y: ev.offsetY || (ev.touches && ev.touches[0].clientY) || ev.pageY - canvas.offsetTop,
  });

  const onDown = evt => {
    lastX = getOffset(evt).x;
    lastY = getOffset(evt).y;
    dragStart = ctx.transformedPoint(lastX, lastY);
  };

  const onMove = evt => {
    lastX = getOffset(evt).x;
    lastY = getOffset(evt).y;
    if (dragStart) {
      const pt = ctx.transformedPoint(lastX, lastY);
      ctx.translate(pt.x - dragStart.x, pt.y - dragStart.y);
      redraw();
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
    canvas.addEventListener('touchend', () => (dragStart = null), false);
  } else {
    canvas.addEventListener('mousedown', onDown, false);
    canvas.addEventListener('mousemove', onMove, false);
    canvas.addEventListener('mouseup', () => (dragStart = null), false);
  }

  let scaleFactor = 1.1;
  let currentFactor = 1;
  const maxZoomLevel = 6;

  const zoom = function(clicks) {
    const factor = Math.pow(scaleFactor, clicks);
    const newFactor = Math.abs(factor) * currentFactor;
    if (newFactor > maxZoomLevel || newFactor < 1 / maxZoomLevel) return;
    currentFactor = newFactor;
    const pt = ctx.transformedPoint(lastX, lastY);
    ctx.translate(pt.x, pt.y);
    ctx.scale(factor, factor);
    ctx.translate(-pt.x, -pt.y);
    redraw();
  };

  const handleScroll = function(evt) {
    const delta = evt.wheelDelta ? evt.wheelDelta / 40 : evt.detail ? -evt.detail : 0;
    if (delta) zoom(delta);
    return evt.preventDefault() && false;
  };

  canvas.addEventListener('DOMMouseScroll', handleScroll, false);
  canvas.addEventListener('mousewheel', handleScroll, false);
}

// Adds ctx.getTransform() - returns an SVGMatrix
// Adds ctx.transformedPoint(x,y) - returns an SVGPoint
function trackTransforms(ctx) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  let xform = svg.createSVGMatrix();
  ctx.getTransform = function() {
    return xform;
  };

  const savedTransforms = [];
  const save = ctx.save;
  ctx.save = function() {
    savedTransforms.push(xform.translate(0, 0));
    return save.call(ctx);
  };

  const restore = ctx.restore;
  ctx.restore = function() {
    xform = savedTransforms.pop();
    return restore.call(ctx);
  };

  const scale = ctx.scale;
  ctx.scale = function(sx, sy) {
    xform = xform.scaleNonUniform(sx, sy);
    return scale.call(ctx, sx, sy);
  };

  const rotate = ctx.rotate;
  ctx.rotate = function(radians) {
    xform = xform.rotate((radians * 180) / Math.PI);
    return rotate.call(ctx, radians);
  };

  const translate = ctx.translate;
  ctx.translate = function(dx, dy) {
    xform = xform.translate(dx, dy);
    return translate.call(ctx, dx, dy);
  };

  const transform = ctx.transform;
  ctx.transform = function(a, b, c, d, e, f) {
    var m2 = svg.createSVGMatrix();
    m2.a = a;
    m2.b = b;
    m2.c = c;
    m2.d = d;
    m2.e = e;
    m2.f = f;
    xform = xform.multiply(m2);
    return transform.call(ctx, a, b, c, d, e, f);
  };

  const setTransform = ctx.setTransform;
  ctx.setTransform = function(a, b, c, d, e, f) {
    xform.a = a;
    xform.b = b;
    xform.c = c;
    xform.d = d;
    xform.e = e;
    xform.f = f;
    return setTransform.call(ctx, a, b, c, d, e, f);
  };

  const pt = svg.createSVGPoint();
  ctx.transformedPoint = function(x, y) {
    pt.x = x;
    pt.y = y;
    return pt.matrixTransform(xform.inverse());
  };
}

export default class Canvas extends React.PureComponent {
  componentDidMount() {
    loadCanvas('/example.jpg', '/example2.jpg');
  }

  render() {
    return <canvas id="myCanvas" />;
  }
}
