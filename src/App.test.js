import { render, fireEvent } from '@testing-library/react';
import SearchBox from "components/SearchBox";

describe('This will test the Search User component', () => {

  const userList = [{ "name": { "title": "Miss", "first": "Darlene", "last": "da Luz" }, "email": "darlene.daluz@example.com" }, { "name": { "title": "Mr", "first": "Logan", "last": "Lee" }, "email": "logan.lee@example.com" }]

  test('Search update after change on value', () => {

    const { queryByPlaceholderText } = render(<SearchBox users={userList} usersSelected={[]} />)

    const searchInput = queryByPlaceholderText('Search for some user')

    fireEvent.change(searchInput, { target: { value: 'Kenda' } })

    expect(searchInput.value).toBe('Kenda')
  });


  test('render users suggestion after type on the search-box', () => {
    const { queryByPlaceholderText, container } = render(<SearchBox users={userList} usersSelected={[]} />)

    const searchInput = queryByPlaceholderText('Search for some user')

    fireEvent.change(searchInput, { target: { value: 'Kenda' } })

    const text = container.querySelectorAll('.result-list')
    expect(text.length).toEqual(1);
   
  });
  
  

  test('render not found results', () => {
    const { queryByPlaceholderText, container } = render(<SearchBox users={userList} usersSelected={[]} />)

    const searchInput = queryByPlaceholderText('Search for some user')

    fireEvent.change(searchInput, { target: { value: 'Kenda' } })

    const text = container.querySelector('.result-list')
    expect(text).toHaveTextContent("No user found with that value");
   
  });

  test('render user suggestion on results', () => {
    const { queryByPlaceholderText, container } = render(<SearchBox users={userList} usersSelected={[]} />)

    const searchInput = queryByPlaceholderText('Search for some user')

    fireEvent.change(searchInput, { target: { value: 'darlene' } })

    const text = container.querySelector('.result-list')
    expect(text).toHaveTextContent("Darlene da Luz");
   
  });

})