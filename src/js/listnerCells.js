/* eslint-disable no-plusplus */
export default function listner() {
  const cells = document.querySelector('#game');
  const win = document.querySelector('.win');
  const lose = document.querySelector('.lose');
  let i = 0;
  let y = 0;
  win.textContent = 0;
  lose.textContent = 0;
  cells.addEventListener(('click'), (e) => {
    if (e.target.className === 'cell goblin') {
      i++;
      if (i < 5) {
        win.textContent = i;
      } else {
        alert('WIN');
      }
    } else {
      y++;

      if (y < 5) { lose.textContent = y; } else { alert('LOSE'); }
    }
  });
}
