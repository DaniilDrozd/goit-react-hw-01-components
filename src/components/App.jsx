import { Profile } from 'components/Profile/Profile';
import user from 'data/user.json';
import { Statistics } from 'components/Statistics/Statistics.jsx'
import data from 'data/data.json';
import FriendList from './FriendList/FriendList'; 
import friends from 'data/friends.json'
import { TransactionHistory } from 'components/TransactionHistory/Transaction'
import transactions from 'data/transactions.json'
export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location} 
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={data}
      />
       <FriendList
        friends={friends}
      />
      <TransactionHistory
        items={transactions}
      />
    </>
  );
};