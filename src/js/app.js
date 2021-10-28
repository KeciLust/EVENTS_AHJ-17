import createField from './createField';
import Moves from './goblinMoves';

const n = 4; // how many cells in a row
createField(n);

const moves = new Moves(n);
moves.interval();
moves.listner();
