// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorArray = moviesArray.map((item)=> item.director)
    return directorArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let spielbergMovies = moviesArray.filter((item)=> item.director === "Steven Spielberg")
    let dramaSpielbergMovies = spielbergMovies.filter((item)=> item.genre.includes("Drama"))
    console.log(dramaSpielbergMovies)
    if(spielbergMovies.length === 0){
        return spielbergMovies.length
    }else if(dramaSpielbergMovies){
        return dramaSpielbergMovies.length
    }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0
    }
    let scoresNumbersArr = moviesArray.filter(item=>typeof item.score==="number")
        .map((item)=> item.score)
        .reduce((acc, cur) => acc + cur, 0)
    let average = scoresNumbersArr / moviesArray.length
    let roundedAverage = Math.round(average*100)/100


    return roundedAverage
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter((item)=> item.genre.includes("Drama"))
    if(dramaMovies.length === 0){return 0}
    let dramaScoresArr = dramaMovies.filter(item=>typeof item.score==="number")
        .map((item)=> item.score)
        .reduce((acc, cur) => acc + cur, 0)    
    
    let average = dramaScoresArr / dramaMovies.length
    let roundedAverage = Math.round(average*100)/100


    return roundedAverage
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {


    let sortedYears = moviesArray.sort((movie1, movie2) => 
        movie1.year - movie2.year ||
        movie1.title.localeCompare(movie2.title),
    
    )
    function copyOfArr(moviesArray) {
        return moviesArray.slice()
    }
    let copiedArray = copyOfArr(sortedYears)

    return copiedArray

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let sortedAlpha = moviesArray.sort((movie1, movie2) => 
        movie1.title.localeCompare(movie2.title)
    )
    let titles = sortedAlpha.map(item => item.title)

    if (titles.length >20){
        let titlesCompressed = [];
        for(let i = 0; i < 20; i++){
            titlesCompressed.push(titles[i])
        }
        return titlesCompressed
    }
    return titles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
const newArr = JSON.parse(JSON.stringify(moviesArray))

    let minutesArray = 
        newArr.map(function(movie){
        let minutes = 0;
        let hoursInMin = 0;
        let duration = movie.duration.split(' ')
            .map(item => {
                if(item.match(/h/)){
                    const hour = item.split('h');
                    hoursInMin = parseInt(hour[0]) * 60;
                    return hoursInMin
                } else if(item.match(/min/)) {
                    const min = item.split('min');
                    minutes += parseInt(min[0]);
                    return minutes
                }
            })
            .reduce((ac, cur) => ac + cur)
        movie.duration = duration
        return movie
    }
)



return minutesArray
    // }           
    // )
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
