import React from 'react';

import Text from 'components/Text';

import s from './Main.module.scss';

const Main = () => {
  return (
    <div className={s.root}>
      <div className={s.about}>
      <Text as='p' size='normal' className={s.subtitle}>
          Клиника Доктора Фомина
        </Text>
        <Text as='h1' size='h1'>
          Многопрофильная сеть клиник
        </Text>
      </div>

    </div>
  );
};

export default Main;
