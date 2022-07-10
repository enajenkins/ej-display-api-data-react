// import react and the hooks we'll need
import React, { useState, useEffect } from "react"; 

const url = 'https://api.github.com/users'

const GithubConnection = () => {
  // set up state values
  const [users, setUsers] = useState([]) // empty array since we are fetching an array of data fron the api

  // fetch data via async/await - https://javascript.info/async-await
  const fetchUsers = async () => {
    const response = await fetch(url)
    const users = await response.json() // display data in json format
    setUsers(users)
    console.log(users)
  }

  // useEffect hook for
  useEffect(() => {
    fetchUsers()
  }, []) // leave the dependency array arg empty so it only fires on the initial render rather than firing every time a dependency changes.

  return (
    <>
    {/* map over the users data array and destructure | return a list  */}
    <ul>
    {users.map((user) => {
        const { id, login, avatar_url, html_url } = user
        return (
          <li key={id}>
            <h2 className="username">{login}</h2>
            <img src={avatar_url} alt={login} />
            <a href={html_url}>Github Profile</a>
          </li>
        )
      })}
    </ul>
    </>
  )
}

export default GithubConnection;