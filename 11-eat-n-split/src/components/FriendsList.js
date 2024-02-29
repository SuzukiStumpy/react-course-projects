import Friend from './Friend'

export default function FriendsList({ friends, selectedFriend, onSelect }) {
    return (
        <ul>
            {friends.map((friend) => (
                <Friend friend={friend} key={friend.id} selected={selectedFriend?.id === friend.id} onSelect={onSelect} />
            ))}
        </ul>
    );
}