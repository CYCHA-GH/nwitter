import { authService, firebaseInstance } from "firebase";
import { useState } from "react";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const toggleAccount = () => setNewAccount((prev)=>!prev);
  const onChange = (event) => {
    const {
      target : {name, value},
    } = event;
    if(name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

   const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (newAccount) {
    } else {
    }
  };
  return (
    <div>
      <form onSubmit={ onSubmit }>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={ onChange }
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <input type="submit" placeholder="Log In" value={newAccount ? "Create Account" : "Log In"} required />
      </form>
      <span onClick={toggleAccount}>
            {newAccount ? "Sign In" : "Create Account"}
      </span>
      <div>
      <button onClick={onSocialClick} name="google">
          Continue with Google
        </button>
        <button onClick={onSocialClick} name="github">
          Continue with Github
        </button>
            </div>
    </div>
  );
}
export default Auth;