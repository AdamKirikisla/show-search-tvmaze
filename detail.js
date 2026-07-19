const params = new URLSearchParams(window.location.search);
const showId = params.get('id');

async function loadShowDetails() {
    try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${showId}`);
        const show = response.data;

        document.getElementById('showName').textContent = show.name;
        document.getElementById('showImage').src = show.image ? show.image.medium : '';
        document.getElementById('showSummary').innerHTML = show.summary;
        document.getElementById('showStatus').textContent = `Status: ${show.status}`;
        document.getElementById('showRating').textContent = `Rating: ${show.rating.average} / 10`;
    }
    catch (error) {
        console.log("Something went wrong:", error);
    }
}

loadShowDetails();

//Layman Notes
// The URL after clicking looks like: detail.html?id=169
// window.location.search grabs ?id=169 from the address bar.
// URLSearchParams lets you read values out of that.
// params.get('id') pulls out just the 169 part.