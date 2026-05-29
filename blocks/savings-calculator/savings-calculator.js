export default async function decorate(block) {
  const rows = [...block.children];

  // Third row contains the calculator link - convert it to an iframe
  if (rows.length >= 3) {
    const calcRow = rows[2];
    const link = calcRow.querySelector('a');
    if (link) {
      const iframeSrc = link.href;
      const iframeTitle = link.textContent.trim() || 'Savings goal calculator';
      const iframe = document.createElement('iframe');
      iframe.src = iframeSrc;
      iframe.title = iframeTitle;
      iframe.setAttribute('loading', 'lazy');
      // Replace the link content with the iframe
      const cell = calcRow.querySelector('div');
      if (cell) {
        cell.innerHTML = '';
        cell.appendChild(iframe);
      }
    }
  }
}
