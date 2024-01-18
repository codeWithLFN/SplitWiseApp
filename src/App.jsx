// App.jsx
import { useState } from 'react';
import BillForm from './components/BillForm';
import BillList from './components/BillList';
import FriendList from './components/FriendList';
import './App.css';

const App = () => {
  const [bills, setBills] = useState([]);
  const [friends, setFriends] = useState([]);

  const handleAddBill = (bill) => {
    setBills([...bills, bill]);
  };

  const handleAddFriend = (friend) => {
    setFriends([...friends, friend]);
  };

  const calculateIndividualShares = () => {
    const totalAmount = bills.reduce((sum, bill) => sum + bill.amount, 0);
    const numberOfFriends = friends.length;

    if (numberOfFriends === 0 || totalAmount === 0) {
      return Array(numberOfFriends).fill(0);
    }

    const individualShare = totalAmount / numberOfFriends;
    return Array(numberOfFriends).fill(individualShare);
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
      </div>
    </div>
  );
};

export default App;
