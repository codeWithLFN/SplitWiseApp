// FriendList.js
import { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';


const FriendList = ({ friends, onAddFriend }) => {
  const [newFriend, setNewFriend] = useState('');

  const handleAddFriend = () => {
    if (newFriend.trim() !== '') {
      onAddFriend(newFriend.trim());
      setNewFriend('');
    }
  };

  return (
    <div className="list-container">
      <h2 className="list-header">Friends</h2>
      <ul className="list">
        {friends.map((friend, index) => (
          <li key={index} className="list-item">
            {friend}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Enter friend's name"
          value={newFriend}
          onChange={(e) => setNewFriend(e.target.value)}
          className="input-text"
        />
        <button onClick={handleAddFriend} className="add-friend-btn">
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

