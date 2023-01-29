import React from 'react';
import css from './statistics.module.css';
import PropTypes from 'prop-types';

import getRandomColor from '../../random/funcRandomColor.js';

const Statistics = ({ title, stats }) => {
  const statisticElements = stats.map(statisticElement => (
    <li
      key={statisticElement.id}
      className={css.item}
      style={{
        backgroundColor: getRandomColor(),
      }}
    >
      <span className={css.label}>{statisticElement.label}</span>
      <span className={css.percentage}>{statisticElement.percentage}%</span>
    </li>
  ));

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>{statisticElements}</ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Statistics;
