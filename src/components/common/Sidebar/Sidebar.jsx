'use client';

import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import SidebarNav from './SidebarNav/SidebarNav';

import s from './Sidebar.module.scss';

const Sidebar = ({ handleOpen, isOpen }) => {
  const [isShowSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    setShowSidebar(isOpen);
  }, [isOpen]);

  const closeSidebar = () => {
    setShowSidebar(false);
    setTimeout(() => {
      handleOpen();
    }, 600);
  };

  return (
    <div className={cx(s.root)}>
      <div
        className={cx(s.background, isShowSidebar ? [s.active] : [s.disable])}
        onClick={() => closeSidebar()}></div>
      <div className={cx(s.sidebar, isShowSidebar ? [s.active] : [s.disable])}>
        <SidebarNav closeSidebar={closeSidebar} />
      </div>
    </div>
  );
};

export default Sidebar;
