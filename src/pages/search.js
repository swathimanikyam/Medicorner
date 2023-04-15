import './search.css';
import pic from './pic3.jpg';

const SearchBar = () => {
    return (
        <div class="search-container">
            <form action="/search">
                <select className="places">
                    <option>Rajamahendravaram</option>
                    <option>Visakhapatnam</option>
                    <option>Hyderabad</option>
                    <option>Karkarduma</option>
                </select>
                <input type="text" placeholder="Search..." />
                <button type="submit">Search</button>
                <img src={pic} alt="pic" />
            </form>
        </div>
    );
};

export default SearchBar;
