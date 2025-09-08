import { useLocation, useParams } from 'react-router-dom';

function MovieBox() {
    const location = useLocation();
    const { id } = useParams();
    
    // Extract both title and image from the passed state
    const { title, image } = location.state || {};

    // Handle case where no state was passed (direct URL access)
    if (!location.state) {
        return (
            <div className="movie-box-page">
                <h2>Movie not found</h2>
                <p>No movie data available</p>
            </div>
        );
    }

    return (
        <div className="movie-box-page">
            <div className="movie-header">
                <h1>{title}</h1>
            </div>
            
            <div className="movie-content">
                <div className="movie-image">
                    <img src={image} alt={title} />
                </div>
                
                <div className="movie-details">
                    <h2>Movie Details</h2>
                    <p><strong>Title:</strong> {title}</p>
                    <p><strong>ID:</strong> {id}</p>
                    
                    {/* Add more movie details here */}
                    <div className="movie-description">
                        <h3>Description</h3>
                        <p>Movie description goes here...</p>
                    </div>
                    
                    <div className="movie-actions">
                        <button className="watch-btn">Watch Now</button>
                        <button className="favorite-btn">Add to Favorites</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieBox;