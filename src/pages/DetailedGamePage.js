import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Box, Grid, Typography, Card, CardMedia } from '@mui/material';
import DetailedText from '../components/DetailedText';

const mapStateToProps = state => ({gamesData : state.gamesData});

const DetailedGamePage = ({ gamesData }) => {
    let params = useParams();  
    const findingDetailedGame = (targetedGameId, gameData) => gameData.find(game => game.id === Number(targetedGameId)) 
    let dataGame = findingDetailedGame(params.gameId, gamesData)

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

export default connect(mapStateToProps) (DetailedGamePage)