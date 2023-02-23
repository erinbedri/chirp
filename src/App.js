import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Posts from "./components/Posts/Posts";
import Logout from "./components/Logout/Logout";

import { AuthContext } from "./contexts/AuthContext";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
    const [auth, setAuth] = useLocalStorage("jwt_token", {});

    const userLogin = (authData) => {
        setAuth(authData);
    };

    const userLogout = () => {
        setAuth({});
        localStorage.clear();
    };

    return (
        <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
            <div className="App">
                <Header />

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout />} />

                        <Route path="/posts" element={<Posts />} />
                    </Routes>
                </main>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
