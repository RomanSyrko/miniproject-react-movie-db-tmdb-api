import {Outlet, NavLink} from "react-router-dom";

import './MainLayout.css'

const MainLayout = () => {

    //Theme (App)
    const changeTheme = () => {
        const theme = localStorage.getItem("theme");

        if (theme !== "dark") {
            localStorage.setItem("theme", "dark");
            document.body.classList.add("dark")
        } else {
            localStorage.removeItem("theme");
            document.body.classList.remove("dark")
        }
    }

    return (
        <div>
            <header>
                <NavLink to="/home" className={"MovieDB"}>MovieDB</NavLink>
                <div className={"ImgUserBox"}>
                    <button onClick={changeTheme}>Theme</button>
                    <img src="https://www.svgrepo.com/show/111216/user.svg" alt="User" className={"userPic"}/>
                    <NavLink to="/user">User</NavLink>
                </div>
            </header>
            <Outlet/>
        </div>
    );
};

export {MainLayout};