import { Fragment } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Container, Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import App from '../App';
import GamesTable from '../pages/GamesTable';
import MoviesTable from '../pages/MoviesTable';
import GameListPage from '../pages/GamesList-Page';
import MovieListPage from '../pages/MoviesList-Page';
import DetailedGamePage from '../pages/DetailedGamePage';
import DetailedMoviePage from '../pages/DetailedMoviePage';
import AddGamePage from '../pages/AddGamePage';
import AddMoviePage from '../pages/AddMoviePage';
import EditGamePage from '../pages/EditGamePage';
import EditMoviePage from '../pages/EditMoviePage';

export default function Router () {
    return (
        <BrowserRouter>
            <Fragment>
                <Container maxWidth="false" disableGutters>
                    <Box>
                        <Header/>
                        <Box style={{boxSizing: "border-box", padding: "1rem auto"}}> 
                            <Box>
                                <Routes>
                                    <Route path='/' element={<App />}></Route>
                                    <Route path="/games/:gameId" element={<DetailedGamePage />} />
                                    <Route path="/movies/:movieId" element={<DetailedMoviePage />} />
                                    <Route path='movies-table' element={<MoviesTable />}></Route>
                                    <Route path='games-table' element={<GamesTable />}></Route>
                                    <Route path="movies-list" element={<MovieListPage />} />
                                    <Route path="games-list" element={<GameListPage />} />
                                    <Route path="add-game" element={<AddGamePage />} />
                                    <Route path="add-movie" element={<AddMoviePage />} />
                                    <Route path="/edit-game/:id" element={<EditGamePage />} />
                                    <Route path="/edit-movie/:id" element={<EditMoviePage />} />
                                    <Route path='*' element={<h2>Error 404</h2>} />
                                </Routes>  
                            </Box>
                            
                        </Box>
                         <Footer />
                    </Box>
                </Container>
            </Fragment>        
        </BrowserRouter>    
    )
}