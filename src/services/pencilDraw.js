export default function pencilDraw(resolution, penWidth, activeColor, previousColor) {
  localStorage.removeItem('cash');
  const canvas = document.querySelector('.canvas');
  const context = canvas.getContext('2d');
  const sizeIdx = 512 / resolution;
  const mouseMoveEvent = (event) => {
    const coordinateX = Math.round((event.offsetX / sizeIdx) - penWidth / 2);
    const coordinateY = Math.round((event.offsetY / sizeIdx) - penWidth / 2);
    context.beginPath();
    context.rect(coordinateX, coordinateY, penWidth, penWidth);
    let color;
    switch (event.buttons) {
      case 1:
        color = activeColor;
        break;
      case 2:
        color = previousColor;
        break;
      default:
        break;
    }
    context.fillStyle = `${color}`;
    context.fill();
    context.beginPath();
  };
  canvas.addEventListener('mousemove', mouseMoveEvent);
  canvas.addEventListener('mouseup', () => {
    canvas.removeEventListener('mousemove', mouseMoveEvent);
  });
}
