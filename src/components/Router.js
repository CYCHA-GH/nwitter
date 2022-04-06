import {useState} from "react";
import { HashRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Home from "../routes/Home";
import Auth from "../routes/Auth";

const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <Router>
            <Switch>
                {isLoggedIn ? (
                    <Routes exact path="/">
                    <Home/>
                    </Routes>
                ) : (
                    <Routes exact path="/">
                    <Auth/>
                    </Routes>
                )}
            </Switch>
        </Router>
    )
}

export default AppRouter