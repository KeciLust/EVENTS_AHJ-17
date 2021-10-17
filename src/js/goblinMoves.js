export default function goblinMoves(n) {
  let i;
  const cells = document.querySelectorAll('.cell');

  setInterval(() => {
    const y = Math.floor(Math.random() * (n ** 2));
    if (!i && i !== 0) {
      cells[y].classList.add('goblin');
      i = y;
    } else if (i !== y) {
      cells[y].classList.add('goblin');
      cells[i].classList.remove('goblin');
      i = y;
    }
  }, 1000);
}
