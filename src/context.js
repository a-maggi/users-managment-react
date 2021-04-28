import React, { useReducer } from "react";

const actions = {
  ADD_USER: "ADD_USER",
  REMOVE_USER: "REMOVE_USER",
  LOAD_USERS: "LOAD_USERS"
}

function reducer(state, action) {
  switch (action.type) {
    case actions.ADD_USER:
      return { ...state, personalList: [...state.personalList, action.value] }
    case actions.REMOVE_USER:
      const newPersonalList = state.personalList.filter(x => x.email !== action.value); // We are using the email as ID and assuming it hash a unique value for each user
      return { ...state, personalList: [...newPersonalList] }
    case actions.LOAD_USERS:
      return { ...state, userList: action.value }
    default:
      return state;
  }
}

const Context = React.createContext([{}, () => { }]); // Our empty Context ready.

const Provider = props => {
  const [state, dispatch] = useReducer(reducer, {
    userList: [],
    personalList: [],
    addUser: value => {
      dispatch({ type: actions.ADD_USER, value })
    },
    removeUser: value => {
      dispatch({ type: actions.REMOVE_USER, value })
    },
    loadUsers: value => {
      dispatch({ type: actions.LOAD_USERS, value })
    }
  });

  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};

export { Context, Provider };