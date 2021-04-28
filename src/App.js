import { useContext, useEffect, useState } from 'react';
import { Context } from "./context";
import Layout from 'components/Layout';
import SearchBox from 'components/SearchBox';
import Item from 'components/Item';
import { getUsers } from 'lib/services';
import { uniqueUserList } from 'lib/utils';

function App() {

  const { loadUsers, userList, personalList, addUser, removeUser } = useContext(Context); // Our values from Context
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function handleUsersRequest() { // Fetch at the begining the user list
      const data = await getUsers();
      if (!data.error){
        const userArr = uniqueUserList(data.results);
        loadUsers(userArr);
      }
      setLoading(false);
    }
    handleUsersRequest()
  }, []);


  const handleUser = (item, remove = false) => {
    if (remove)
      removeUser(item)
    else
      addUser(item)
  }


  return (
    <Layout>
      <SearchBox disabled={isLoading} users={userList} usersSelected={personalList} handleUser={handleUser} />

      <h2 className="text-2xl tracking-tight my-6 text-black">
        ~ My personal list
      </h2>

      <p className="text-gray-600 dark:text-gray-400 mt-4 text-center">
        {personalList.length == 0 ?
          `No user added yet!` : `${personalList.length} user(s) included in the list`
        }
      </p>

      {personalList.map((item) => (
        <Item key={item.email} {...item} removeUser={handleUser} />
      ))}

    </Layout>
  );
}

export default App;
