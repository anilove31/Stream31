document.addEventListener("DOMContentLoaded", function () {
    const videoContainer = document.getElementById("video-container");
    const searchInput = document.getElementById("search");

    // Function to fetch videos from JSON file
    async function fetchVideos() {
    try {
        const response = await fetch('videos.json');
        const videos = await response.json();
        return videos;
    } catch (error) {
        console.error('Error fetching videos:', error);
        return [];
    }
}

    // Function to render videos
    function renderVideos(videoList) {
        videoContainer.innerHTML = "";
        videoList.forEach(video => {
            const videoCard = createVideoCard(video);
            videoContainer.appendChild(videoCard);
        });
    }

    // Function to create a video card element
    function createVideoCard(video) {
        const videoCard = document.createElement("div");
        videoCard.classList.add("video-card");
        videoCard.setAttribute("data-name", video.name);
        videoCard.setAttribute("data-desc", video.desc);

        videoCard.innerHTML = `
            <div>
                <iframe width="640" height="360" src="${video.embed}" frameborder="0" scrolling="0" allowfullscreen></iframe>
                <h2>${video.name}</h2>
                <p>${video.desc}</p>
            </div>
        `;

        return videoCard;
    }

    // Initial render with videos from JSON file
    fetchVideos().then(videos => renderVideos(videos));

    // Search functionality
    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        fetchVideos().then(videos => {
            const filteredVideos = videos.filter(video => {
                const videoName = video.name.toLowerCase();
                const videoDesc = video.desc.toLowerCase();
                return videoName.includes(searchTerm) || videoDesc.includes(searchTerm);
            });
            renderVideos(filteredVideos);
        });
    });
});

