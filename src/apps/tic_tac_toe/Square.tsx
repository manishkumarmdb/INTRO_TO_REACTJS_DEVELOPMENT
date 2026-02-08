import type { SquareValue } from "./types/game";

type SquareProps = {
  value: SquareValue;
  onClickSquare: () => void;
};

function Square({ value, onClickSquare }: SquareProps) {
  return (
    <button className="square" onClick={onClickSquare}>
      {value}
    </button>
  );
}

export default Square;
