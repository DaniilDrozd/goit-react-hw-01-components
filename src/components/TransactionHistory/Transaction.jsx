import React from 'react';
import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => (
  <table className={css.transactionHistory} >
          <tr className={css.transactionOptions}>
              <th className={css.transactionNet}>Type</th>
              <th className={css.transactionNet}>Amount</th>
              <th className={css.transactionNet}>Currency</th>
          </tr>
      {items.map(({ id, type, amount, currency }) => (
          <tbody key={id}>
              <tr className={css.transactionList} >
                  <td className={css.transactionNet}>{type}</td>
                  <td className={css.transactionNet}>{amount}</td>
                  <td className={css.transactionNet}>{currency}</td>
              </tr>
          </tbody>
      ))}
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
