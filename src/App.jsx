import { useState, useEffect } from 'react';
import BillForm from './components/BillForm';
import BillList from './components/BillList';
import FriendList from './components/FriendList';

// App
const App = () => {
  const [bills, setBills] = useState([]);
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleAddBill = (bill) => {
    setBills([...bills, bill]);
  };

  const handleAddFriend = (friend) => {
    setFriends([...friends, friend]);
  };

  const calculateIndividualShares = () => {
    const totalAmount = bills.reduce((sum, bill) => sum + bill.amount, 0);
    const numberOfFriends = friends.length;

    return numberOfFriends === 0 || totalAmount === 0
      ? Array(numberOfFriends).fill(0)
      : Array(numberOfFriends).fill(totalAmount / numberOfFriends);
  };

  const handleClear = () => {
    setBills([]);
    setFriends([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-6">
      <div className="container max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-xl text-center">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">SplitWise</h1>
        </header>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="space-y-6">
            <BillForm onAddBill={handleAddBill} />
            <BillList bills={bills} />
            <FriendList friends={friends} onAddFriend={handleAddFriend} />
            <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
              <h2 className="text-2xl font-semibold mb-4">Individual Shares</h2>
              <ul className="list-disc list-inside space-y-2 mb-4 text-lg">
                {calculateIndividualShares().map((share, index) => (
                  <li key={index} className="text-gray-700">
                    {friends[index]} owes: R {share.toFixed(2)}
                  </li>
                ))}
              </ul>
              <p className="text-xl font-medium text-gray-800">
                Total: R {bills.reduce((sum, bill) => sum + bill.amount, 0).toFixed(2)}
              </p>
              <button
                onClick={handleClear}
                className="mt-6 bg-red-600 text-white px-5 py-3 rounded-md hover:bg-red-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
              >
                Clear
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;