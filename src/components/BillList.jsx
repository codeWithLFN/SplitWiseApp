import PropTypes from 'prop-types';

const BillList = ({ bills }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Bills</h2>
      <ul className="space-y-2">
        {bills.map((bill, index) => (
          <li key={index} className="bg-gray-100 p-3 rounded-md">
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
