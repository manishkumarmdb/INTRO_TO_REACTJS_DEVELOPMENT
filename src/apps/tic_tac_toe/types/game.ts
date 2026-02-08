export type Player = 'X' | '0';

export type SquareValue = Player | null;

export type SquareProps = {
  value: SquareValue;
  onClickSquare: () => void;
};
