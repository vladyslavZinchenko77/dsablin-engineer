import { FC } from 'react';
import './Card.scss';

interface CardProps {
  img: string;
  description: string;
  oncklick: () => void;
  key: number;
  isSelected: boolean;
}

const Card: FC<CardProps> = ({
  img,
  description,
  oncklick,
  key,
  isSelected,
}) => {
  return (
    <div
      key={key}
      className={isSelected ? 'card__selected' : 'card'}
      onClick={oncklick}
    >
      <div
        className="card__img"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <p className="card__desc">{description}</p>
      <div className="card__cover"></div>
    </div>
  );
};

export default Card;
