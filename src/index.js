fetch("http://localhost:3000/movies")
.then((res) => res.json())
.then((data) =>  {
    const arrayMovies = data;
    const movieForm = document.querySelector('form')

    movieForm.addEventListener("submit", function(e) {
        e.preventDefault()
        const movieSearch = document.getElementById("searchByID").value
        let searchResult = ""

        arrayMovies.forEach((movie) => {
            if (movie.id == movieSearch) {
                searchResult = movie
            }
        })
        //console.log(searchResult.summary)

        const movieTitle = document.getElementById("title");
        const movieSummary = document.getElementById("summary")
        movieTitle.innerText = searchResult.title
        movieSummary.innerText = searchResult.summary


        
    })
})



