import React from 'react';

import Container from 'components/Container';
import Text from 'components/Text';
import { footer } from './constant';
import { contacts } from './constant';
import { social } from './constant';

import s from './Footer.module.scss';

const Footer = () => {
  const socials = (value) => {
    switch (value) {
      case 'vk':
        return (
          <svg
            width='41'
            height='40'
            viewBox='0 0 41 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M39.8381 20C39.8381 30.4837 31.2481 39 20.63 39C10.0118 39 1.42188 30.4837 1.42188 20C1.42188 9.51632 10.0118 1 20.63 1C31.2481 1 39.8381 9.51632 39.8381 20Z'
              stroke='currentColor'
              strokeWidth='2'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M21.297 27.22C21.297 27.22 21.7115 27.1752 21.9237 26.9537C22.118 26.7508 22.1113 26.3678 22.1113 26.3678C22.1113 26.3678 22.0855 24.5794 22.9402 24.3154C23.7826 24.0557 24.8642 26.0448 26.012 26.8097C26.8791 27.388 27.5373 27.2614 27.5373 27.2614L30.6046 27.22C30.6046 27.22 32.2085 27.124 31.4481 25.8986C31.3852 25.7982 31.0045 24.9919 29.1681 23.3355C27.2441 21.6017 27.5025 21.8821 29.8184 18.8826C31.2291 17.0561 31.7929 15.9409 31.6166 15.4641C31.4492 15.008 30.4114 15.1291 30.4114 15.1291L26.9588 15.1498C26.9588 15.1498 26.7028 15.116 26.513 15.2262C26.3276 15.3342 26.2075 15.5863 26.2075 15.5863C26.2075 15.5863 25.6616 16.9993 24.9327 18.2017C23.3951 20.7375 22.7807 20.8718 22.5291 20.7146C21.944 20.3469 22.09 19.2394 22.09 18.4527C22.09 15.9944 22.4741 14.9698 21.3431 14.7047C20.9679 14.6163 20.6916 14.5584 19.7313 14.5486C18.4992 14.5366 17.4569 14.553 16.8662 14.8334C16.4731 15.02 16.1698 15.4368 16.3551 15.4608C16.5831 15.4903 17.0998 15.5961 17.3738 15.9584C17.7276 16.4265 17.7153 17.4761 17.7153 17.4761C17.7153 17.4761 17.9186 20.3698 17.2402 20.7288C16.7752 20.9754 16.1372 20.4724 14.7659 18.1712C14.0639 16.9928 13.5337 15.69 13.5337 15.69C13.5337 15.69 13.4315 15.4466 13.2485 15.3157C13.0272 15.1575 12.7183 15.1084 12.7183 15.1084L9.43759 15.1291C9.43759 15.1291 8.94453 15.1422 8.7637 15.3506C8.60309 15.535 8.75134 15.918 8.75134 15.918C8.75134 15.918 11.32 21.7567 14.229 24.6995C16.8965 27.3967 19.9245 27.22 19.9245 27.22H21.297Z'
              fill='currentColor'
            />
          </svg>
        );
      case 'facebook':
        return (
          <svg
            width='42'
            height='40'
            viewBox='0 0 42 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M40.2541 20C40.2541 30.4837 31.6641 39 21.046 39C10.4279 39 1.83789 30.4837 1.83789 20C1.83789 9.51632 10.4279 1 21.046 1C31.6641 1 40.2541 9.51632 40.2541 20Z'
              stroke='currentColor'
              strokeWidth='2'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M22.2536 31.8183H17.7734V21.3624H15.5347V17.7597H17.7734V15.5967C17.7734 12.6578 19.0368 10.9092 22.6286 10.9092H25.6182V14.5132H23.7497C22.3515 14.5132 22.2591 15.0167 22.2591 15.9563L22.2529 17.7597H25.6387L25.2424 21.3624H22.2529V31.8183H22.2536Z'
              fill='currentColor'
            />
          </svg>
        );
      case 'instagram':
        return (
          <svg
            width='41'
            height='40'
            viewBox='0 0 41 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M39.6701 20C39.6701 30.4837 31.0801 39 20.462 39C9.84388 39 1.25391 30.4837 1.25391 20C1.25391 9.51632 9.84388 1 20.462 1C31.0801 1 39.6701 9.51632 39.6701 20Z'
              stroke='currentColor'
              strokeWidth='2'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M20.4619 11.8017C23.1599 11.8017 23.4794 11.8119 24.5448 11.86C25.53 11.9045 26.065 12.0674 26.421 12.2043C26.8926 12.3857 27.2293 12.6025 27.5828 12.9524C27.9364 13.3023 28.1554 13.6355 28.3386 14.1022C28.477 14.4546 28.6416 14.9841 28.6865 15.959C28.7352 17.0135 28.7454 17.3298 28.7454 19.9999C28.7454 22.6701 28.7352 22.9863 28.6865 24.0408C28.6416 25.0158 28.477 25.5452 28.3386 25.8977C28.1554 26.3644 27.9364 26.6976 27.5828 27.0475C27.2293 27.3974 26.8926 27.6141 26.421 27.7955C26.065 27.9324 25.53 28.0953 24.5448 28.1398C23.4796 28.1879 23.16 28.1981 20.4619 28.1981C17.7639 28.1981 17.4443 28.1879 16.3791 28.1398C15.3939 28.0953 14.8589 27.9324 14.5029 27.7955C14.0313 27.6141 13.6946 27.3974 13.3411 27.0475C12.9875 26.6976 12.7685 26.3644 12.5853 25.8977C12.4469 25.5452 12.2823 25.0158 12.2374 24.0408C12.1887 22.9863 12.1785 22.6701 12.1785 19.9999C12.1785 17.3298 12.1887 17.0135 12.2374 15.9591C12.2823 14.9841 12.4469 14.4546 12.5853 14.1022C12.7685 13.6355 12.9875 13.3023 13.3411 12.9524C13.6946 12.6025 14.0313 12.3857 14.5029 12.2043C14.8589 12.0674 15.3939 11.9045 16.379 11.86C17.4445 11.8119 17.764 11.8017 20.4619 11.8017ZM20.4619 10C17.7178 10 17.3738 10.0115 16.2961 10.0602C15.2206 10.1088 14.4861 10.2778 13.8434 10.525C13.179 10.7806 12.6155 11.1225 12.0538 11.6784C11.492 12.2344 11.1466 12.792 10.8883 13.4496C10.6385 14.0857 10.4678 14.8126 10.4187 15.8771C10.3695 16.9436 10.3579 17.2842 10.3579 20C10.3579 22.7159 10.3695 23.0564 10.4187 24.123C10.4678 25.1874 10.6385 25.9143 10.8883 26.5504C11.1466 27.208 11.492 27.7657 12.0538 28.3216C12.6155 28.8775 13.179 29.2195 13.8434 29.475C14.4861 29.7223 15.2206 29.8913 16.2961 29.9399C17.3738 29.9885 17.7178 30 20.4619 30C23.206 30 23.5501 29.9885 24.6278 29.9399C25.7033 29.8913 26.4378 29.7223 27.0805 29.475C27.7449 29.2195 28.3084 28.8775 28.8701 28.3216C29.4318 27.7657 29.7773 27.208 30.0355 26.5504C30.2853 25.9143 30.4561 25.1874 30.5052 24.123C30.5544 23.0564 30.566 22.7159 30.566 20C30.566 17.2842 30.5544 16.9436 30.5052 15.8771C30.4561 14.8126 30.2853 14.0857 30.0355 13.4496C29.7773 12.792 29.4318 12.2344 28.8701 11.6784C28.3084 11.1225 27.7449 10.7806 27.0805 10.525C26.4378 10.2778 25.7033 10.1088 24.6278 10.0602C23.5501 10.0115 23.206 10 20.4619 10ZM20.482 14.8809C17.6144 14.8809 15.2897 17.1816 15.2897 20.0197C15.2897 22.8579 17.6144 25.1586 20.482 25.1586C23.3497 25.1586 25.6744 22.8579 25.6744 20.0197C25.6744 17.1816 23.3497 14.8809 20.482 14.8809ZM20.482 23.3557C18.6206 23.3557 17.1115 21.8622 17.1115 20.0199C17.1115 18.1776 18.6206 16.6841 20.482 16.6841C22.3435 16.6841 23.8525 18.1776 23.8525 20.0199C23.8525 21.8622 22.3435 23.3557 20.482 23.3557ZM27.0376 14.6427C27.0376 15.3002 26.4991 15.8332 25.8348 15.8332C25.1704 15.8332 24.6319 15.3002 24.6319 14.6427C24.6319 13.9852 25.1704 13.4522 25.8348 13.4522C26.4991 13.4522 27.0376 13.9852 27.0376 14.6427Z'
              fill='currentColor'
            />
          </svg>
        );
      case 'youtube':
        return (
          <svg
            width='42'
            height='40'
            viewBox='0 0 42 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M40.0866 20C40.0866 30.4837 31.4966 39 20.8785 39C10.2604 39 1.67041 30.4837 1.67041 20C1.67041 9.51632 10.2604 1 20.8785 1C31.4966 1 40.0866 9.51632 40.0866 20Z'
              stroke='currentColor'
              strokeWidth='2'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M32.5058 25.794C32.9999 23.9159 32.9999 20.0212 32.9999 20.0212C32.9999 20.0212 33.0198 16.1071 32.5058 14.229C32.2289 13.201 31.4184 12.3902 30.3904 12.1136C28.5124 11.5996 21.0001 11.5996 21.0001 11.5996C21.0001 11.5996 13.4878 11.5996 11.6098 12.094C10.6014 12.3706 9.77098 13.201 9.49435 14.229C9 16.1071 9 20.0015 9 20.0015C9 20.0015 9 23.9159 9.49435 25.774C9.77127 26.802 10.5818 27.6128 11.6098 27.8895C13.5075 28.4034 21.0001 28.4034 21.0001 28.4034C21.0001 28.4034 28.5124 28.4034 30.3904 27.9091C31.4184 27.6325 32.2289 26.8219 32.5058 25.794ZM24.855 20.0012L18.608 23.5991V16.4033L24.855 20.0012Z'
              fill='currentColor'
            />
          </svg>
        );
    }
  };

  return (
    <footer className={s.root}>
      <Container size='normal'>
        <div className={s.wrapper}>
          <Text as='ul' size='medium' className={s.left}>
            {footer.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </Text>
          <div>
            <div className={s.contactsWrapper}>
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
            <div className={s.socialWrapper}>
              {social.map((item) => (
                <a key={item.id} href={item.link} className={s.socialItem}>
                  {socials(item.title)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <div className={s.licenseWrapper}>
        <Container size='normal'>
          <p className={s.license}>
            © 2018 ООО "КДФ" лицензия № ЛО-69-01-002394 Политика обработки и
            защиты персональных данных
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
