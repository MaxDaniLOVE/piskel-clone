import pencilDraw from './pencilDraw';
import eraser from './eraser';
import bucket from './bucket';
import colorPicker from './colorPicker';
import stroke from './stroke';

export default function changeTools(...args) {
  const [tool, resolution, penWidth, activeColor, mouseDownEvent, previousColor] = args;
  switch (tool) {
    case 'pencil':
      return pencilDraw(resolution, penWidth, activeColor, previousColor);
    case 'color-picker':
      return colorPicker(resolution, mouseDownEvent);
    case 'bucket':
      return bucket(resolution, activeColor, mouseDownEvent, previousColor);
    case 'eraser':
      return eraser(resolution, penWidth);
    case 'stroke':
      return stroke();
    default:
      return null;
  }
}
