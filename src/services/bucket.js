import colorPicker from './colorPicker';

export default function bucket(resolution, activeColor, mouseDownEvent, previousColor) {
  localStorage.removeItem('cash');
  const canvas = document.querySelector('.canvas');
  const context = canvas.getContext('2d');
  const sizeIdx = 512 / resolution;
  const coordinateX = Math.round((mouseDownEvent.offsetX / sizeIdx) - 0.5);
  const coordinateY = Math.round((mouseDownEvent.offsetY / sizeIdx) - 0.5);
  const checkColor = colorPicker(resolution, mouseDownEvent);
  let color;
  switch (mouseDownEvent.buttons) {
    case 1:
      color = activeColor;
      break;
    case 2:
      color = previousColor;
      break;
    default:
      break;
  }
  if (checkColor === color) {
    return null;
  }
  function hex2rgb(c, rgbaColorArr) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
    result = {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    };
    rgbaColorArr.push(result.r);
    rgbaColorArr.push(result.g);
    rgbaColorArr.push(result.b);
    rgbaColorArr.push(255);
  }
  const rgbaCurrentColor = [];
  hex2rgb(color, rgbaCurrentColor);

  function getPixel(imageData, x, y) {
    if (x < 0 || y < 0 || x >= imageData.width || y >= imageData.height) {
      return [-1, -1, -1, -1];
    }
    const offset = (y * imageData.width + x) * 4;
    return imageData.data.slice(offset, offset + 4);
  }

  function setPixel(imageData, x, y, color) {
    const offset = (y * imageData.width + x) * 4;
    imageData.data[offset + 0] = color[0];
    imageData.data[offset + 1] = color[1];
    imageData.data[offset + 2] = color[2];
    imageData.data[offset + 3] = color[3];
  }

  function colorsMatch(a, b, rangeSq) {
    const dr = a[0] - b[0];
    const dg = a[1] - b[1];
    const db = a[2] - b[2];
    const da = a[3] - b[3];
    return dr * dr + dg * dg + db * db + da * da < rangeSq;
  }

  function floodFill(ctx, x, y, fillColor, range = 1) {
    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const visited = new Uint8Array(imageData.width, imageData.height);
    const targetColor = getPixel(imageData, x, y);
    if (!colorsMatch(targetColor, fillColor)) {
      const rangeSq = range * range;
      const pixelsToCheck = [x, y];
      while (pixelsToCheck.length > 0) {
        const y = pixelsToCheck.pop();
        const x = pixelsToCheck.pop();

        const currentColor = getPixel(imageData, x, y);
        if (!visited[y * imageData.width + x]
                    && colorsMatch(currentColor, targetColor, rangeSq)) {
          setPixel(imageData, x, y, fillColor);
          visited[y * imageData.width + x] = 1;
          pixelsToCheck.push(x + 1, y);
          pixelsToCheck.push(x - 1, y);
          pixelsToCheck.push(x, y + 1);
          pixelsToCheck.push(x, y - 1);
        }
      }
      ctx.putImageData(imageData, 0, 0);
    }
  }
  floodFill(context, coordinateX, coordinateY, rgbaCurrentColor, 1);
}
