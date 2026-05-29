export default async function decorate(block) {
  const rows = [...block.children];
  rows.forEach((row) => {
    const cells = [...row.children];
    // First cell = icon image, second cell = text content
    if (cells.length >= 2) {
      cells[0].classList.add('article-cards-icon');
      cells[1].classList.add('article-cards-content');
    }
  });
}
