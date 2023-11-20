import { FC } from 'react';
import './Card.scss';

interface CardProps {
  img: string;
  description: string;
}

const Card: FC<CardProps> = ({ img, description }) => {
  return (
    <div className="card">
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
