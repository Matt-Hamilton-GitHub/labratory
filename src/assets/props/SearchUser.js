import axios from 'axios'
import React, {useState, useEffect} from 'react'



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


const fetchData = async()=>{
  const req = await axios.get('/users/get-data/')
  // const response = await fetch('https://dry-temple-96048.herokuapp.com/users/get-data');
  // const data = await response.json();
  // console.table(data)
}



useEffect(()=>{
  fetchData();
},[])


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