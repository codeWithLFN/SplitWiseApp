// App.jsx
import { useState } from 'react';
import BillForm from './components/BillForm';
import BillList from './components/BillList';
import FriendList from './components/FriendList';
import './App.css';

// App
const App = () => {
  const [bills, setBills] = useState([]);
  const [friends, setFriends] = useState([]);


  // Add bill
  const handleAddBill = (bill) => {
    setBills([...bills, bill]);
  };


  // Add friend
  const handleAddFriend = (friend) => {
    setFriends([...friends, friend]);
  };

  // Calculate individual shares
  const calculateIndividualShares = () => {
    const totalAmount = bills.reduce((sum, bill) => sum + bill.amount, 0);
    const numberOfFriends = friends.length;

    if (numberOfFriends === 0 || totalAmount === 0) {
      return Array(numberOfFriends).fill(0);
    }

    const individualShare = totalAmount / numberOfFriends;
    return Array(numberOfFriends).fill(individualShare);
  };

  // Clear button
  const handleClear = () => {
    setBills([]);
    setFriends([]);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>SplitWiseApp</h1>
      </header>
      <BillForm onAddBill={handleAddBill} />
      <BillList bills={bills} />
      <FriendList friends={friends} onAddFriend={handleAddFriend} />
      <div className="mt-3">
        <h2>Individual Shares</h2>
        <ul>
          {calculateIndividualShares().map((share, index) => (
            <li key={index}>{friends[index]} owes: R {share.toFixed(2)}</li>
          ))}
        </ul>
        <p>Total: R {calculateIndividualShares().reduce((sum, share) => sum + share, 0).toFixed(2)}</p>
      </div>
      <button onClick={handleClear} >
        Clear
      </button>
    </div>
  );
};

export default App;
