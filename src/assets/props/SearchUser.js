import React, {useState} from 'react'



const SearchUser = () => {

  const arr = [
    {name:'Sarah',
     age: 32},
     {name:'Kevin',
     age: 22},
     {name:'Martin',
     age: 12},
     {name:'Arthur',
     age: 23}
  ]
  
  const [isUsers,setUsers] = useState([])
  const [isUserName, setUserName] = useState('')

const searchUser = (e) =>{
  e.preventDefault();
  const newArray = arr.filter( user => user.name === isUserName)
  setUsers(newArray)

}

  return (
    <section className='section-users'>
      <form onSubmit={searchUser}>
        <input 
        type='text'
        name='isUserName' 
        value={isUserName}
        onChange={(e)=>{setUserName(e.target.value)}}
        ></input>
      </form>
      <div>
        {
          isUsers.map((user)=>{
            return(
              <h1>{user.name}</h1>
            )
          })
        }
      </div>
    </section>
    
  )
}

export default SearchUser