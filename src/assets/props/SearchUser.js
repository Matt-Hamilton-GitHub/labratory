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
  
  const [isUsers,setUsers] = useState(arr)
  const [isUserName, setUserName] = useState('')

  return (
    <section className='section-users'>
      <form >
        <input 
        type='text'
        name='isUserName' 
        value={isUserName}
        onChange={(e)=>{setUserName(e.target.value)}}
        ></input>
      </form>
      <div>{isUserName}</div>
    </section>
    
  )
}

export default SearchUser