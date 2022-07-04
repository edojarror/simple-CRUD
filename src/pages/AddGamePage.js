import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button } from '@mui/material';
import { dataGames } from '../data/testOnly';
import PageTitle from '../components/PageTitle';

export default function AddGamePage () {
  const gamesList = dataGames();
  let history = useNavigate();
  let nextGameId = gamesList.length + 1;
  const [idValue, setIdValue] = useState(nextGameId.toString());
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

  const handleSubmit = () => {
    if(titleValue === "" || releaseValue === "" || developerValue === "" || publisherValue === "" || modeValue === "" || genreValue === "" || platformValue === "" || imageValue === "" || descriptionValue === "" || storylineValue === "") {
      alert("fill all forms first before proceed !!!");
      return
    }
    let nextGameData = 
      {
        "id": Number(idValue),
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
    gamesList.push(nextGameData);
    history('/games-table');
  }

  return (
    <Box>
      <PageTitle titleText="Add Game" />
      <Box display="flex" margin={2}>
                <TextField id={idValue} label="Title" value={titleValue} onChange={(event) => handleChange(event, setTitleValue)} fullWidth required />    
            </Box>
            <Box display="flex" margin={2}>  
                <TextField id={idValue} label="Release" value={releaseValue} onChange={(event) => handleChange(event, setReleaseValue)} required /> 
            </Box>
            <Box display="flex" margin={2}>  
                <TextField id={idValue} label="Developer" value={developerValue} onChange={(event) => handleChange(event, setDeveloperValue)} fullWidth required /> 
            </Box>
            <Box display="flex" margin={2}>  
                <TextField id={idValue} label="Publisher" value={publisherValue} onChange={(event) => handleChange(event, setPublisherValue)} fullWidth required /> 
            </Box>
            <Box display="flex" margin={2}>  
                <TextField id={idValue} label="Mode" value={modeValue} onChange={(event) => handleChange(event, setModeValue)} fullWidth required /> 
            </Box>
            <Box display="flex" margin={2}>  
                <TextField id={idValue} label="Genre" value={genreValue} onChange={(event) => handleChange(event, setGenreValue)} fullWidth required /> 
            </Box>
            <Box display="flex" margin={2}>  
                <TextField id={idValue} label="Platform" value={platformValue} onChange={(event) => handleChange(event, setPlatformValue)} fullWidth required /> 
            </Box>
            <Box display="flex" margin={2}>  
                <TextField id={idValue} label="Image" value={imageValue} onChange={(event) => handleChange(event, setImageValue)} fullWidth required /> 
            </Box>
            <Box display="flex" margin={2}>  
                <TextField id={idValue} label="Description" value={descriptionValue} onChange={(event) => handleChange(event, setDescriptionValue)} fullWidth required /> 
            </Box>
            <Box display="flex" margin={2}>  
                <TextField id={idValue} label="Storyline" value={storylineValue} onChange={(event) => handleChange(event, setStorylineValue)} fullWidth required /> 
            </Box>

            <Box display="flex" margin={6} justifyContent="center">  
                <Button 
                    id={idValue} 
                    variant="contained" 
                    size='large'
                    onClick={() => handleSubmit(idValue)}>
                        Submit Changes
                </Button> 
            </Box>
      
    </Box>
  )
}