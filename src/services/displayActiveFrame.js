export default function displayActiveFrame(imageLink) {
  const canvas = document.querySelector('.canvas');
  const context = canvas.getContext('2d');
  const img = new Image();
  if (imageLink === '#') {
    context.clearRect(0, 0, canvas.width, canvas.height);
  } else {
    img.src = imageLink;
    img.onload = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      if (imageLink !== '#') {
        context.drawImage(img, 0, 0);
      }
    };
  }
}
