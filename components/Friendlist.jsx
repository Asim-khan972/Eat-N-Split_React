import React from "react";
import Friend from "./Friend";

function Friendlist({ data, onSelection, selectedFriend }) {
  //   console.log(selectedFriend);
  return (
    <ul>
      {data.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

export default Friendlist;
