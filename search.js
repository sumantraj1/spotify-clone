// searchbar 
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const searchInput = document.getElementById('search-input');
    const clearIcon = document.getElementById('clear-icon');
    const searchIcon = document.getElementById('search-icon');
    // for Mobile responsive
    const searchBar2 = document.getElementById('search-bar2');
    const searchInput2 = document.getElementById('search-input2');
    const clearIcon2 = document.getElementById('clear-icon2');

    // Show/hide clear icon based on input value
    searchInput.addEventListener('input', () => {
        if (searchInput.value.length > 0) {
            clearIcon.style.display = 'flex';
        } else {
            clearIcon.style.display = 'none';
        }
    });

    // for Mobile responsive
    searchInput2.addEventListener('input', () => {
        if (searchInput2.value.length > 0) {
            clearIcon2.style.display = 'flex';
        } else {
            clearIcon2.style.display = 'none';
        }
    });

    // Clear input when clear icon is clicked
    clearIcon.addEventListener('click', () => {
        searchInput.value = '';
        clearIcon.style.display = 'none'
        searchInput.focus();
    });

    // for Mobile responsive
    clearIcon2.addEventListener('click', () => {
        searchInput2.value = '';
        clearIcon2.style.display = 'none'
        searchInput2.focus();
    });

    // Add active class to search bar when input is focused
    searchInput.addEventListener('focus', () => {
        searchBar.classList.add('active');
    });

    // Remove active class from search bar when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!searchBar.contains(event.target) && event.target !== searchIcon) {
            searchBar.classList.remove('active');
        }
    });

    // Toggle the active class on the search bar when search icon is clicked
    searchIcon.addEventListener('click', () => {
        const toggleTimes = 4; // Number of times to toggle
        let currentTime = 0;

        searchInput.focus();

        const interval = setInterval(() => {
            searchBar.classList.toggle('active');
            currentTime++;
            if (currentTime >= toggleTimes) {
                clearInterval(interval);
            }
        }, 100); // Adjust the duration as needed
    });
});




// Define the content of each page for search purposes
const pages = {
    "page.html": [
        "Popular Artist",
        "Singer"
    ],
    "page1.html": [
        "Popular Album",
    ],
    "page2.html": [
        "Popular Radio",
    ],
    "page3.html": [
        "Featured Charts",
    ],
    "page4.html": [
        "Spotify Playlists"
    ],
    "page5.html": [
        "Trending Episodes",
        "Most Watched"
    ],
    "podcastpage.html": [
        "podcasts"
    ],
    "arijitsingh.html": [
        "arijit singh",
        "romantic songs",
        "Apna Bana Le",
        "Satranga",
        "Sajni",
        "O Maahi",
        "Heeriye"
    ],
    "pritam.html": [
        "pritam",
        "Tere Pyaar Mein",
        "Lutt Putt Gaya",
        "Kesariya",
        "O Maahi",
        "Khairiyat"
    ]
};

// Function to perform search and navigate to the correct page
function performSearch() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.toLowerCase();

    for (const [page, content] of Object.entries(pages)) {
        for (const entry of content) {
            if (entry.toLowerCase().includes(searchTerm)) {
                window.location.href = page; // Navigate to the matched page
                return;
            }
        }
    }

    alert('No results found.');
}

// for mobile responsive
function performSearch() {
    const searchInput2 = document.getElementById('search-input2');
    const searchTerm2 = searchInput2.value.toLowerCase();

    for (const [page, content] of Object.entries(pages)) {
        for (const entry of content) {
            if (entry.toLowerCase().includes(searchTerm2)) {
                window.location.href = page; // Navigate to the matched page
                return;
            }
        }
    }

    alert('No results found.');
}

// Add  to search bar for Enter key
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
}


function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}