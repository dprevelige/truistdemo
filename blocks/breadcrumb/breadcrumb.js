export default async function decorate(block) {
  const rows = [...block.children];
  if (rows.length === 0) return;

  const row = rows[0];
  const cells = [...row.children];

  // First cell = page indicator (brand label)
  // Second cell = navigation links list
  if (cells.length >= 2) {
    const navCell = cells[1];
    const ul = navCell.querySelector('ul');
    if (ul) {
      // Create a nav element for accessibility
      const nav = document.createElement('nav');
      nav.setAttribute('aria-label', 'Subpage navigation');
      nav.appendChild(ul);
      navCell.innerHTML = '';
      navCell.appendChild(nav);
    }
  }
}
