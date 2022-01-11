import {useState} from  'react'

function AppForm () {

    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');


    const [people, setPeople] = useState([]);

    const submitForm =(e)=>{
        e.preventDefault();
        if(firstName && email){
            const person = {id:new Date().getTime().toString(), firstName, email};
            setPeople((people)=>{
                return [...people, person];
            })
            setFirstName('');
            setEmail('');
        }else{
            console.log('empty')
        }
        }

    
console.log(people);
    return (

<>
<article>
    <form className='form' onSubmit={submitForm}>
        <div className='form-control'>
            <label htmlFor='firstName'>Name:</label>
            <input type='text'
                   id='firstName'
                   name='firstName'
                   value={firstName}
                   onChange={(e)=>setFirstName(e.target.value)}></input>
        </div>
        <div className='form-control'>
            <label  htmlFor='email'>Email:</label>
            <input type='text'
                   id='email'
                   name='email'
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
                   ></input>
        </div>
        <button type='submit' > add person</button>

    </form>

    
    {people.map((person)=>{
    
         const {firstName, email, id} = person;

        return(
            <div key={id} className='item'>
                <p>{id}</p>
                <h4>{firstName}</h4>
                <p>{email}</p>
            </div>
        )
    })}
</article>
</>

    )
}


export default AppForm