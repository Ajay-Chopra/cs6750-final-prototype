document.getElementById("myButton").addEventListener("click", sendCommunityNote);
document.getElementById("analyze-video-button").addEventListener("click", transitionToVideoAnalyzer);

function sendCommunityNote(){
    var communityNoteTextArea1 = document.getElementById("community-note-textarea-1")
    communityNoteTextArea1.remove()

    var communityNoteTextArea2 = document.getElementById("community-note-textarea-2")
    communityNoteTextArea2.remove()

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

    let newTextArea1 = document.createElement("textarea")
    newTextArea1.placeholder = "Enter article text..."
    newTextArea1.id = "community-note-textarea-1"
    newTextArea1.classList.add("w3-input")
    communityNoteContainer.insertBefore(newTextArea1, communityNoteContainer.childNodes[2])

    let successMessage = document.createElement("p")
    successMessage.id = "community-note-success-message"
    successMessage.innerHTML = "Community note send for review!"
    successMessage.style = "color: #008a00"
    communityNoteContainer.insertBefore(successMessage, communityNoteContainer.childNodes[2])

    let newTextArea2 = document.createElement("textarea")
    newTextArea2.placeholder = "Enter community note..."
    newTextArea2.id = "community-note-textarea-2"
    newTextArea2.classList.add("w3-input")
    communityNoteContainer.insertBefore(newTextArea2, communityNoteContainer.childNodes[10])

    console.log(communityNoteContainer.childNodes)


    setTimeout(() => {
        spinContainer.remove();
        popupBody.appendChild(communityNoteContainer);
        
        setTimeout(() => {
            successMessage.remove();
        }, 2000);

    }, 2000);
}

function transitionToVideoAnalyzer(){

    var html = document.getElementsByTagName("html")[0];

    var body = document.getElementsByTagName("body")[0];
    body.remove();

    var videoAnalyzerBody = document.createElement("body")
    videoAnalyzerBody.classList.add("w3-light-grey")

    fetch("videoAnalyzer.html")
        .then(response => response.text())
        .then(htmlContent => {
            videoAnalyzerBody.innerHTML = htmlContent
            html.appendChild(videoAnalyzerBody);
            var analyzeButton = document.getElementById("analyze-button")
            console.log(analyzeButton)
            analyzeButton.addEventListener("click", () => {
                
                var analysisResults = document.createElement("div")
                analysisResults.classList.add("w3-container")
                fetch("videoAnalysisResults.html")
                    .then(response => response.text())
                    .then(htmlContent => {
                        analysisResults.innerHTML = htmlContent
                        videoAnalyzerBody.appendChild(analysisResults);
                    })
                    .catch(error => console.error('Error loading HTML:', error))
            })
        })
        .catch(error => console.error('Error loading HTML:', error));

    // var videoAnalyzerBody = document.createElement("body")
    // videoAnalyzerBody.classList.add("w3-light-grey")

    // var scriptTag = document.createElement("script")
    // scriptTag.type = "module"
    // scriptTag.src = "pageSummary.js"
    // videoAnalyzerBody.appendChild(scriptTag)

    // var videoAnalyzerContainer = document.createElement("div")
    // videoAnalyzerContainer.classList.add("w3-container")

    // var header = document.createElement("h4")
    // header.innerHTML = "Video Analysis"
    // videoAnalyzerContainer.appendChild(header)

    // var inputTag = document.createElement("input")
    // inputTag.type = "text"
    // inputTag.placeholder = "Pase link..."
    // inputTag.classList.add("w3-input")
    // videoAnalyzerContainer.appendChild(inputTag)

    // var breakTag = document.createElement("br")
    // videoAnalyzerContainer.appendChild(breakTag)

    // var analyzeButton = document.createElement("button")
    // analyzeButton.style = "margin-left: 220px"
    // analyzeButton.classList.add("w3-button")
    // analyzeButton.classList.add("w3-green")
    // analyzeButton.innerHTML = "Analyze &nbsp;"

    // analyzeButton.addEventListener("click", () => {
    //     videoAnalyzerContainer.remove();
    //     let spinContainer = document.createElement("div")
    //     spinContainer.className = "w3-container"
    //     let spinParagraph = document.createElement("p")
    //     spinParagraph.style = "margin-left: 130px"
    //     let spinner = document.createElement("i")
    //     spinner.classList.add("fa")
    //     spinner.classList.add("fa-refresh")
    //     spinner.classList.add("w3-spin")
    //     spinner.style = "font-size: 64px"
    //     spinParagraph.appendChild(spinner)
    //     spinContainer.appendChild(spinParagraph)
    //     videoAnalyzerBody.appendChild(spinContainer)

    //     setTimeout(() => {
    //         spinContainer.remove()
    //         videoAnalyzerBody.appendChild(videoAnalyzerContainer);
    //     }, 2000)
    // })

    // analyzeButton.addEventListener("click", () => {
    //     videoAnalyzerBody.remove();
    //     html.appendChild(body)
    // })


    // var arrow = document.createElement("i")
    // arrow.classList.add("fa")
    // arrow.classList.add("fa-arrow-right")
    // analyzeButton.appendChild(arrow)
    // videoAnalyzerContainer.appendChild(analyzeButton)

    // videoAnalyzerBody.appendChild(videoAnalyzerContainer)

    // html.appendChild(videoAnalyzerBody);
}

function analyzeVideo() {
    console.log("Hello from analyze video button");

    analysisResults = document.createElement("div")
    analysisResults.classList.add("w3-container")




}