import React from 'react';

const ItemSearch = ({ item, handleClick, alreadyExist }) => {
  const { name } = item;
  const userHandleClick = () => {
    if(!alreadyExist)
      handleClick(item);
  }
  return (
    <div className="p-2 hover:bg-gray-200 rounded-md cursor-pointer" onClick={() => userHandleClick()}>
       {name.first + " " + name.last} { alreadyExist && <span className="bg-gray-100 p-1 px-2 ml-2 rounded-sm text-sm">Already added</span>}
    </div>
  )

}


export default ItemSearch;