import { useParams } from 'react-router-dom';
import { getGame } from '../data/testOnly';
import { Box, Grid, Typography, Card, CardMedia } from '@mui/material';
import DetailedText from '../components/DetailedText';
export default function DetailedGamePage () {
    let params = useParams();  
    let dataGame = getGame(params.gameId)

    return (
        <Box padding={1} key={dataGame.id} boxSizing="border-box">
                    <Box padding={4}>
                        <Typography variant='h3' textAlign="center">{dataGame.title} </Typography>    
                    </Box>
                    <Grid container>
                        <Grid item margin={{xl: "0 auto", lg: "0 auto", md: "0 auto", xs: "0 auto"}}>
                            <DetailedText firstText="Release : " secondText={dataGame.release} marginBtm={1} />
                            <DetailedText firstText="Developer : " secondText={dataGame.developer} marginBtm={1} />
                            <DetailedText firstText="Publisher : " secondText={dataGame.publisher} marginBtm={1} />
                            <DetailedText firstText="Mode : " secondText={dataGame.mode} marginBtm={1} />
                            <DetailedText firstText="Genre : " secondText={dataGame.genre} marginBtm={1} />
                            <DetailedText firstText="Platform : " secondText={dataGame.platform} marginBtm={1} />
                        </Grid>
                        <Grid item 
                            marginBottom={{xs: 4,sm: 4, md: 4, lg: 4, xl: 4}} 
                            marginTop={{xs: 4,sm: 0, md: 0, lg: 0, xl: 0}}
                            marginLeft="auto"
                            marginRight="auto">
                            <Card>
                                <CardMedia component="img" image={dataGame.image} />
                            </Card>
                        </Grid>
                    </Grid>
                    <Box boxSizing="border-box" border="1px solid black" marginBottom={2} padding={2}>
                        <Typography component="p" variant='body1' > Description : 
                            <Typography component="span" variant='body2'>{dataGame.description}</Typography>
                        </Typography>
                    </Box>
                    <Box boxSizing="border-box" border="1px solid black" padding={2}>
                        <Typography component="p" variant='body1'> Storyline : 
                            <Typography component="span" variant='body2'>{dataGame.storyline}</Typography>
                        </Typography>    
                    </Box>
        </Box>
    )
}