/*
 * Accordion Block
 * Recreate an accordion
 * https://www.hlx.live/developer/block-collection/accordion
 */

import { loadTranslate } from "./placeholder.js";

export default async function decorate(block) {
    const translations = await loadTranslate('en');
  [...block.children].forEach((row) => {
    // decorate accordion item label
    const label = row.children[0];
    const summary = document.createElement('summary');
    summary.className = 'accordion-item-label';
    summary.append(...label.childNodes);

    // prueba tooltip
    const tooltip = document.createElement('span');
    tooltip.className = 'accordion-tooltip';
    tooltip.textContent = translations.open;
    summary.appendChild(tooltip);
    

    // decorate accordion item body
    const body = row.children[1];
    body.className = 'accordion-item-body';
    // decorate accordion item
    const details = document.createElement('details');
    details.className = 'accordion-item';
    details.append(summary, body);

    // open / close de spreadsheet
    details.addEventListener('toggle', () => {
      tooltip.textContent = details.open ? translations.close : translations.open;
    });

    row.replaceWith(details);
  });
}