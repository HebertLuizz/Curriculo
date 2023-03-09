const curriculoContainer = document.querySelector('.curriculo-container')
const numEstrelas = 50;

for (let i = 0; i < numEstrelas; i++) {
    const star = document.createElement('div');

    star.classList.add('star');

    const randomX = Math.floor(Math.random() * curriculoContainer.clientWidth);
    const randomY = Math.floor(Math.random() * curriculoContainer.clientHeight);
    star.style.left = `${randomX}px`;
    star.style.top = `${randomY}px`;

    curriculoContainer.appendChild(star);
}
