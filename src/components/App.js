import {useState} from "react";
import AppRouter from "./Router";
import {authService} from "../fbase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
    <AppRouter isLoggedIn={isLoggedIn}/>
    <footer>&copy; {new Date().getFullYear()} Nwitter^^ </footer>
    </>
  );
}

export default App;
