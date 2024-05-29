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
    <div className="p-4 ">
      <h2 className="text-2xl font-semibold mb-4">Friends</h2>
      <ul className="space-y-2">
        {friends.map((friend, index) => (
          <li key={index} className="bg-gray-100 p-3 rounded-md">
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
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
        />
        <button onClick={handleAddFriend} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
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
