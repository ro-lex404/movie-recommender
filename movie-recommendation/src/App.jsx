import { redirect } from "react-router-dom";
import "../styles/index.scss";  // Fixed path
import { useState } from "react";

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
                                image="/static/piratesofthecaribbean.jpeg"  // Added leading slash
                                title="Pirates of the Caribbean" 
                            />
                            <MovieCard 
                                image="/static/fastandfurious5.jpeg"  // Added leading slash
                                title="Fast and Furious 5" 
                            />
                            <MovieCard 
                                image="/static/toystory3.jpeg"  // Added leading slash
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
                                image="/static/friends.jpeg"  // Added leading slash
                                title="Friends" 
                            />
                            <MovieCard 
                                image="/static/theoffice.jpeg"  // Added leading slash
                                title="The Office" 
                            />
                            <MovieCard 
                                image="/static/squidgame.jpeg"  // Added leading slash
                                title="Squid Game" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function MovieCard({ image, title }) {
    return (
        <div className="movie">
            <a href="/MovieBox" className="movie-link">
                <div className="cont1-movie movie-pic">
                    <img src={image} alt={title} />
                </div>
                <div className="cont1-movie movie-text">{title}</div>
            </a>
        </div>
    );
}

export default App;