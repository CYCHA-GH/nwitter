import {useState} from "react";
import { HashRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Auth from "../routes/Auth"
import Home from "../routes/Home";
import Auth from "../routes/Home"

const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <Router>
            <Switch>
                {isLoggedIn ? (
                    <Routes exact path="/">
                    <Home/>
                    </Routes>
                ) : (0

                )}
            </Switch>
        </Router>
    )
}

export default AppRouter