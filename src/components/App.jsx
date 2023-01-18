import { Profile } from './Profile/Profile';
import user from '../data/user.json';

import { Statatiscs } from './Statistics/Statistics';
import data from '../data/data.json';

import {FriendList} from './FriendList/FriendList'
import friends from '../data/friends.json'

import {TransactionHistory} from './TransactionHistory/TransactionHistory'
import transactions from '../data/transactions.json'

export const App = ({ username, tag, location, avatar, stats }) => {
  
  return (
  <>
    <>
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}/>
      </>

      <>
        <Statatiscs title="Upload stats"stats={data}/>
      </>

      <>
        <FriendList friends={friends} />
      </>

      <>
        <TransactionHistory items={transactions} />
      </>
  </>
  )
};

