import { useState, useEffect } from "react";

const fetchUsers = async () => {
  const response = await fetch('https://boolean-uk-api-server.fly.dev/josteinlaa/contact')
  const data = await response.json()
  return data
}

function UsersSection() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(data => setUsers(data))
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul>
          {users.map(user => (
            <li style={{ backgroundColor: user.favouriteColour }} key={user.id}>
              <img src={user.profileImage} alt={user.firstname} />
              <h2>{user.firstName+' '+user.lastName}</h2>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default UsersSection
