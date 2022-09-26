import React, { useState } from "react";
import {authService, firebaseInstance} from "../../Config/Firebase";

const NwitterLogin = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [account, setAccount] = useState(true)
    const [error, setError] = useState('')

    const onSubmit = async  (e) => {
        e.preventDefault()
        try{
            let data
            if(account) {
               data = await authService.createUserWithEmailAndPassword(email, password)
            }else{
               data = await authService.signInWithEmailAndPassword(email, password)
            }
            console.log(data)
        } catch(error){
            setError(error.message)
        }
    }
    
    const toggleAccount = () => {
      setAccount((prev)=> !prev)
    }
    
    return (
        <>
          <form onSubmit={onSubmit}>
            <input 
            type='email' 
            placeholder="Email" 
            value={email||''}
            onChange={(e)=>setEmail(e.target.value) }
            required /><br/>

            <input 
            type='password' 
            placeholder="password" 
            value={password||''}
            onChange={(e)=>setPassword(e.target.value)}
            required /><br/>
            <input type='submit' value={account ? 'create new account' : 'Log In'} />
          </form><br/>
          <button onClick={toggleAccount}>{account? '로그인하기' : '계정 생성하기'}</button>
          <div>
            {error}
          </div>
          <div>
            <button onClick={ async(e)=> {
              let provider
              provider = new firebaseInstance.auth.GoogleAuthProvider()
              await authService.signInWithPopup(provider)
            }}>
            Continue with Google</button>

            <button onClick={ async(e)=> {
              let provider
              provider = new firebaseInstance.auth.GithubAuthProvider()
              await authService.signInWithPopup(provider)
            }}>
              Continue with Github</button>
          </div>
        </>
    )
}

export default NwitterLogin