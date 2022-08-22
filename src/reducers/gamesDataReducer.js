import {dataGames} from '../data/testOnly'
let gamesData = dataGames()

const gamesDataReducer = (state = gamesData, action) => {
    switch(action.type) {
        case 'ADD_NEW_GAME':
            return [...state, {id: 999, title: "baru"}]
        default :
            return state
    }
}


export default gamesDataReducer;