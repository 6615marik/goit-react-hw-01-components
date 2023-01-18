import PropTypes from 'prop-types';


export const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(friend => (
            <li className="item" key={friend.id}>
                    <span className="status">{friend.isOnline}</span>
                    <img className="avatar"  alt="User avatar" width="48" src={friend.avatar}/>
                    <p className="name">{friend.name}</p>
            </li>
            ))
            }
        </ul>
    )
}
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}