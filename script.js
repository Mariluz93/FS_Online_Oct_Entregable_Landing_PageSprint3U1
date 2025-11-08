const ham = document.getElementById("ham")
const closed = document.getElementById("close-menu")
const categories = document.getElementById("categories")

ham.addEventListener("click", () => {
  categories.classList.add("visible-menu")
})

closed.addEventListener("click", () => {
  categories.classList.remove("visible-menu")
})
document.addEventListener("click", (e) => {
    if (categories.classList.contains("visible-menu") && !categories.contains(e.target) && !ham.contains(e.target)) {
        categories.classList.remove("visible-menu")
    }
})