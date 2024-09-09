
let storyWords = ["___", "___", "___", "___"];



updateView();

function updateView() {
    document.getElementById("app").innerHTML = /*HTML*/
        `
        Once, there was a ${storyWords[0]} ${storyWords[1]} that ${storyWords[2]}
        in the ${storyWords[3]} - and great things happened, the end.


        <div class="wordButtons">
        <button onclick="setFirstAvailablePlace('angry')">angry</button>
        <button onclick="setFirstAvailablePlace('blue')">red</button>
        <button onclick="setFirstAvailablePlace('dog')">dog</button>
        <button onclick="setFirstAvailablePlace('man')">man</button>
        <button onclick="setFirstAvailablePlace('ran')">ran</button>
        <button onclick="setFirstAvailablePlace('jumped')">jumped</button>
        <button onclick="setFirstAvailablePlace('pool')">pool</button>
        <button onclick="setFirstAvailablePlace('wall')">wall</button>
        </div>
        `;}

        function setFirstAvailablePlace(word) {
           
            let firstEmptyIndex = storyWords.indexOf("___");
            
           
            if (firstEmptyIndex !== -1) {
                storyWords[firstEmptyIndex] = word;
                updateView(); 
            } else {
                alert("Ingen ledige plasser igjen i historien!");
            }
        }


