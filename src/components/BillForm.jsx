import { useState } from 'react';
import PropTypes from 'prop-types';

const BillForm = ({ onAddBill }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBill({ description, amount: parseFloat(amount) });
    setDescription('');
    setAmount('');
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium mb-2">
          Description:
        </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-sm font-medium mb-2">
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add Bill
      </button>
    </form>
  );
};

BillForm.propTypes = {
  onAddBill: PropTypes.func.isRequired,
};

export default BillForm;
