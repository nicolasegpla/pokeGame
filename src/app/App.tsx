import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import useRoutesService from '../presentation/routes/useRoutesService';

function App() {
    const routes = useRoutesService();

    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route) => (
                    <Route key={route.path} path={route.path} element={route.element} />
                ))}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
