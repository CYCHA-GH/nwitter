import { useState } from "react";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount] = useState(true);
  
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
      <div className="authBtns">
                <button  name="google" className="authBtn">
                    Continue with Google
                </button>
                <button  name="github" className="authBtn">
                    Continue with Github
                </button>
            </div>
    </div>
  );
}

export default Auth