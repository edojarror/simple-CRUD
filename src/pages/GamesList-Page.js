import { connect } from 'react-redux';
import { Box, Grid } from '@mui/material';
import PreviewCard from '../components/PreviewCard';
import PageTitle from '../components/PageTitle';


const mapStateToProps = state => ({gamesData : state.gamesData})
const GameListPage = ({gamesData}) => {
    return (
        <Box>
            <PageTitle titleText="Games List" />
            <Grid container 
                display="flex" 
                justifyContent={{xs: 'space-evenly', sm: "space-evenly", md: "space-evenly", lg: "flex-start", xl: "flex-start"}} 
                marginLeft={{xl: 4, lg: 4}} 
                spacing={{lg: 2, xl: 2}}>
                {
                    gamesData.map(game => 
                        <Grid item key={game.id}>
                            <PreviewCard title={game.title} image={game.image} linkTo={`/games/${game.id}`} isMovie={false} />
                        </Grid> 
                    ) 
                }
            </Grid>
        </Box>
       
    )
}

export default connect(mapStateToProps) (GameListPage)