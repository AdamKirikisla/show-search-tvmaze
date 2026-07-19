const results = document.querySelector('.results');

const form = document.querySelector("#searchForm")
const searchInput = document.querySelector('#searchInput')



// Clear images function
const clearSearch = () => results.innerHTML = ''


// Forms Logic
form.addEventListener('submit', async function (e) {
    e.preventDefault();


    // Axios Logic
    try {

        clearSearch();
        const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchInput.value}`);
        movieImage(response.data);
        console.log(response.data);
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

        img.classList.add("imgCard");

        results.append(img);

        img.addEventListener('click', () => {
            window.location.href = `detail.html?id=${i.show.id}`;

        })


    }
}

