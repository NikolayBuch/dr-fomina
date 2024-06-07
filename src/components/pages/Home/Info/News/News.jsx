'use client';
import React, { useMemo, useState } from 'react';

import Nav from './Nav';
import Container from 'components/Container';
import Cards from './Cards';
import Animation from 'components/Animation';
import { list } from 'stubs/news';

import s from './News.module.scss';

const News = () => {
  const [counter, setCounter] = useState(3);
  const [filter, setFilter] = useState('Новости');

  const handleCounter = () => {
    setCounter(counter + 3);
  };

  const filterNews = (array, tab, counter) => {
    switch (tab) {
      case 'Новости':
        return array.slice(0, counter);
      case 'Акции':
        return array.filter((item) => item.sale);
      default:
        return array.slice(0, counter);
    }
  };

  const saleNews = list.filter((item) => item.sale);

  const filteredNews = useMemo(
    () => filterNews(list, filter, counter),
    [list, filter, counter]
  );

  const renderFilter = (value) => {
    setFilter(value);
  };

  return (
    <div className={s.root}>
      <Container size='normal' className={s.container}>
        <Animation>
          <Nav onRenderFilter={renderFilter} currentFilter={filter} />
        </Animation>
        <div>
          <Animation>
            {' '}
            <div className={s.wrapper}>
              {filteredNews.map((item) => (
                <Cards key={item.id} item={item} size={item.size} />
              ))}
            </div>
          </Animation>
          <Animation>
            {filteredNews.length === list.length ||
            filteredNews.length === saleNews.length ? (
              ''
            ) : (
              <button onClick={() => handleCounter()} className={s.button}>
                ЗАГРУЗИТЬ ЕЩЕ
              </button>
            )}
          </Animation>
        </div>
      </Container>
    </div>
  );
};

export default News;
