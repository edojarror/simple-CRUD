import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNewMovie } from '../actions/actionCreator';
import { Box, TextField, Button } from '@mui/material';
import PageTitle from '../components/PageTitle';

const mapStateToProps = state => ({moviesData: state.moviesData})
const matchDispatchToProps = dispatch => bindActionCreators({addMovieDispatcher : addNewMovie}, dispatch)
const AddMoviePage = ({ moviesData, addMovieDispatcher }) => {
    let history = useNavigate();
    const [titleValue, setTitleValue] = useState("");
    const [releaseDateValue, setReleaseDateValue] = useState('');
    const [durationValue, setDurationValue] = useState('');
    const [directorValue, setDirectorValue] = useState("");
    const [writersValue, setWritersValue] = useState("");
    const [starsValue, setStarsValue] = useState("");
    const [genreValue, setGenreValue] = useState("");
    const [imageValue, setImageValue] = useState("");
    const [descriptionValue, setDescriptionValue] = useState('');

    const getLastMovieId = (currentMovieList) => {
        let lastIndexOnGameList = currentMovieList.length - 1;
        let searchlastGameId = Number(currentMovieList.filter((movie, index) => index === lastIndexOnGameList).map(movie => movie.id));
        return searchlastGameId + 1
    }
  
    const handleChange = (event, targetedState) => {
        targetedState(event.target.value);
    }

    const handleSubmit = () => {
        if(titleValue === "" || releaseDateValue === "" || durationValue === "" || directorValue === "" || writersValue === "" || starsValue === "" || genreValue === "" || imageValue === "" || descriptionValue === "") {
            alert("fill all forms first before proceed !!!");
            return
        }

        getLastMovieId(moviesData)

        let nextMovieData = 
            {
                "id": getLastMovieId(moviesData),
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
        addMovieDispatcher(nextMovieData);
        history('/movies-table');
  }

  return (
    <Box>
        <PageTitle titleText="Add Movie" />
        <Box display="flex" margin={2}>
            <TextField id="inputTitle" label="Title" value={titleValue} onChange={(event) => handleChange(event, setTitleValue)} fullWidth />    
        </Box>
        <Box display="flex" margin={2}>  
            <TextField id="inputReleaseDate" label="Release Date" value={releaseDateValue} onChange={(event) => handleChange(event, setReleaseDateValue)} /> 
        </Box>
        <Box display="flex" margin={2}>  
            <TextField id="inputDuration" label="Duration" value={durationValue} onChange={(event) => handleChange(event, setDurationValue)} fullWidth /> 
        </Box>
        <Box display="flex" margin={2}>  
            <TextField id="inputDirector" label="Director" value={directorValue} onChange={(event) => handleChange(event, setDirectorValue)} fullWidth /> 
        </Box>
        <Box display="flex" margin={2}>  
            <TextField id="inputWriters" label="Writers" value={writersValue} onChange={(event) => handleChange(event, setWritersValue)} fullWidth /> 
        </Box>
        <Box display="flex" margin={2}>  
            <TextField id="inputStars" label="Stars" value={starsValue} onChange={(event) => handleChange(event, setStarsValue)} fullWidth /> 
        </Box>
        <Box display="flex" margin={2}>  
            <TextField id="inputGenre" label="Genre" value={genreValue} onChange={(event) => handleChange(event, setGenreValue)} fullWidth /> 
        </Box>
        <Box display="flex" margin={2}>  
            <TextField id="inputImage" label="Image" value={imageValue} onChange={(event) => handleChange(event, setImageValue)} fullWidth /> 
        </Box>
        <Box display="flex" margin={2}>  
            <TextField id="inputDescription" label="Description" value={descriptionValue} onChange={(event) => handleChange(event, setDescriptionValue)} fullWidth /> 
        </Box>

        <Box display="flex" margin={6} justifyContent="center">  
            <Button 
                id="addMovieButton"
                variant="contained" 
                size='large'
                onClick={() => handleSubmit()}>
                    Submit Changes
            </Button> 
        </Box>
      
    </Box>
  )
}


export default connect(mapStateToProps, matchDispatchToProps) (AddMoviePage)