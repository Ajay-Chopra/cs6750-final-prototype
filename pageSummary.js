document.getElementById("myButton").addEventListener("click", myFunction);

function myFunction(){

    var communityNoteContainer = document.getElementById("community-note-container")
    communityNoteContainer.remove()

    let spinContainer = document.createElement("div")
    spinContainer.className = "w3-container"
    let spinParagraph = document.createElement("p")
    spinParagraph.style = "margin-left: 130px"
    let spinner = document.createElement("i")
    spinner.classList.add("fa")
    spinner.classList.add("fa-refresh")
    spinner.classList.add("w3-spin")
    spinner.style = "font-size: 64px"
    spinParagraph.appendChild(spinner)
    spinContainer.appendChild(spinParagraph)

    let popupBody = document.getElementById("body")
    popupBody.appendChild(spinContainer);

    setTimeout(() => {
        spinContainer.remove();
        popupBody.appendChild(communityNoteContainer);
    }, 2000);
}