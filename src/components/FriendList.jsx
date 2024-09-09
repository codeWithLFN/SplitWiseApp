import { useState } from 'react';
import PropTypes from 'prop-types';

const FriendList = ({ friends, onAddFriend }) => {
  const [newFriend, setNewFriend] = useState('');

  const handleAddFriend = () => {
    if (newFriend.trim() !== '') {
      onAddFriend(newFriend.trim());
      setNewFriend('');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Friends</h2>
      <ul className="space-y-2">
        {friends.map((friend, index) => (
          <li key={index} className="bg-gray-50 p-3 rounded-md shadow-sm">
            {friend}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Enter friend's name"
          value={newFriend}
          onChange={(e) => setNewFriend(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddFriend()}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
        />
        <button 
          onClick={handleAddFriend} 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Friend
        </button>
      </div>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  onAddFriend: PropTypes.func.isRequired,
};

export default FriendList;