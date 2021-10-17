export default function createField(n) {
  const game = document.querySelector('#game');
  const check = document.querySelector('#check');
  const win = document.createElement('div');
  const lose = document.createElement('div');
  win.classList.add('win');
  lose.classList.add('lose');
  check.appendChild(win);
  check.appendChild(lose);

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < n ** 2; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    game.appendChild(cell);
  }
}
