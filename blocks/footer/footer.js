import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  // Identify and label sections
  const sections = footer.querySelectorAll('.section');
  if (sections.length >= 4) {
    sections[0].classList.add('footer-brand');
    sections[1].classList.add('footer-links');
    sections[2].classList.add('footer-social');
    sections[3].classList.add('footer-legal');
  }

  // Structure the nav columns in the links section
  const linksSection = footer.querySelector('.footer-links');
  if (linksSection) {
    const wrapper = linksSection.querySelector('.default-content-wrapper');
    if (wrapper) {
      const columns = document.createElement('div');
      columns.classList.add('footer-columns');
      let currentCol = null;
      [...wrapper.children].forEach((child) => {
        if (child.tagName === 'H2') {
          currentCol = document.createElement('div');
          currentCol.classList.add('footer-column');
          columns.append(currentCol);
          currentCol.append(child);
        } else if (currentCol) {
          currentCol.append(child);
        }
      });
      wrapper.textContent = '';
      wrapper.append(columns);
    }
  }

  block.append(footer);
}
