import { connect } from 'react-redux';
import { Box, Grid } from '@mui/material';
import PreviewCard from './components/PreviewCard';
import ButtonComponent from './components/ButtonComponent';

const mapStateToProps = state => ({gameList: state.gamesData, movieList : state.moviesData})

const App = ({gameList, movieList}) => {
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
          gameList.map((game, index) => index < 3 
            ? <Grid key={game.id} item>
                <PreviewCard title={game.title} image={game.image} linkTo={`/games/${game.id}`} isMovie={false} />
              </Grid>
            : null
          )
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
          movieList.map((movie,index) => index < 3 
            ? <Grid key={movie.id} item>
                <PreviewCard title={movie.title} image={movie.image} linkTo={`/movies/${movie.id}`} isMovie={true} />
              </Grid>
            : null
          )
        }
        </Grid>
        
      </nav>
    </div>
  );
}

export default connect(mapStateToProps) (App);

// work as Home not App