import { connect } from 'react-redux';
import { Box, Grid } from '@mui/material';
import PreviewCard from '../components/PreviewCard';
import PageTitle from '../components/PageTitle';

const mapStateToProps = state => ({moviesData : state.moviesData})
const MovieListPage = ({moviesData}) => {
    return (
        <Box margin={{xl: 11, lg: 5}}>
            <PageTitle titleText="Movies List" />
            <Grid container 
                direction="row" 
                justifyContent={{xs: 'space-evenly', sm: "flex-start", md: "flex-start", lg: "flex-start", xl: "flex-start"}} 
                marginLeft={{sm: 6, xl: 4, lg: 4}} 
                alignItems="center" 
                spacing={{lg: 6, xl: 6, md: 2, sm: 2}}>
                {
                    moviesData.map(movie => 
                        <Grid key={movie.id} item >
                            <PreviewCard key={movie.id} title={movie.title} image={movie.image} linkTo={`/movies/${movie.id}`} isMovie={true} />
                        </Grid>
                    )
                }
            </Grid>   
        </Box>
    )
}

export default connect(mapStateToProps) (MovieListPage)