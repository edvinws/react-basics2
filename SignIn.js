import { useContext } from "react"
import AuthContext from '../../App'
import { useState } from "react"


function SignIn() {

  const [auth, setAuth] = useContext(AuthContext)
  const [password, setPassword] = useState('')
  

  const checkPassword = () => {
    if(password === 'secret'){
      setAuth(true)
    } else {
      setAuth(false)
    }

    setPassword('')
  }


  return (
    <>
      <p className="p-5">
        Type password to sign in
      </p>
      <input onChange={e => setPassword(e.target.value)} className="p-5" placeholder="password" type="password" />
      <button onClick={checkPassword}>Sign In</button>
    </>
  )
}

export default SignIn