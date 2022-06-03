import {Outlet, NavLink} from "react-router-dom";

import css from './MainLayout.module.css'

const MainLayout = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to="/home" className={css.marginL}>MovieDB</NavLink>
                <div className={css.MLDisplayFlex}>
                    <img src="https://www.svgrepo.com/show/111216/user.svg" alt="User" className={css.userPic}/>
                    <NavLink to="/user">User</NavLink>
                </div>
            </div>
            <Outlet/>
        </div>
    );
};

export {MainLayout};