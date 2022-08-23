import {dataGames} from '../data/testOnly'
let gamesData = dataGames()

const gamesDataReducer = (state = gamesData, action) => {
    switch(action.type) {
        case 'ADD_NEW_GAME':
            return [...state, action.payload]
        default :
            return state
    }
}

export default gamesDataReducer;