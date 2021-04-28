import React from 'react';
import RemoveIcon from 'assets/icons/remove';

const Item = ({ name, email, removeUser }) => {
  return (
    <div className="p-2 rounded-md cursor-pointer flex justify-between my-2 items-center ">
      <div><span className="bg-gray-100 text-gray-700 rounded-md p-1 px-2 mr-4 ">{name.first + " " + name.last}</span> {email}</div>
      <button className="bg-gray-300 flex font-sm items-center text-gray-800 p-2 px-2 rounded-md hover:shadow-md hover:bg-gray-200" onClick={() => removeUser(email, true)}>
        <RemoveIcon /> <span className="mx-2">Remove</span>
      </button>
    </div>
  )

}


export default Item;