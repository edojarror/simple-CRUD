import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Box, Button } from '@mui/material';
import { dataGames } from '../data/testOnly';
import PageTitle from '../components/PageTitle';

export default function EditGamePage () {
    
    let history = useNavigate();
    let gamesListData = dataGames();

    const [idValue, setIdValue] = useState("");
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
    const handleSubmit = (currentGameId) => {
        let copyOfGamesList = gamesListData.slice(0, gamesListData.length);
        let currentGameIndex = copyOfGamesList.findIndex(game => game.id === Number(currentGameId));
        let editedGameValue = 
            {
                "id": Number(idValue), 
                "title": titleValue, 
                "release": releaseValue, 
                "developer": developerValue, 
                "publisher": publisherValue, 
                "mode": modeValue, 
                "genre": genreValue, 
                "platform": platformValue, 
                "image": imageValue, 
                "description": descriptionValue, 
                "storyline": storylineValue
            }
        
        gamesListData.splice(currentGameIndex, 1, editedGameValue);
        console.log("result after edited : ",gamesListData);
        history('/games-table')
    }
    const handleChange = (event, targetedState) => {
        targetedState(event.target.value);
    }

    useEffect(() => {
        setIdValue(localStorage.getItem("id"));
        setTitleValue(localStorage.getItem("title"));
        setReleaseValue(localStorage.getItem("release"))
        setDeveloperValue(localStorage.getItem("developer")) 
        setPublisherValue(localStorage.getItem("publisher")) 
        setModeValue(localStorage.getItem("mode")) 
        setGenreValue(localStorage.getItem("genre")) 
        setPlatformValue(localStorage.getItem("platform")) 
        setImageValue(localStorage.getItem("image")) 
        setDescriptionValue(localStorage.getItem("description")) 
        setStorylineValue(localStorage.getItem("storyline"));
    },[])

    return (
        <Box>
            <PageTitle titleText="Edit Game" />
            <Box display="flex" margin={2}>
                <TextField id={idValue} label="title" value={titleValue} onChange={(event) => handleChange(event, setTitleValue)} fullWidth />    
            </Box>
            <Box display="flex" margin={2}>  
                <TextField id={idValue} label="release" value={releaseValue} onChange={(event) => handleChange(event, setReleaseValue)} /> 
            </Box>
            <Box display="flex" margin={2}>  
                <TextField id={idValue} label="developer" value={developerValue} onChange={(event) => handleChange(event, setDeveloperValue)} fullWidth /> 
            </Box>
            <Box display="flex" margin={2}>  
                <TextField id={idValue} label="publisher" value={publisherValue} onChange={(event) => handleChange(event, setPublisherValue)} fullWidth /> 
            </Box>
            <Box display="flex" margin={2}>  
                <TextField id={idValue} label="mode" value={modeValue} onChange={(event) => handleChange(event, setModeValue)} fullWidth /> 
            </Box>
            <Box display="flex" margin={2}>  
                <TextField id={idValue} label="genre" value={genreValue} onChange={(event) => handleChange(event, setGenreValue)} fullWidth /> 
            </Box>
            <Box display="flex" margin={2}>  
                <TextField id={idValue} label="platform" value={platformValue} onChange={(event) => handleChange(event, setPlatformValue)} fullWidth /> 
            </Box>
            <Box display="flex" margin={2}>  
                <TextField id={idValue} label="image" value={imageValue} onChange={(event) => handleChange(event, setImageValue)} fullWidth /> 
            </Box>
            <Box display="flex" margin={2}>  
                <TextField id={idValue} label="description" value={descriptionValue} onChange={(event) => handleChange(event, setDescriptionValue)} fullWidth /> 
            </Box>
            <Box display="flex" margin={2}>  
                <TextField id={idValue} label="storyline" value={storylineValue} onChange={(event) => handleChange(event, setStorylineValue)} fullWidth /> 
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