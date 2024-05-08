import React from 'react';

import Text from 'components/Text';

import s from './CardModal.module.scss';

const CardModal = ({item}) => {

  return (
      <div className={s.root}>
        <div className={s.top}>
          {item.userpic 
          ?( <div className={s.userpic}>
            <img src={`images/${item.userpic}`} alt='' />
          </div>) :
           ('')}
          <div>
            <Text as='p' size='small1' className={s.date}>
              {item.date}
            </Text>
            <Text as='h3' size='h3' className={s.name}>
              {item.name}
            </Text>
            <Text as='p' size='small2' >
              <img src='' alt='' />
               {item.city}
            </Text>
          </div>
        </div>
        <Text as='p' size='normal'className={s.text}>
          {item.text}
        </Text>
      </div>
  );
};

export default CardModal;
