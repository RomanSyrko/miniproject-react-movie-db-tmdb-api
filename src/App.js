import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./Layouts";
import {HomePage, SingleMoviePage, UserPage} from "./Pages";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'movieDetails'} element={<SingleMoviePage/>}/>
                <Route path={'user'} element={<UserPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
