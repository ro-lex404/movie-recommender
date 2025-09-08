import { useNavigate } from "react-router-dom";
import "../styles/index.scss";  // Fixed path
import { useState } from "react";
import "./MovieBox.jsx";

function App() {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    return (
        <div>
            <header>
                <nav>
                    <div 
                        className="dropContainer"
                        onMouseEnter={() => setDropdownVisible(true)}
                        onMouseLeave={() => setDropdownVisible(false)}
                    >
                        <div className="dropbtn">Menu</div>
                        <div 
                            className="dropdownContent"
                            style={{ visibility: dropdownVisible ? 'visible' : 'hidden' }}
                        >
                            <a href="#" className="link">Movies</a>
                            <a href="#" className="link">TV Shows</a>
                            <a href="#" className="link">Favorites</a>
                            <a href="/login" className="link">Login</a>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="cont1">
                <h1 className="subtext">Movies and Shows</h1>
                <div className="cont1-content">
                    <div className="cont1-content-text">
                        <span className="color1"><h2>Find </h2></span>
                        <span className="color2"><h2>movies </h2></span>
                        <span className="color3"><h2>based </h2></span>
                        <span className="color4"><h2>on </h2></span>
                        <span className="color5"><h2>what </h2></span>
                        <span className="color6"><h2>you </h2></span>
                        <span className="color7"><h2>watched</h2></span>
                    </div>
                    <div className="content-container">
                        <div className="cont1-movies">
                            <MovieCard
                                id="000001"
                                image="/static/piratesofthecaribbean.jpeg"
                                title="Pirates of the Caribbean" 
                            />
                            <MovieCard 
                                id="000002"
                                image="/static/fastandfurious5.jpeg"
                                title="Fast and Furious 5" 
                            />
                            <MovieCard 
                                id="000003"
                                image="/static/toystory3.jpeg"
                                title="Toy Story 3" 
                            />
                        </div>
                        
                        <div className="cont1-content-text">
                            <span className="color1"><h2>Find </h2></span>
                            <span className="color2"><h2>shows </h2></span>
                            <span className="color3"><h2>based </h2></span>
                            <span className="color4"><h2>on </h2></span>
                            <span className="color5"><h2>what </h2></span>
                            <span className="color6"><h2>you </h2></span>
                            <span className="color7"><h2>watched</h2></span>
                        </div>
                        <div className="cont1-shows">
                            <MovieCard 
                                id="000004"
                                image="/static/friends.jpeg"
                                title="Friends" 
                            />
                            <MovieCard 
                                id="000005"
                                image="/static/theoffice.jpeg"
                                title="The Office" 
                            />
                            <MovieCard 
                                id="000006"
                                image="/static/squidgame.jpeg"
                                title="Squid Game" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Fixed: Changed from useMovieCard to MovieCard (proper component naming)
function MovieCard({ id, image, title }) {
    const navigate = useNavigate(); // Hook called at component level
    
    const handleMovieClick = () => {
        // Navigate to MovieBox page with movie data
        navigate(`/movie/${id}`, { 
            state: { 
                id: id,
                title: title, 
                image: image 
            }
        });
    };

    return (
        <div className="movie" onClick={handleMovieClick}>
            <div className="cont1-movie movie-pic">
                <img src={image} alt={title} />
            </div>
            <div className="cont1-movie movie-text">{title}</div>
        </div>
    );
}

export default App;