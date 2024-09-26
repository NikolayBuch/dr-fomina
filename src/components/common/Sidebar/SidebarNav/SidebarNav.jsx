'use client';

import React, { useState } from 'react';
import cx from 'classnames';
import ModalButton from 'components/Modal/ModalButton';
import NavElem from 'components/NavElem';
import Text from 'components/Text';
import DropDown from 'components/DropDown';
import { menu } from 'components/Header/NavBottom/Nav/constant';
import { left, drop } from 'components/Header/NavTop/Nav//constants';
import { contacts } from 'components/Footer/constant';

import s from './SidebarNav.module.scss';

const SidebarNav = ({ closeSidebar }) => {
  const [isOpen, setOpen] = useState(false);

  const changeOpen = () => {
    setOpen(!isOpen);
  };
  return (
    <div>
      <div className={s.header}>
        <button className={cx(isOpen ? s.hidden : s.visible, s.button)}>
          {' '}
          <svg
            width='23'
            height='25'
            viewBox='0 0 23 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M15.5 17.5L21.5742 23.9211M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z'
              stroke='#A5A3A5'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </button>
        <button
          className={cx(isOpen ? s.visible : s.hidden, s.button)}
          onClick={changeOpen}>
          <svg
            width='25'
            height='12'
            viewBox='0 0 25 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M1.04294 5.969H24.2109M6.04494 1L1.00094 5.97L6.04494 10.94'
              stroke='#4A4A4A'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
          Назад
        </button>
        <ModalButton className={s.closeButton} onClick={closeSidebar} />
      </div>
      <div className={s.wrapper}>
        <ul>
          {menu.map((item) => (
            <NavElem option='sidebar' size='large' item={item} />
          ))}
          {left.map((item) => (
            <NavElem
              option='sidebar'
              size='large'
              item={item}
              onClick={changeOpen}>
              {' '}
              <DropDown option='sidebar' currentOpen={isOpen}>
                {drop.map((item) => (
                  <NavElem option='sidedrop' key={item.id} item={item} />
                ))}
              </DropDown>
            </NavElem>
          ))}
        </ul>
        <div className={s.social}>
          <a href='https://vk.com/' className={s.link}>
            <svg
              width='27'
              height='15'
              viewBox='0 0 27 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M14.3501 14.5749C14.3501 14.5749 14.8221 14.5239 15.0631 14.2689C15.2841 14.0359 15.2771 13.5949 15.2771 13.5949C15.2771 13.5949 15.2471 11.5389 16.2201 11.2349C17.1791 10.9369 18.4101 13.2239 19.7161 14.1039C20.7031 14.7689 21.4521 14.6239 21.4521 14.6239L24.9441 14.5749C24.9441 14.5749 26.7691 14.4649 25.9041 13.0549C25.8321 12.9399 25.3991 12.0129 23.3091 10.1079C21.1191 8.1139 21.4131 8.4369 24.0491 4.9879C25.6541 2.8869 26.2961 1.6049 26.0951 1.0559C25.9051 0.531899 24.7241 0.670898 24.7241 0.670898L20.7941 0.694899C20.7941 0.694899 20.5031 0.654898 20.2871 0.782898C20.0761 0.906898 19.9391 1.1969 19.9391 1.1969C19.9391 1.1969 19.3181 2.8219 18.4881 4.2039C16.7381 7.1209 16.0381 7.2749 15.7521 7.0939C15.0861 6.6709 15.2521 5.3979 15.2521 4.4939C15.2521 1.6659 15.6901 0.487898 14.4021 0.182898C13.9751 0.0808977 13.6611 0.0148973 12.5681 0.00289735C11.1661 -0.0101027 9.97913 0.00789836 9.30713 0.330898C8.86013 0.544898 8.51413 1.0249 8.72513 1.0519C8.98513 1.0859 9.57313 1.2079 9.88513 1.6249C10.2881 2.1629 10.2731 3.3699 10.2731 3.3699C10.2731 3.3699 10.5051 6.6979 9.73313 7.1099C9.20313 7.3939 8.47713 6.8159 6.91713 4.1699C6.38791 3.25008 5.91925 2.29672 5.51413 1.3159C5.51413 1.3159 5.39813 1.0359 5.19013 0.885899C4.93813 0.703899 4.58613 0.646898 4.58613 0.646898L0.852128 0.670898C0.852128 0.670898 0.291129 0.685898 0.0851289 0.925898C-0.0978711 1.1379 0.071128 1.5779 0.071128 1.5779C0.071128 1.5779 2.99513 8.2929 6.30613 11.6769C9.34213 14.7789 12.7881 14.5749 12.7881 14.5749H14.3501Z'
                fill='currentColor'
              />
            </svg>
          </a>
          <a href='https://www.facebook.com/' className={s.link}>
            <svg
              width='13'
              height='24'
              viewBox='0 0 13 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M12.2754 12H7.75738V24H2.51475V12H-6.50375e-07V8.05594H2.51475V5.4965C2.51475 2.05594 4.00656 0 8.18361 0H12.9574V4.23776H9.07869C7.92787 4.23776 7.75738 4.82517 7.75738 5.95804V8.0979H13L12.2754 12Z'
                fill='currentColor'
              />
            </svg>
          </a>
        </div>

        {contacts.map((item) => (
          <div key={item.id} className={s.contactsItem}>
            <Text as='p' size='small1'>
              {item.title}
            </Text>
            <Text
              as='a'
              size='large'
              href={item.link}
              className={s.contactsLink}>
              {item.subtitle}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarNav;
