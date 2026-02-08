import type { SquareProps } from './types/game';

function Square({ value, onClickSquare }: SquareProps) {
  return (
    <button className="square" onClick={onClickSquare}>
      {value}
    </button>
  );
}

export default Square;
