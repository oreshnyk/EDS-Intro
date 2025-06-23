export default function decorate(block) {
    const [titleRow, paraRow] = block.children;
    block.innerHTML = `
    <h3>${titleRow ? titleRow.textContent : 'Rating'}</h3>
    ${paraRow ? `<p>${paraRow.textContent}</p>` : ''}
    <div class="star-rating">
        ${[1,2,3,4,5].map(i => `<span class="star" data-value="${i}" tabindex="0" aria-label="${i} star">&#9733;</span>`).join('')}
    </div>`;
    let currentRating = 0;
    const stars = block.querySelectorAll('.star');
    stars.forEach((star, i) => {
    function setRating() {
            currentRating = i + 1;
            stars.forEach((s, idx) => s.classList.toggle('selected', idx < currentRating));
        }
        star.addEventListener('click', setRating);
        star.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') setRating(); });
    });
}