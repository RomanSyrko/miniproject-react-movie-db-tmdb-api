import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./Layouts";
import {HomePage, MovieInfoPage, UserPage} from "./Pages";
import './App.css';


function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'home/details'} element={<MovieInfoPage/>}/>
                <Route path={'user'} element={<UserPage/>}/>
            </Route>
        </Routes>
    );
}


export default App;
