/*Ethan Zhong,Web Dev,Period 7/8 Even, Level 2 Match Game*/

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}
var score = 0;
var imageArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
var selectedImages = [];
var revealedImages = [];
function initialize() {
    scoreElement = document.getElementById("score");
    imageElement1 = document.getElementById("image1");
    imageElement2 = document.getElementById("image2");
    imageElement3 = document.getElementById("image3");
    imageElement4 = document.getElementById("image4");
    imageElement5 = document.getElementById("image5");
    imageElement6 = document.getElementById("image6");
    imageElement7 = document.getElementById("image7");
    imageElement8 = document.getElementById("image8");
    imageElement9 = document.getElementById("image9");
    imageElement10 = document.getElementById("image10");
    imageElement11 = document.getElementById("image11");
    imageElement12 = document.getElementById("image12");
    imageElement13 = document.getElementById("image13");
    imageElement14 = document.getElementById("image14");
    imageElement15 = document.getElementById("image15");
    imageElement16 = document.getElementById("image16");
    imageElements = [imageElement1, imageElement2, imageElement3, imageElement4, imageElement5, imageElement6, imageElement7, imageElement8, imageElement9, imageElement10, imageElement11, imageElement12, imageElement13, imageElement14, imageElement15, imageElement16];
    
    shuffle(imageArray);
}
function resetScore() {
    score = 0;

    revealedImages.length = 0;
    for (let i = 0; i < 16; i++) {
        let value2 = "selectCard(" + i + ");";
        if (!revealedImages.includes(i)) {
            imageElements[i].setAttribute("onclick", value2);
        }
    }

    for (let i = 0; i < 16; i++) {
        imageElements[i].src="Images/Image9.png";
    }
    if (selectedImages.length == 1) {
        let value = "selectCard(" + selectedImages[0] + ");";
        imageElements[selectedImages[0]].setAttribute("onclick", value);
        selectedImages.length = 0;
    }
    shuffle(imageArray);
    display();
} 

function display() {
    scoreElement.innerHTML = "Score: " + score;
}
function selectCard(index) {
    if (selectedImages.length == 1) {
        if (imageArray[index] == imageArray[selectedImages[0]]) {
            imageElements[selectedImages[0]].removeAttribute("onclick");
            imageElements[index].removeAttribute("onclick");
            let imageSource = "Images/Image" + imageArray[index] + ".png";
            imageElements[index].src=imageSource;

            revealedImages.push(selectedImages[0]);
            revealedImages.push(index);

            selectedImages.pop();
        } else {
            let imageSource = "Images/Image" + imageArray[index] + ".png";
            imageElements[index].src=imageSource;

            for (let i = 0; i < 16; i++) {
                imageElements[i].removeAttribute("onclick");
            }
            
            setTimeout(() => {
                console.log(selectedImages);
                imageElements[selectedImages[0]].src="Images/picture9.PNG";
                imageElements[index].src="Images/Image9.png";

                let value = "selectCard(" + selectedImages[0] + ");";
                imageElements[selectedImages[0]].setAttribute("onclick", value);

                value = "selectCard(" + index + ");";
                imageElements[index].setAttribute("onclick", value);

                for (let i = 0; i < 16; i++) {
                    let value2 = "selectCard(" + i + ");";
                    if (!revealedImages.includes(i)) {
                        imageElements[i].setAttribute("onclick", value2);
                    }
                }

                selectedImages.pop();
            }, 1000 );
        }
        score++;
    } else {
        selectedImages.push(index);
        let imageSource = "Images/Image" + imageArray[index] + ".png";
        imageElements[index].src=imageSource;
        imageElements[index].removeAttribute("onclick");
        score++;
    }
    display();
}
