import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import modsClasses from 'utils/modsClasses';

import s from './Text.module.scss';

const Text = ({ as: As, className, children, size, href, isHtml }) => {
  const mods = modsClasses(s, { size });

  if (isHtml) {
    return (
      <As
        className={cx(s.root, className, mods)}
        href={href}
        dangerouslySetInnerHTML={{ __html: children }}
      />
    );
  }
  return (
    <As className={cx(s.root, className, mods)} href={href}>
      {children}
    </As>
  );
};

Text.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  size: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'large',
    'medium',
    'normal',
    'small1',
    'small2',
  ]),
  onDoubleClick: PropTypes.func,
  onClick: PropTypes.func,
  as: PropTypes.any,
};


export default Text;
