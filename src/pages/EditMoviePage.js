import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { dataMovies } from '../data/testDataMovies'; 
import { TextField, Box, Button } from '@mui/material';
import PageTitle from '../components/PageTitle';

export default function EditMoviePage () {
    let history = useNavigate();
    let moviesListData = dataMovies();

    const [idValue, setIdValue] = useState("");
    const [titleValue, setTitleValue] = useState("");
    const [releaseDateValue, setReleaseDateValue] = useState("");
    const [durationValue, setDurationValue] = useState("");
    const [directorValue, setDirectorValue] = useState("");
    const [writersValue, setWritersValue] = useState("");
    const [starsValue, setStarsValue] = useState("");
    const [genreValue, setGenreValue] = useState("");
    const [imageValue, setImageValue] = useState("");
    const [descriptionValue, setDescriptionValue] = useState("");
    const handleSubmit = (currentMovieId) => {
        let copyOfMoviesList = moviesListData.slice(0, moviesListData.length);
        let currentMovieIndex = copyOfMoviesList.findIndex(movie => movie.id === Number(currentMovieId));
        let editedMovieValue = 
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
            moviesListData.splice(currentMovieIndex, 1, editedMovieValue);
        history('/movies-table');
    }
    const handleChange = (event, targetedState) => {
        targetedState(event.target.value);
    }

    useEffect(() => {
        setIdValue(localStorage.getItem("id"));
        setTitleValue(localStorage.getItem("title"));
        setReleaseDateValue(localStorage.getItem("release-date"));
        setDurationValue(localStorage.getItem("duration"));
        setDirectorValue(localStorage.getItem("director"));
        setWritersValue(localStorage.getItem("writers"));
        setStarsValue(localStorage.getItem("stars"))
        setGenreValue(localStorage.getItem("genre"));
        setImageValue(localStorage.getItem("image"));
        setDescriptionValue(localStorage.getItem("description"));
    },[])
    return (
        <div>
            <PageTitle titleText="Edit Movie" />
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
        </div>
    )
}