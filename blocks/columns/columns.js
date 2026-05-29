export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }

      // Wrap QR code section in a bordered container
      const qrImg = col.querySelector('img[src*="qr"]');
      if (qrImg) {
        const qrPicture = qrImg.closest('picture') || qrImg.closest('p');
        if (qrPicture) {
          const qrBox = document.createElement('div');
          qrBox.classList.add('columns-qr-box');
          // Collect QR image and the following elements (h3 and p)
          const siblings = [];
          let next = qrPicture.nextElementSibling;
          while (next) {
            siblings.push(next);
            next = next.nextElementSibling;
          }
          qrPicture.parentElement.insertBefore(qrBox, qrPicture);
          qrBox.appendChild(qrPicture);
          siblings.forEach((s) => qrBox.appendChild(s));
        }
      }
    });
  });
}
