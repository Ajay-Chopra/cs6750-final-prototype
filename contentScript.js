(() => {
    chrome.runtime.onMessage.addListener((obj, sender, response) => {

        addStyleTag();
        highlightArticleText();
        addScriptTag();
    });

    const addStyleTag = () => {
        const head = document.getElementsByTagName("head")[0];
        style = document.createElement("style");
        head.appendChild(style)
        var css = `
            .popup {
                position: relative;
                display: inline-block;
                cursor: pointer;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }

            /* The actual popup */
            .popup .popuptext {
                visibility: hidden;
                width: 260px;
                background-color: #555;
                color: #fff;
                text-align: center;
                border-radius: 6px;
                padding: 8px 0;
                position: absolute;
                z-index: 1;
                bottom: 125%;
                left: 50%;
                margin-left: -130px;
            }

            /* Popup arrow */
            .popup .popuptext::after {
                content: "";
                position: absolute;
                top: 100%;
                left: 50%;
                margin-left: -5px;
                border-width: 5px;
                border-style: solid;
                border-color: #555 transparent transparent transparent;
            }

            /* Toggle this class - hide and show the popup */
            .popup .show {
                visibility: visible;
                -webkit-animation: fadeIn 1s;
                animation: fadeIn 1s;
            }

            /* Add animation (fade in the popup) */
                @-webkit-keyframes fadeIn {
                from {opacity: 0;} 
                to {opacity: 1;}
            }

            @keyframes fadeIn {
                from {opacity: 0;}
                to {opacity:1 ;}
            }
        
        `
        style.type = 'text/css'
        if (style.styleSheet){
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css))
        }
    }

    const addScriptTag = () => {
        popupDiv = document.getElementById("myPopupDiv");
        popupDiv.addEventListener("click", (e) => {
            var popup = document.getElementById("myPopup");
            popup.classList.toggle("show");
        })

    }

    const highlightArticleText = () => {

        correction = "This information is misleading. Reports indicated the Trump administration knowingly sent Mr. Garcia to El Salvador."
        const paragraph = document.getElementsByTagName("p")[0];
        text = paragraph.innerHTML;
        newElement = `
            <div style="background-color: yellow;" class="popup" id="myPopupDiv">mistakenly
                <span class="popuptext" id="myPopup">${correction}</span>
            </div>
        `

        text = text.replace(/mistakenly/gi, newElement);
        paragraph.innerHTML = text;

    } 

})();