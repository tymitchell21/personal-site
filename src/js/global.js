function displaySearch () {
    document.getElementById('header').className += 'search-visible'
    document.getElementById('header-search-wrap').style.display = 'block'
}

document.getElementById("search-button").addEventListener('click',displaySearch)