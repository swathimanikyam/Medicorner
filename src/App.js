/** @format */

import NavBar from './pages/navbar';
import './App.css';
import SearchBar from './pages/search';

function App() {
    return (
        <div className="App">
            <div className="container">
                <NavBar />
                <SearchBar />
            </div>
        </div>
    );
}
export default App;
