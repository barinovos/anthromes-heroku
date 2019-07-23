// import icon from '../assets/annotation.svg';

export default function(ctx, annotations) {
  const icon = new Image();
  icon.onload = () => annotations.map(a => ctx.drawImage(icon, a.x, a.y));
  icon.src = '/annotation.svg';
}
