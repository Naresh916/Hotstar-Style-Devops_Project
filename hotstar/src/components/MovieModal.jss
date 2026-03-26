import React from "react";
import "./MovieModal.css";

function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <img
          className="modal-poster"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

        <h2>{movie.title}</h2>
        <p><strong>Rating:</strong> {movie.vote_average}</p>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p className="modal-desc">{movie.overview}</p>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default MovieModal;
