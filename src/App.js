import { Box, Grid } from '@mui/material';
import PreviewCard from './components/PreviewCard';
import ButtonComponent from './components/ButtonComponent';
import { dataGames } from './data/testOnly';
import { dataMovies } from './data/testDataMovies';

function App() {
  let gamesList = dataGames();
  let moviesList = dataMovies(); 
  return (
    <div className="App">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        
        <Box display="flex" justifyContent="center" marginTop={4}>
          <ButtonComponent buttonType="linkButton" buttonText="View All Games" linkTo="/games-list" />
        </Box>
        <Grid display="flex" justifyContent={{xs: "center", sm: "space-evenly", md: "space-evenly", lg: "space-evenly"}} alignItems="flex-start" marginTop={4} spacing={2} container>
        {
           gamesList.filter((game, index) => {
            
            return game.id < 3 || index < 3
            
          }).map(game => (
            <Grid key={game.id} item>
              <PreviewCard title={game.title} image={game.image} linkTo={`/games/${game.id}`} isMovie={false} />
            </Grid>
          ))
        }
        </Grid>
        
        <Box display="flex" justifyContent="center" marginTop={4} marginBottom={4}>
          <ButtonComponent buttonType="linkButton" buttonText="View All Movies" linkTo="/movies-list" />
        </Box>
        <Grid 
          display="flex"  
          justifyContent={{xs: "center", sm: "space-evenly", md: "space-evenly", lg: "space-evenly"}} 
          spacing={{xs: 2, sm: 2}}
          container>
        {
          moviesList.filter((movie, index) => {
            return movie.id < 3 || index < 3
          }).map(movie => (
            <Grid key={movie.id} item>
              <PreviewCard title={movie.title} image={movie.image} linkTo={`/movies/${movie.id}`} isMovie={true} />
            </Grid>
          ))
        }  
        </Grid>
        
      </nav>
    </div>
  );
}

export default App;

// work as Home not App