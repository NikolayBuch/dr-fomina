import React from 'react';

import Text from 'components/Text';

import s from './Header.module.scss'

const Header = ({text}) => {
  return (
    <div className={s.root}>
       <Text as='h3' size='h3'>
          {text}
        </Text>
    </div>
  );
};

export default Header;