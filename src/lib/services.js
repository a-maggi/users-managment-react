/* 
/   Centralizaded file for handle all fetch of the app.
/   It are using environments variable for the endpoint to 
/   support multiple environments like dev, test, prod, sandsbox..
*/
const getUsers = (limit=100) => {
  return fetch(`${process.env.REACT_APP_API_USERS}?inc=email,name&results=${limit}`)
    .then(async (res) => {
      let data = await res.json();
      return data;
    })
    .catch(async (err) => {
      console.error(`Fail in get the forecast weather.`, err)
      throw(err);
    });
}

export {
  getUsers
}
