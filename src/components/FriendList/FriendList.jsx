import PropTypes from 'prop-types';

import styles from '../FriendList/FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <li className={styles.item} key={friend.id}>
          <span
            className={friend.isOnline ? styles.statusOn : styles.statusOff}
          ></span>
          <img
            className={styles.avatar}
            alt="User avatar"
            width="48"
            src={friend.avatar}
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
