//import React from 'react';
import PropTypes from 'prop-types';

const BillList = ({ bills }) => {
  return (
    <div className="list-container">
      <h2 className="list-header">Bills</h2>
      <ul>
        {bills.map((bill, index) => (
          <li key={index} className="list-item">
            {bill.description} - R {bill.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

BillList.propTypes = {
  bills: PropTypes.array.isRequired,
};

export default BillList;
