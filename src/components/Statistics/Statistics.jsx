import css from '../Statistics/Statistics.module.css'
import PropTypes from 'prop-types';
import React from 'react';

export const Statistics = ({ title, stats }) => {
    return (
  <section className={css.statistics}>
  {title && <h2 className="title">{title}</h2>}

  <ul className={css.statList}>
  {stats.map(({ label, percentage, id }) => (
  <li className={css.item} key={id}>
  <span className="label">{label}</span>
  <span className="percentage">{percentage}%</span> 
   </li> ))}
    </ul>
   </section>
    );
};
Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ),
  };