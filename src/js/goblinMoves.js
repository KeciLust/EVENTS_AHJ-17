/* eslint-disable no-plusplus */
export default class Moves {
  constructor(n) {
    this.n = n;
    this.cells = document.querySelector('#game');
    this.win = document.querySelector('.win');
    this.lose = document.querySelector('.lose');
    this.cell = document.querySelectorAll('.cell');
    this.victory = 0;
    this.defeat = 0;
    this.q = null;
    this.w = 0;
    this.win.textContent = 0;
    this.lose.textContent = 0;
  }

  interval() {
    setInterval(() => { this.goblinMoves(); }, 1000);
  }

  goblinMoves() {
    if (this.w !== (this.victory + this.defeat)) {
      if (this.defeat !== 5) {
        this.defeat++;
        this.lose.textContent = this.defeat;
      } else {
        this.lose.textContent = 5;
        Moves.losers();
      }
    }
    this.w++;
    const e = Math.floor(Math.random() * (this.n ** 2));
    if (!this.q && this.q !== 0) {
      this.cell[e].classList.add('goblin');
      this.q = e;
    } else if (this.q !== e) {
      this.cell[e].classList.add('goblin');
      this.cell[this.q].classList.remove('goblin');
      this.q = e;
    }
  }

  listner() {
    this.cells.addEventListener('click', (e) => {
      if (e.target.className === 'cell goblin') {
        this.victory++;
        if (this.victory < 5) {
          this.win.textContent = this.victory;
        } else {
          this.win.textContent = 5;
          Moves.winer();
        }
      } else {
        this.defeat++;

        if (this.defeat < 5) {
          this.lose.textContent = this.defeat;
        } else {
          this.lose.textContent = 5;
          Moves.losers();
        }
      }
    });
  }

  static winer() {
    setTimeout(() => {
      alert('You WIN!');
      window.location.reload();
    }, 300);
  }

  static losers() {
    setTimeout(() => {
      alert('You Lose!');
      window.location.reload();
    }, 300);
  }
}
