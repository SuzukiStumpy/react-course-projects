import Button from "./Button";

export default function Friend({ friend, selected, onSelect }) {
    return (
        <li className={selected ? "selected" : ""}>
            <img src={friend.image} alt={friend.name} />
            <h3>
                {friend.name}
            </h3>

            {friend.balance < 0 && <p className="red">You owe {friend.name} £{Math.abs(friend.balance)}</p>}
            {friend.balance > 0 && <p className="green">{friend.name} owes you £{friend.balance}</p>}

            <Button onClick={() => onSelect(friend)}>{selected ? "Close" : "Select"}</Button>
        </li >
    );
}