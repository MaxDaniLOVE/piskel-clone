export default function buttonChangeTool(onToolChange, onPenWidthChange) {
  document.addEventListener('keypress', (event) => {
    switch (event.code) {
      case 'KeyP':
        return onToolChange('pencil');
      case 'KeyC':
        return onToolChange('color-picker');
      case 'KeyB':
        return onToolChange('bucket');
      case 'KeyE':
        return onToolChange('eraser');
      case 'KeyS':
        return onToolChange('stroke');
      case 'Digit1':
        return onPenWidthChange(1);
      case 'Digit2':
        return onPenWidthChange(2);
      case 'Digit3':
        return onPenWidthChange(3);
      case 'Digit4':
        return onPenWidthChange(4);
      default:
        return null;
    }
  });
}
