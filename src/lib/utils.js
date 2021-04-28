export const filterUsersByName = (users, name, limit = 10) => {
  return users.filter( el => (
    el.name.first.toLowerCase().includes(name) || 
    el.name.last.toLowerCase().includes(name) ||
    (`${el.name.first.toLowerCase()} ${el.name.last.toLowerCase()}`).includes(name)
  )).slice(0,limit);
}

export const isUserAlreadyAdded = (users, value) => {
  const filtered = users.filter(x => x.email == value);
  if( filtered.length > 0 )
    return true;
  return false;
}

export const uniqueUserList = (users) => { // Removed of duplicates users because sometimes the api repeat the rows
  const unique = users.filter((item, index, arr) => arr.findIndex(e => e.email === item.email) === index); 
  return unique;
}