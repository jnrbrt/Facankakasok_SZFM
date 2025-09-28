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
    
}