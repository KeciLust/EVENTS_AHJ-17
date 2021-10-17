export default function createField(n) {
  const game = document.querySelector('#game');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < n ** 2; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    game.appendChild(cell);
  }
}
