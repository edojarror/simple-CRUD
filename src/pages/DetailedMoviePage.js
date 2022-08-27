import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Box, Grid,Card, CardMedia, Typography } from '@mui/material';
import DetailedText from '../components/DetailedText';

const mapStateToProps = state => ({moviesData : state.moviesData})

const DetailedMoviePage = ({ moviesData }) => {
    let params = useParams();
    const findingDetailedMovie = (targetedId, targetedData) => targetedData.find(movie => movie.id === Number(targetedId))
    let movieData = findingDetailedMovie(params.movieId, moviesData)
    
    return (
        <Box boxSizing="border-box">

            <Box margin={4}>
                <Typography variant='h3' textAlign="center">{movieData.title}</Typography>
            </Box>

            <Grid container display="flex" flexDirection="row">
                <Grid item  lg={6} >
                        <Box display="flex" flexDirection="column"  padding={2}>
                            <DetailedText firstText="Release Date : " secondText={movieData['release-date']} marginBtm={2}/>
                            <DetailedText firstText="Duration : " secondText={movieData.duration} marginBtm={2} />
                            <DetailedText firstText="Director : " secondText={movieData.director} marginBtm={2} />
                            <DetailedText firstText="Writers : " secondText={movieData.writers} marginBtm={2} />
                            <DetailedText firstText="Stars : " secondText={movieData.stars} marginBtm={2} />
                            <DetailedText firstText="Genre : " secondText={movieData.genre} marginBtm={2} />
                        </Box>
                </Grid>
                <Grid item  lg={6} sx={{margin: "0 auto"}}>
                    <Box display="flex" justifyContent="center" alignItems="center"  >
                        <Card>
                            <CardMedia 
                                component="img" 
                                image={movieData.image} 
                                height="400"  
                                alt={movieData.title}
                             />
                        </Card>
                    </Box>
                </Grid>
            </Grid>

            <Box marginTop={{lg: "12vh", xl: 16, md: 0, sm: 0, xs: 2}}>
                <DetailedText firstText="Description : " secondText={movieData.description} marginBtm={2} />
            </Box>
        </Box>
    )
}

export default connect(mapStateToProps) (DetailedMoviePage)