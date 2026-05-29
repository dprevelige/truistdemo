export default async function decorate(block) {
  // The hero has one row with two cells: image cell and text cell
  // Structure is already correct from .plain.html
  const rows = [...block.children];
  rows.forEach((row) => {
    const cells = [...row.children];
    // First cell = image, second cell = text content
    if (cells.length >= 2) {
      cells[0].classList.add('hero-image');
      cells[1].classList.add('hero-content');
    }
  });
}
