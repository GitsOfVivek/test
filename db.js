import React, { useState } from "react";

import "./App.css";

const App = () => {

  const [movies, setMovies] = useState([

    { name: "The Godfather", review: "Great movie!", rating: 5 },

    { name: "The Shawshank Redemption", review: "Amazing film!", rating: 5 },

    { name: "The Dark Knight", review: "Awesome movie!", rating: 4 },

  ]);

  const [editMovie, setEditMovie] = useState(null);

  const [formData, setFormData] = useState({ name: "", review: "", rating: "" });

  const handleInputChange = (event) => {

    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });

  };

  const handleSubmit = (event) => {

    event.preventDefault();

    if (editMovie !== null) {

      const newMovies = [...movies];

      newMovies[editMovie] = formData;

      setMovies(newMovies);

      setEditMovie(null);

      setFormData({ name: "", review: "", rating: "" });

    } else {

      setMovies([...movies, formData]);

      setFormData({ name: "", review: "", rating: "" });

    }

  };

  const handleEdit = (index) => {

    setEditMovie(index);

    setFormData(movies[index]);

  };

  const handleDelete = (index) => {

    const newMovies = [...movies];

    newMovies.splice(index, 1);

    setMovies(newMovies);

  };

  return (

    <div>

      <h2>{editMovie !== null ? "Edit Movie" : "Add Movie"}</h2>

      <form onSubmit={handleSubmit}>

        <input

          type="text"

          name="name"

          placeholder="Name"

          value={formData.name}

          onChange={handleInputChange}

        />

        <input

          type="text"

          name="review"

          placeholder="Review"

          value={formData.review}

          onChange={handleInputChange}

        />

        <input

          type="number"

          name="rating"

          placeholder="Rating"

          value={formData.rating}

          onChange={handleInputChange}

        />

        <br />

        <button type="submit">

          {editMovie !== null ? "Update" : "Add Movie"}

        </button>

      </form>

      <h2>Movie Reviews</h2>

      <table>

        <thead>

          <tr>

            <th>Name</th>

            <th>Review</th>

            <th>Rating</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {movies.map((movie, index) => (

            <tr key={index}>

              <td>{movie.name}</td>

              <td>{movie.review}</td>

              <td>{movie.rating}</td>

              <td>

                <button onClick={() => handleEdit(index)}>Edit</button>

                <button onClick={() => handleDelete(index)}>Delete</button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

};

export default App;
