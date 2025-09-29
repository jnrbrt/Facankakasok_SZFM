import { hirek } from "./articles.js";
const path = window.location.pathname;

if (path.endsWith("index.html") || path === "/" || path === "/index.html") {
    const articleList = document.getElementById("article-list")
    const categoryItems = document.querySelectorAll("#nav-categories li")
    const searchInput = document.getElementById("search-box")
    const searchButton = document.getElementById("search-button")

    const articlesPerPage = 10
    let currentPage = 1

    let filteredArticles = [...hirek]

    const paginationDiv = document.getElementById("pagination") // már HTML-ben ott van

    //hirek megjelenitese
    function showArticles(filter = null) {
        articleList.innerHTML = ""

        const articlesToShow = filteredArticles
            .filter(article => filter === null || article.kategoria === filter)

        const startIndex = (currentPage - 1) * articlesPerPage // ÚJ
        const endIndex = startIndex + articlesPerPage // ÚJ
        const paginatedArticles = articlesToShow.slice(startIndex, endIndex) // ÚJ

        paginatedArticles.forEach(article => {
            const preview = document.createElement("div")
            preview.classList.add("article-card")
            preview.innerHTML = `
                ${filter === null ? `<h3 id="preview-category">${article.kategoria}</h3>` : ""}
                <h2 id="preview-title">
                    <a href="article.html?id=${article.id}">${article.cim}</a>
                </h2>
                <p id="preview-text">${article.kivonat}</p>
            `
            articleList.appendChild(preview)
        })

        if (articleList.innerHTML === "") {
            articleList.innerHTML = `<h2 id="empty-category">Nincs megjeleníthető hír ebben a kategóriában.</h2>`
        }

        renderPagination(articlesToShow.length) // ÚJ
    }
    
    //lapozás
    function renderPagination(totalArticles) {
        paginationDiv.innerHTML = ""
        const totalPages = Math.ceil(totalArticles / articlesPerPage)

        function createButton(i) {
            const btn = document.createElement("button")
            btn.textContent = i
            if (i === currentPage) btn.classList.add("active")
            btn.addEventListener("click", () => {
                currentPage = i
                showArticles()
            })
            paginationDiv.appendChild(btn)
        }

        if (currentPage > 2) {
            createButton(1)
            if (currentPage > 3) {
                const dots = document.createElement("span")
                dots.textContent = " ... "
                paginationDiv.appendChild(dots)
            }
        }

        if (currentPage > 1) createButton(currentPage - 1)

        createButton(currentPage)

        if (currentPage < totalPages) createButton(currentPage + 1)

        if (currentPage < totalPages - 1) {
            if (currentPage < totalPages - 2) {
                const dots = document.createElement("span")
                dots.textContent = " ... "
                paginationDiv.appendChild(dots)
            }
            createButton(totalPages)
        }
    }

    
    //kereses
    function searchArticlesByText(input) {
        input = input.toLowerCase()
        filteredArticles = hirek.filter(article =>
            article.cim.toLowerCase().includes(input) ||
            article.kivonat.toLowerCase().includes(input) ||
            article.tartalom.toLowerCase().includes(input)
        )
    }

    function searchArticles() {
        const input = searchInput.value.trim()
        if (input.length > 0 && input.length < 5) {
            alert("A kereséshez legalább 5 karaktert kell megadni!")
            return
        }
        if (input === "") {
            filteredArticles = [...hirek]
        } else {
            searchArticlesByText(input)
        }
        currentPage = 1
        showArticles()
    }

    //kategoria szurese
    categoryItems.forEach(item => {
        item.addEventListener("click", () => {
            const kategoria = item.textContent.trim()
            const isAlreadySelected = item.classList.contains("active")
            const filter = isAlreadySelected ? null : kategoria

            currentPage = 1
            showArticles(filter)
            highlightCategory(isAlreadySelected ? null : item)
        })
    })

    function highlightCategory(selectedItem) {
        categoryItems.forEach(item => item.classList.remove("active"))
        if (selectedItem) {
            selectedItem.classList.add("active")
        }
    }

    searchButton.addEventListener("click", searchArticles)
    searchInput.addEventListener("keyup", e => {
        if (e.key === "Enter") searchArticles()
    })

    showArticles()
}

//hir oldala
if (path.endsWith("article.html")) {
    const articleDiv = document.getElementById("article")

    const params = new URLSearchParams(window.location.search)
    const articleId = parseInt(params.get("id"))
    
    const article = hirek.find(a => a.id === articleId)

    if (article) {
        articleDiv.innerHTML = `
            <h1 id="article-title">${article.cim}</h1>
            <div id="article-meta">
                <span id="article-category">${article.kategoria}</span> |
                <span id="article-date">${article.datum}</span> |
                <span id="article-author">${article.szerzo}</span>
            </div>
            <img id="article-image" src="https://picsum.photos/1000/500" alt="Egy kép">
            <div id="article-text">${article.tartalom}</div>
        `
    }
}

//dark mode
const darkModeSwitch = document.getElementById("dark-mode-switch");
if (localStorage.getItem("dark-mode") === "true") {
    darkModeSwitch.checked = true;
    document.body.classList.add("dark-mode");
}

darkModeSwitch.addEventListener("change", () => {
    const isDark = darkModeSwitch.checked;
    document.body.classList.toggle("dark-mode", isDark);
    localStorage.setItem("dark-mode", isDark);
});