document.getElementById("myButton").addEventListener("click", sendCommunityNote);
document.getElementById("analyze-video-button").addEventListener("click", transitionToVideoAnalyzer);
document.getElementById("more-info").addEventListener("click", displayInfoPage);

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
            analyzeButton.addEventListener("click", () => {
                var oldAnalysisResults = document.getElementById("analysis-results")
                if (oldAnalysisResults !== null) {
                    oldAnalysisResults.remove();
                }

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
                videoAnalyzerBody.appendChild(spinContainer)

                setTimeout(() => {
                    spinContainer.remove()
                    var analysisResults = document.createElement("div")
                    analysisResults.classList.add("w3-container")
                    analysisResults.id = "analysis-results"
                    fetch("videoAnalysisResults.html")
                        .then(response => response.text())
                        .then(htmlContent => {
                            analysisResults.innerHTML = htmlContent
                            videoAnalyzerBody.appendChild(analysisResults);
                        })
                        .catch(error => console.error('Error loading HTML:', error))
                    
                    }, 2000)
            })

            var backButton = document.getElementById("back-button")
            backButton.addEventListener("click", () => {
                videoAnalyzerBody.remove()
                html.appendChild(body)
            })
        })
        .catch(error => console.error('Error loading HTML:', error));

    

    analyzeButton.addEventListener("click", () => {
        videoAnalyzerContainer.remove();
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
        videoAnalyzerBody.appendChild(spinContainer)

        setTimeout(() => {
            spinContainer.remove()
            videoAnalyzerBody.appendChild(videoAnalyzerContainer);
        }, 2000)
    })
}

function displayInfoPage() {
    var html = document.getElementsByTagName("html")[0];

    var body = document.getElementsByTagName("body")[0];
    body.remove();

    var infoPageBody = document.createElement("body")
    infoPageBody.classList.add("w3-light-grey")

    fetch("infoPage.html")
        .then(response => response.text())
        .then(htmlContent => {
            infoPageBody.innerHTML = htmlContent
            html.appendChild(infoPageBody)

            var backButton = document.getElementById("back-button")
            backButton.addEventListener("click", () => {
                infoPageBody.remove()
                html.appendChild(body)
            })

        })
        .catch(error => console.error('Error loading HTML:', error))
}