// FriendList.js
import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.div`
  margin-top: 20px;
`;

const ListHeader = styled.h2`
  margin-bottom: 10px;
`;

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 5px;
`;

const FriendList = ({ friends, onAddFriend }) => {
  const [newFriend, setNewFriend] = useState('');

  const handleAddFriend = () => {
    if (newFriend.trim() !== '') {
      onAddFriend(newFriend.trim());
      setNewFriend('');
    }
  };

  return (
    <ListContainer>
      <ListHeader>Friends</ListHeader>
      <ul>
        {friends.map((friend, index) => (
          <ListItem key={index}>{friend}</ListItem>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Enter friend's name"
          value={newFriend}
          onChange={(e) => setNewFriend(e.target.value)}
        />
        <button onClick={handleAddFriend}>Add Friend</button>
      </div>
    </ListContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  onAddFriend: PropTypes.func.isRequired,
};

export default FriendList;
