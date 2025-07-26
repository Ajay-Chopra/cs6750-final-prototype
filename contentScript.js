(() => {
    chrome.runtime.onMessage.addListener((obj, sender, response) => {

        addStyleTag();
        highlightArticleText();
        createCommunityNote();
        addScriptTag();
        addScriptTag2();
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

    const addScriptTag2 = () => {
        popupDiv = document.getElementById("myPopupDiv2");
        popupDiv.addEventListener("click", (e) => {
            var popup = document.getElementById("myPopup2");
            popup.classList.toggle("show");
        })

    }

    const highlightArticleText = () => {

        correction = "This information is misleading. Reports indicated the Trump administration knowingly sent Mr. Garcia to El Salvador (<a href='https://www.nytimes.com/2025/07/23/us/politics/abrego-garcia-judge-orders.html'>Source</a>)."
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
    
    const createCommunityNote = () => {
        correction = "Community Note: The Trump administration has not provided any evidence that Mr. Garcia was a member of the gang. (<a href='https://www.cnn.com/2025/07/02/politics/kilmar-abrego-garcia-civil-lawsuit-el-salvador-prison'>Source</a>)."
        const paragraph = document.getElementsByTagName("p")[2];
        text = paragraph.innerHTML;
        newElement = `
            <div style="background-color: aquamarine;" class="popup" id="myPopupDiv2">MS-13
                <span class="popuptext" id="myPopup2">${correction}</span>
            </div>
        `

        text = text.replace(/MS-13/gi, newElement);
        paragraph.innerHTML = text;

    }

})();