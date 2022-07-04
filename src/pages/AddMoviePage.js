import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button } from '@mui/material';
import { dataMovies } from '../data/testDataMovies';
import PageTitle from '../components/PageTitle';

export default function AddMoviePage () {
    const movieList = dataMovies();
    let history = useNavigate();
    let nextMovieId = movieList.length + 1;
    const [idValue, setIdValue] = useState(nextMovieId.toString());
    const [titleValue, setTitleValue] = useState("");
    const [releaseDateValue, setReleaseDateValue] = useState('');
    const [durationValue, setDurationValue] = useState('');
    const [directorValue, setDirectorValue] = useState("");
    const [writersValue, setWritersValue] = useState("");
    const [starsValue, setStarsValue] = useState("");
    const [genreValue, setGenreValue] = useState("");
    const [imageValue, setImageValue] = useState("");
    const [descriptionValue, setDescriptionValue] = useState('');

  
    const handleChange = (event, targetedState) => {
        targetedState(event.target.value);
    }

    // let nextGameIndex = ;
    const handleSubmit = () => {
        if(titleValue === "" || releaseDateValue === "" || durationValue === "" || directorValue === "" || writersValue === "" || starsValue === "" || genreValue === "" || imageValue === "" || descriptionValue === "") {
            alert("fill all forms first before proceed !!!");
            return
        }
    let nextMovieData = 
        {
            "id": Number(idValue),
            "title": titleValue,
            "release-date": releaseDateValue,
            "duration": durationValue,
            "director": directorValue,
            "writers": writersValue,
            "stars": starsValue,
            "genre": genreValue, 
            "image": imageValue,
            "description": descriptionValue
        } 
    movieList.push(nextMovieData);
    history('/movies-table')
  }

  return (
    <Box>
        <PageTitle titleText="Add Movie" />
        <Box display="flex" margin={2}>
            <TextField id={idValue} label="Title" value={titleValue} onChange={(event) => handleChange(event, setTitleValue)} fullWidth />    
        </Box>
        <Box display="flex" margin={2}>  
            <TextField id={idValue} label="Release Date" value={releaseDateValue} onChange={(event) => handleChange(event, setReleaseDateValue)} /> 
        </Box>
        <Box display="flex" margin={2}>  
            <TextField id={idValue} label="Duration" value={durationValue} onChange={(event) => handleChange(event, setDurationValue)} fullWidth /> 
        </Box>
        <Box display="flex" margin={2}>  
            <TextField id={idValue} label="Director" value={directorValue} onChange={(event) => handleChange(event, setDirectorValue)} fullWidth /> 
        </Box>
        <Box display="flex" margin={2}>  
            <TextField id={idValue} label="Writers" value={writersValue} onChange={(event) => handleChange(event, setWritersValue)} fullWidth /> 
        </Box>
        <Box display="flex" margin={2}>  
            <TextField id={idValue} label="Stars" value={starsValue} onChange={(event) => handleChange(event, setStarsValue)} fullWidth /> 
        </Box>
        <Box display="flex" margin={2}>  
            <TextField id={idValue} label="Genre" value={genreValue} onChange={(event) => handleChange(event, setGenreValue)} fullWidth /> 
        </Box>
        <Box display="flex" margin={2}>  
            <TextField id={idValue} label="Image" value={imageValue} onChange={(event) => handleChange(event, setImageValue)} fullWidth /> 
        </Box>
        <Box display="flex" margin={2}>  
            <TextField id={idValue} label="Description" value={descriptionValue} onChange={(event) => handleChange(event, setDescriptionValue)} fullWidth /> 
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