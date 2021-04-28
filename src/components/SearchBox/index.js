import React, { useEffect, useState } from 'react';
import useOnclickOutside from "react-cool-onclickoutside";
import ItemSearch from './ItemSearch';
import { filterUsersByName, isUserAlreadyAdded } from 'lib/utils';
const SearchBox = ({ disabled, users, usersSelected, handleUser }) => {
  
  const searchInput = React.createRef();
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const ref = useOnclickOutside(() => {
    setResults([]);
    setShowResults(false);
  });

  useEffect(() => {
    if (results.length === 0)
      setError(true);
    else
      setError(false)
  }, [results]);

  const handleSearch = (value) => {
    let search = value.trim(); // sanitaze
    if (search.length === 0) return;
    setShowResults(true)
    const data = filterUsersByName(users, search);
    setResults(data);
  }

  return (
    <div className="search-container relative" ref={ref}>
      <p className="font-semibold py-2">Select users</p>
      <div className="search-input relative text-gray-600 focus-within:text-gray-400">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </span>
        <input
          aria-label="Search users"
          autoFocus
          disabled={disabled}
          placeholder="Search for some user"
          type="text"
          ref={searchInput}
          onChange={(e) => handleSearch(e.target.value)}
          style={{ borderColor: (error && showResults) ? 'red' : false }}
          className="px-4  pl-10 transition py-2 border-gray-300 focus:outline-none focus:border-blue-500 border-2 block w-full rounded-md bg-white text-gray-900" />
      </div>
      { showResults && <ResultList results={results} handleUser={handleUser} usersSelected={usersSelected} />}
    </div>
  )
}

const ResultList = React.memo(({ results, handleUser, usersSelected }) => {
  return (
    <div className="result-list border-2 border-gray-300 mt-3 shadow-xl bg-white p-2 absolute w-full b transition-all rounded-md">
      {results.length > 0 ?
        results.map((item) => <ItemSearch key={item.email} item={item} handleClick={handleUser} alreadyExist={isUserAlreadyAdded(usersSelected, item.email)} />) :
        <p className="px-2 text-red-400">No user found with that value</p>
      }
    </div>
  )
})

export default SearchBox;