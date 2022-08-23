import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNewGame } from '../actions/actionCreator';
import { Box, TextField, Button } from '@mui/material';
import PageTitle from '../components/PageTitle';

const mapStateToProps = state => ({ gamesData : state.gamesData});
const matchDispatchToProps = dispatch => bindActionCreators({addGameDispatcher : addNewGame}, dispatch)
const AddGamePage = ({gamesData, addGameDispatcher})  => {
  let history = useNavigate();
  const [titleValue, setTitleValue] = useState("");
  const [releaseValue, setReleaseValue] = useState('');
  const [developerValue, setDeveloperValue] = useState('');
  const [publisherValue, setPublisherValue] = useState("");
  const [modeValue, setModeValue] = useState('');
  const [genreValue, setGenreValue] = useState("");
  const [platformValue, setPlatformValue] = useState('');
  const [imageValue, setImageValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState('');
  const [storylineValue, setStorylineValue] = useState("");

  
  const handleChange = (event, targetedState) => {
    targetedState(event.target.value);
  }

  const getLastGameId = (currentGameList) => {
    let lastIndexOnGameList = currentGameList.length - 1
    let searchlastGameId = Number(currentGameList.filter((game, index) => index === lastIndexOnGameList).map(game => game.id))
    console.log(searchlastGameId)
    return searchlastGameId + 1
  }

  const handleSubmit = () => {
    if(titleValue === "" || releaseValue === "" || developerValue === "" || publisherValue === "" || modeValue === "" || genreValue === "" || platformValue === "" || imageValue === "" || descriptionValue === "" || storylineValue === "") {
      alert("fill all forms first before proceed !!!");
      return
    }
    
    let nextGameData = 
      {
        "id": getLastGameId(gamesData),
        "title": titleValue,
        "release": Number(releaseValue),
        "developer": developerValue,
        "publisher": publisherValue,
        "mode": modeValue,
        "genre": genreValue,
        "platform": platformValue,
        "image": imageValue,
        "description": descriptionValue,
        "storyline": storylineValue
      } 
      
    addGameDispatcher(nextGameData);
    history('/games-table');
  }

  return (
    <Box>
      <PageTitle titleText="Add Game" />
      <Box display="flex" margin={2}>
                <TextField id="inputTitle" label="Title" value={titleValue} onChange={(event) => handleChange(event, setTitleValue)} fullWidth required />    
            </Box>
            <Box display="flex" margin={2}>  
                <TextField id="inputRelease" label="Release" value={releaseValue} onChange={(event) => handleChange(event, setReleaseValue)} required /> 
            </Box>
            <Box display="flex" margin={2}>  
                <TextField id="inputDeveloper" label="Developer" value={developerValue} onChange={(event) => handleChange(event, setDeveloperValue)} fullWidth required /> 
            </Box>
            <Box display="flex" margin={2}>  
                <TextField id="inputPublisher" label="Publisher" value={publisherValue} onChange={(event) => handleChange(event, setPublisherValue)} fullWidth required /> 
            </Box>
            <Box display="flex" margin={2}>  
                <TextField id="inputMode" label="Mode" value={modeValue} onChange={(event) => handleChange(event, setModeValue)} fullWidth required /> 
            </Box>
            <Box display="flex" margin={2}>  
                <TextField id="inputGenre" label="Genre" value={genreValue} onChange={(event) => handleChange(event, setGenreValue)} fullWidth required /> 
            </Box>
            <Box display="flex" margin={2}>  
                <TextField id="inputPlatform" label="Platform" value={platformValue} onChange={(event) => handleChange(event, setPlatformValue)} fullWidth required /> 
            </Box>
            <Box display="flex" margin={2}>  
                <TextField id="inputImage" label="Image" value={imageValue} onChange={(event) => handleChange(event, setImageValue)} fullWidth required /> 
            </Box>
            <Box display="flex" margin={2}>  
                <TextField id="inputDescription" label="Description" value={descriptionValue} onChange={(event) => handleChange(event, setDescriptionValue)} fullWidth required /> 
            </Box>
            <Box display="flex" margin={2}>  
                <TextField id="inputStoryline" label="Storyline" value={storylineValue} onChange={(event) => handleChange(event, setStorylineValue)} fullWidth required /> 
            </Box>

            <Box display="flex" margin={6} justifyContent="center">  
                <Button 
                    id="addGameButton"
                    variant="contained" 
                    size='large'
                    onClick={() => handleSubmit()}>
                        Submit Changes
                </Button> 
            </Box>
      
    </Box>
  )
}

export default connect(mapStateToProps, matchDispatchToProps) (AddGamePage)