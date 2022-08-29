export const addNewGame = newGameObject => ({type: "ADD_NEW_GAME", payload: newGameObject})

export const addNewMovie = newMovieObject => ({type: "ADD_NEW_MOVIE", payload: newMovieObject})

export const editMovie = (targetedMovieId, editedMovieData) => ({type: "EDIT_MOVIE", targetedId : targetedMovieId, editedMovieData})

export const editGame = (targetedGameId, editedGameData) =>  ({type: "EDIT_GAME", targetedId: targetedGameId, editedGameData})

export const deleteGame = targetedId => ({type: "DELETE_GAME", targetedId})

export const deleteMovie = targetedId => ({type: 'DELETE_MOVIE', targetedId})