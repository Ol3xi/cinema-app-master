import axios from "axios";
import React, { useEffect, useState, ChangeEvent } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import { Search } from "../Search";

export type MovieData = {
  id: number;
  original_title: string;
  overview: string;
  backdrop_path: string;
};

export interface SearchProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Home = () => {
  const baseUrl = "https://api.themoviedb.org/3";
  const API_Key = "&api_key=3dd24b8a6a5ad0320dc5b8b5ec38c4ef";
  const url =
    baseUrl + "/discover/movie?sort_by=popularity.desc" + API_Key;
  const [movieData, setMovieData] = useState<MovieData[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredMovies, setFilteredMovies] = useState<MovieData[]>([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setMovieData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const filtered = movieData.filter((movie) =>
      movie.original_title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [movieData, searchValue]);

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  return (
    <>
      <Container className="container">
        <Search value={searchValue} onChange={handleSearchInputChange} />
        <Row xs={1} md={2} lg={4}>
          {filteredMovies.map((movie) => (
            <Col key={movie.id}>
              <Card className="card">
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                />
                <Card.Body>
                  <Card.Title>{movie.original_title}</Card.Title>
                  <Card.Text>{movie.overview.slice(0, 90)}</Card.Text>
                  <Button>Per saperne di più</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
