import css from './MainLayout.module.css'
import {Outlet, NavLink} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to="/home" className={css.btn}>MovieDB</NavLink>
                <NavLink to="/user" className={css.btn}>User</NavLink>
            </div>
            <Outlet/>
        </div>
    );
};

export {MainLayout};