const mainSection = document.querySelector(".mainSection");
const results = document.querySelector('.results');

const form = document.querySelector("#searchForm")
const searchInput = document.querySelector('#searchInput')



// Clear images function
const clearSearch = () => results.innerHTML = ''


form.addEventListener('submit', async function (e) {
    e.preventDefault();


    // Axios Logic
    try {

        clearSearch();
        const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchInput.value}`);
        movieImage(response.data);
    }

    catch (error) {
        console.log("Something went wrong:", error);
    }

})

// Image Function, the response.data gives an array of shows
const movieImage = (shows) => {

    for (let i of shows) {

        if (!i.show.image) { continue; }  // if no image, skip this show entirely

        const img = document.createElement('img');
        img.src = i.show.image.medium;
        results.append(img);

    }
}