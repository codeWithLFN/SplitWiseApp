import { useState } from 'react';
import BillForm from './components/BillForm';
import BillList from './components/BillList';
import FriendList from './components/FriendList';

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
    <div className="min-h-screen bg-zinc-500 flex items-center justify-center p-6">
      <div className="container max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-center text-blue-600">SplitWise</h1>
        </header>
        <div className="space-y-6">
          <BillForm onAddBill={handleAddBill} />
          <BillList bills={bills} />
          <FriendList friends={friends} onAddFriend={handleAddFriend} />
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Individual Shares</h2>
            <ul className="list-disc list-inside space-y-2 mb-4">
              {calculateIndividualShares().map((share, index) => (
                <li key={index}>
                  {friends[index]} owes: R {share.toFixed(2)}
                </li>
              ))}
            </ul>
            <p className="text-xl font-medium">
              Total: R {bills.reduce((sum, bill) => sum + bill.amount, 0).toFixed(2)}
            </p>
            <button
              onClick={handleClear}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
