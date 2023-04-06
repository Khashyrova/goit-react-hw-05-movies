import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Movies from './movies/Movies';
import MovieDetailsPage from './movieDetails/MovieDetails';
import Cast from './cast/Cast';
import Reviews from './movieDetails/MovieDetailsList/Reviews/Reviews';
import NotFound from './notFound/NotFound';
import Navigation from './Navigation/Navigation';
export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:id" element={<MovieDetailsPage />}>
          <Route path="/movies/:id/cast" element={<Cast />}></Route>
          <Route path="/movies/:id/reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
