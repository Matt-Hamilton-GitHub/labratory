import {useState} from  'react'
import {IoIosCloseCircle}from 'react-icons/io'

function AppForm () {

   
const [dob, setDOB] = useState('')
const [name, setName] = useState('')
const [ssn, setSSN] = useState('')
const [color, setColor] = useState('')
const [email, setEmail] = useState('')
const [isInputError, setInputError] = useState(false)

const [users,setUsers] = useState([])
console.table(users);

const handleSubmit = (e)=>{
    e.preventDefault()
    console.log();
    let newUser = {id: new Date().getTime(),name: name,dob:dob,ssn:ssn, color: color}
    

    if(name && ssn && dob && color){
        setUsers([...users,newUser])
        setDOB('');
        setName('');
        setSSN('');
        setColor('')
        console.log(users);
    }else{
        setInputError(true)
        setTimeout(function()
        {

            setInputError(false)
        },3000)
}

}


const filerArray=(id)=>{
    setUsers(users.filter(user => user.id !== id))
}


    return (

<>
<article>

    
    <form className='form' onSubmit={handleSubmit}>
        
    {isInputError ? <span className='input-error'>Invalid Input</span> : null}
        <label > Name </label>
        <input 
        type='text'
        name='name'
        value={name}
        onChange={(e)=>{setName(e.target.value)}} />

        <label >Date of Birth</label>
        <input 
        type='date'
        name='dob'
        value={dob}
        onChange={(e)=>{setDOB(e.target.value)}} />

        <label >Social Security Number</label>
        <input 
        type='password'
        pattern='[0-9]*'
        inputMode='numeric'
        name='ssn'
        value={ssn}
        onChange={(e)=>{setSSN(e.target.value)}} />

        <label >Color</label>
        <input 
        type='color'
        name='color'
        value={color}
        onChange={(e)=>{setColor(e.target.value)}} />


        <button>Submit</button>
    </form>

    {users.map((person)=>{
    
    const {name, ssn,dob,color, id} = person;

   return(
       <div 
       key={id} 
       className='item'>
           <h4 style={{color:color}}>{name}</h4>
           <p>{ssn}</p>
           <p>{dob}</p>
           <span onClick={()=>{filerArray(id)}}><IoIosCloseCircle style={{cursor:'pointer'}} size={20}/></span>
       </div>
   )
})}
   
</article>
</>

    )
}


export default AppForm