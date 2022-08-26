let movies = [ 
    {
        "id": 1,
        "title": "Batman Begin",
        "release-date": "2005",
        "duration": "2h 20m",
        "director": "Christopher Nolan",
        "writers":"Bob Kane, David S. Goyer, Christopher Nolan",
        "stars": "Christian Bale, Michael Caine, Ken Watanabe",
        "genre": "action, crime, drama", 
        "image": "\\img\\movie-img\\batman-begin-poster.jpg",
        "description": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
        "story-line": "When his parents are killed, billionaire playboy Bruce Wayne relocates to Asia, where he is mentored by Henri Ducard and Ra's Al Ghul in how to fight evil. When learning about the plan to wipe out evil in Gotham City by Ducard, Bruce prevents this plan from getting any further and heads back to his home. Back in his original surroundings, Bruce adopts the image of a bat to strike fear into the criminals and the corrupt as the icon known as 'Batman'. But it doesn't stay quiet for long."    
    },
    {
        "id": 2,
        "title": "The Dark Knight",
        "release-date": "2008",
        "duration": "2h 32m",
        "director": "Christopher Nolan",
        "writers": "Jonathan Nolan, Christopher Nolan, David S. Goyer",
        "stars": "Christian Bale, Heath Ledger, Aaron Eckhart",
        "genre": "action, crime, drama",
        "image": "\\img\\movie-img\\dark-knight.jpg",
        "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    },
    {   
        "id": 3,
        "title": "The Dark Knight Rises",
        "release-date": "2012",
        "duration": "2h 44m",
        "director": "Christopher Nolan",
        "writers": "Jonathan Nolan, Christopher Nolan, David S. Goyer",
        "stars": "Christian Bale, Tom Hardy, Anne Hathaway",
        "genre": "action, crime, drama",
        "image": "\\img\\movie-img\\dark-knight-rises.jpg",
        "description": "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane."
    },
    {
        "id": 4,
        "title": "Batman v Superman: Dawn of Justice",
        "release-date": "2016",
        "duration": "2h 32m",
        "director": "Zack Snyder",
        "writers": "Chris Terrio, David S. Goyer, Bob Kane",
        "stars": "Ben Affleck, Henry Cavill, Amy Adams",
        "genre": "action, adventure, sci-fi",
        "image": "\\img\\movie-img\\batman-vs-superman.jpg",
        "description": "Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs."
    },
    {
        "id": 5,
        "title": "Zack Snyder's Justice League",
        "release-date": "2021",
        "duration": "4h 2m",
        "director": "Zack Snyder",
        "writers": "Jerry Siegel, Joe Shuster, Zack Snyder",
        "stars": "Henry Cavill, Ben Affleck, Gal Gadot",
        "genre": "action, adventure, fantasy",
        "image": "\\img\\movie-img\\zack-snyder-justice-league.jpg",
        "description": "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions."
    }
]

const moviesDataReducer = (state = movies, action) => {
    switch(action.type) {
        case "ADD_NEW_MOVIE" :
            return [...state, action.payload]
        case "EDIT_MOVIE" :
            return state.map(movie => movie.id === action.targetedId 
                ?   ({
                        ...movie,
                        title: action.editedMovieData.title, 
                        "release-date": action.editedMovieData["release-date"],
                        duration: action.editedMovieData.duration,
                        director: action.editedMovieData.director,
                        writers: action.editedMovieData.writers,
                        stars: action.editedMovieData.stars,
                        genre: action.editedMovieData.genre,
                        image: action.editedMovieData.image,
                        description: action.editedMovieData.description
                    })
                :   movie
            
            
            )
        default :
            return state
    }
}

export default moviesDataReducer;