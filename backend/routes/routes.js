import express from 'express';
import { showMovies, showMoviesByTitle, addMovie} from '../controllers/film.js';

const router = express.Router();

router.get('/movies', showMovies);
router.get('/movies:title', showMoviesByTitle);
router.post('/movies', addMovie);

export default router;