export default function eraser(resolution, penWidth) {
  localStorage.removeItem('cash');
  const canvas = document.querySelector('.canvas');
  const context = canvas.getContext('2d');
  const sizeIdx = 512 / resolution;
  const mouseMoveEvent = (event) => {
    const coordinateX = Math.floor((event.offsetX / sizeIdx) - penWidth / 2);
    const coordinateY = Math.floor((event.offsetY / sizeIdx) - penWidth / 2);
    context.beginPath();
    context.clearRect(coordinateX, coordinateY, penWidth, penWidth);
    context.beginPath();
  };
  canvas.addEventListener('mousemove', mouseMoveEvent);
  canvas.addEventListener('mouseup', () => {
    canvas.removeEventListener('mousemove', mouseMoveEvent);
  });
}
