import classes from './Auth.module.css';
import {useDispatch} from "react-redux";
import {authActions} from "../../store/slices/authSlice";
import {useState} from "react";

const Auth = () => {

  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onLogin = (event) => {
    event.preventDefault()
    dispatch(authActions.login({username, password}))
  }

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input value={username} onChange={(event) => {setUsername(event.target.value)}} type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input value={password} onChange={(event) => {setPassword(event.target.value)}} type='password' id='password' />
          </div>
          <button onClick={onLogin}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
