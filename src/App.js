import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Contact from './pages/Contact';
import './App.css';

function App() {
    return (
        <div className="App">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* Router */}

            <Routes>
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
