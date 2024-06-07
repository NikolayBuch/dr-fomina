import React, { useEffect, useState } from 'react';
import cx from 'classnames'
import { useInView } from "react-intersection-observer";

import s from './Animation.module.scss'

const Animation = ({children}) => {

  const [isVisible, setVisible] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(()=> {
if (inView) {
  return setVisible(true)
}
  }, [inView])

  return (
    <div ref={ref} className={cx(s.root, {[s.active] : isVisible})}>
      {children}
    </div>
  );
};

export default Animation;