// console.log("Hello World")
// console.dir(document)

const message =document.querySelector("#message")
function addMovie(event){
    event.preventDefault()
    let inputField =document.querySelector("input")
    const movie = document.createElement("li")
    const movieTitle = document.createElement("span")
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener("click", crossOffMovie)
    const list =document.querySelector("ul")
    list.appendChild(movie)

//   document.querySelector("ul").appendChild(movie)
    
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn)
    inputField.value = " "
}

function deleteMovie(event){
    message.textContent = `${event.target.parentNode.children[0].textContent} deleted` 
    revealMessage()
    event.target.parentNode.remove()
}

function crossOffMovie(event){
    event.target.classList.toggle("checked")
    if (event.target.classList.contains("checked")===true ){
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} added Back!`
    }
    revealMessage()
}

function revealMessage(){
    setTimeout(() => {
    message.classList.add("hide")
  }, 1000)
}
document.querySelector("form").addEventListener("submit", addMovie)