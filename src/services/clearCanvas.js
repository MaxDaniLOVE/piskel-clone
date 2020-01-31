export default function clearCanvas() {
  const canvas = document.querySelector('.canvas');
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
}
