import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

const App = () => {
    return (
        <div className=''>
            <Router>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
