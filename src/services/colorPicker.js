export default function colorPicker(resolution, mouseDownEvent) {
  const canvas = document.querySelector('.canvas');
  const ctx = canvas.getContext('2d');
  const sizeIdx = 512 / resolution;
  const coordinateX = Math.round((mouseDownEvent.offsetX / sizeIdx) - 0.5);
  const coordinateY = Math.round((mouseDownEvent.offsetY / sizeIdx) - 0.5);
  const ImageData = ctx.getImageData(coordinateX, coordinateY, 1, 1);
  const red = ImageData.data[0];
  const green = ImageData.data[1];
  const blue = ImageData.data[2];

  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  }

  function rgb2hex(r, g, b) {
    const hex = `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
    return hex;
  }

  return rgb2hex(red, green, blue);
}
