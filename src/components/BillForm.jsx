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
    <form style={{ marginTop: '20px' }} onSubmit={handleSubmit}>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="description" style={{ display: 'block', marginBottom: '5px' }}>
          Description:
        </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="amount" style={{ display: 'block', marginBottom: '5px' }}>
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>
      <button
        type="submit"
        style={{
          backgroundColor: '#007bff',
          color: '#fff',
          padding: '10px',
          cursor: 'pointer',
          border: 'none',
          borderRadius: '4px',
        }}
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
