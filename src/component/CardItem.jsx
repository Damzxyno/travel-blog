import React from 'react';
import { Link } from 'react-router-dom';

function CardItem({items}) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={`/destination/${items.id}/tom`}>
          <figure className='cards__item__pic-wrap' data-category={items.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={items.img}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{items.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;