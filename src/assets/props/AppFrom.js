import {useState} from  'react'

function AppForm () {

const [dob, setDOB] = useState('')
const [name, setName] = useState('')
const [ssn, setSSN] = useState('')
const [email, setEmail] = useState('')
const [isInputError, setInputError] = useState(false)

const [users,setUsers] = useState([])
console.log(`${name} ${dob} ${ssn}`);

const handleSubmit = (e)=>{
    e.preventDefault()
    console.log();
    let newUser = {id: new Date().getTime(),name: name,dob:dob,ssn:ssn}
    

    if(name && ssn && dob){
        setUsers([...users,newUser])
        setDOB('');
        setName('');
        setSSN('');
        console.log(users);
    }else{
        setInputError(true)
        setTimeout(function()
        {

            setInputError(false)
        },4000)
}

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

        <button>Submit</button>
    </form>

    {users.map((person)=>{
    
    const {name, ssn,dob, id} = person;

   return(
       <div key={id} className='item'>
           <h4>{name}</h4>
           <p>{ssn}</p>
           <p>{dob}</p>
       </div>
   )
})}
   
</article>
</>

    )
}


export default AppForm