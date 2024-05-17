import React from 'react';
import PropTypes from 'prop-types'

import Text from 'components/Text';

import s from './Contacts.module.scss';

const Contacts = ({ item,  }) => {

  return (
    <div className={s.root}>
      <Text as='a' size='large' href={item.link} className={s.link} isHtml>
       {item.title} 
      </Text>
    </div>
  );
};

export default Contacts;

Contacts.propTypes = {
  item: PropTypes.object
}
