import { useParams } from 'react-router-dom';
import { getMovie } from '../data/testDataMovies';
import { Box, Grid,Card, CardMedia, Typography } from '@mui/material';
import DetailedText from '../components/DetailedText';
export default function DetailedMoviePage () {
    let params = useParams();
    let currentDataGame = getMovie(params.movieId)
    return (
        <Box boxSizing="border-box">

            <Box margin={4}>
                <Typography variant='h3' textAlign="center">{currentDataGame.title}</Typography>
            </Box>

            <Grid container display="flex" flexDirection="row">
                <Grid item  lg={6} >
                        <Box display="flex" flexDirection="column"  padding={2}>
                            <DetailedText firstText="Release Date : " secondText={currentDataGame['release-date']} marginBtm={2}/>
                            <DetailedText firstText="Duration : " secondText={currentDataGame.duration} marginBtm={2} />
                            <DetailedText firstText="Director : " secondText={currentDataGame.director} marginBtm={2} />
                            <DetailedText firstText="Writers : " secondText={currentDataGame.writers} marginBtm={2} />
                            <DetailedText firstText="Stars : " secondText={currentDataGame.stars} marginBtm={2} />
                            <DetailedText firstText="Genre : " secondText={currentDataGame.genre} marginBtm={2} />
                        </Box>
                </Grid>
                <Grid item  lg={6} sx={{margin: "0 auto"}}>
                    <Box display="flex" justifyContent="center" alignItems="center"  >
                        <Card>
                            <CardMedia 
                                component="img" 
                                image={currentDataGame.image} 
                                height="400"  
                                alt={currentDataGame.title}
                             />
                        </Card>
                    </Box>
                </Grid>
            </Grid>

            <Box marginTop={{lg: "12vh", xl: 16, md: 0, sm: 0, xs: 2}}>
                <DetailedText firstText="Description : " secondText={currentDataGame.description} marginBtm={2} />
            </Box>
        </Box>
    )
}