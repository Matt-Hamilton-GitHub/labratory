import React, {useState} from 'react'
import styled from 'styled-components';

function Form() {

    const [fName,setFName] = useState('');
    const [lName,setLName] = useState('');
    const [nName,setNName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [passwordConfirm,setPasswordConfirm] = useState('');

    const [info,setInfo] = useState([]);
    const [message, setMessage] = useState('');

    console.log(`First: ${fName}, Last ${lName}, 'Nick ${nName}', Email: ${email}, Password: ${password}, Password Confirm: ${passwordConfirm}`);
    


    const submitInfo =(e)=>{

        e.preventDefault();
        if(fName && lName && email && password && passwordConfirm){
            if(password === passwordConfirm){
                    setInfo({...info, id: new Date().getTime(), fName:fName, lName:lName, email:email, password:password});
                    setEmail('');
                    setNName('');
                    setFName('');
                    setLName('');
                    setPassword('');
                    setPasswordConfirm('');
            }else{
                setMessage('Wrong Password');

               
            }
        }else{
            setMessage('Please fill out enter all information above');
        }

        setTimeout(()=>{
            setMessage('');
            console.log(message);
        },3000)
    }

    console.table(info);


  return (
      <Wrapper>
        <div className="form-section"><h1>Sign Up</h1></div>
        <form 
        type='submit'
        onSubmit={(e)=>submitInfo(e)}>
            <input 
            placeholder="First Name"
            value={fName}
            name='fName'
            onChange={(e)=>setFName(e.target.value)}/>
            <input 
            placeholder="Last Name"
            value={lName}
            name='lName'
            onChange={(e)=> setLName(e.target.value)} />
            <input 
            placeholder="Nick Name"
            value={nName}
            name='nName'
            onChange={(e)=>setNName(e.target.value)} />
            <input 
            placeholder="Email"
            value={email}
            name='email'
            onChange={(e)=>setEmail(e.target.value)} />
            <input 
            placeholder="Password"
            value={password}
            name='password'
            onChange={(e)=>setPassword(e.target.value)}
             />
            <input 
            placeholder="Confirm Password"
            value={passwordConfirm}
            name='passwordConfirm'
            onChange={(e)=>setPasswordConfirm(e.target.value)} />

            <Message display={message ? 'block' :'none'}>{message}</Message>
            <button > Submit</button>
        </form>
       
      </Wrapper>
    
  )
}

export default Form

const Wrapper = styled.div`
    
    display:flex;
    margin:15vh 30vw;
    flex-direction:column;
    text-align:center;
    justify-content:center;
    max-width:500px;

    .form-section{
        margin-bottom: 50px;
    }

    input {
        padding:5px;
        margin:5px;
        border-radius:10px;
        border: 1px solid lightgrey;
    }

    button{
        margin-top:25px;
        padding:10px;
        width:200px;

    }
`

const Message = styled.span`
    
    display:${props => props.display};
    color:red;
`