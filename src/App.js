
import { publicRoutes } from './routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.element;

                        return <Route key={index} element={<Page />} path={route.path} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
