function createGrid(numberOfSquares, dimension, backgroundType) {

    const cubeContainer = document.querySelector(".row");
    const squareDimension = dimension / numberOfSquares;

    for(let i = 0; i < numberOfSquares; i++){
        //create column div
        const columnDiv = document.createElement("div");
        columnDiv.classList.add("column")

        for(let j = 0; j < numberOfSquares; j++){
            const cubeDiv = document.createElement("div");
            cubeDiv.classList.add("cube-part");

            switch(backgroundType){                    
                case "opaque": cubeDiv.addEventListener("mouseover", opaqueBackground); 
                                break;
                case "random": cubeDiv.addEventListener("mouseover", randomBackground); 
                                break;  
                default: cubeDiv.addEventListener("mouseover", blackBackground);
            }

            cubeDiv.style.height = `${squareDimension}px`;
            cubeDiv.style.width = `${squareDimension}px`;
            cubeDiv.style.opacity = "0.0";

            columnDiv.appendChild(cubeDiv)
        }

        cubeContainer.appendChild(columnDiv);
    }
}

function blackBackground(event) {
    event.target.style.backgroundColor = "black";
    event.target.style.opacity = "1";
}

function opaqueBackground(event) {
    const opacity = event.target.style.opacity;
    const newOpacity = +opacity + 0.1;
    event.target.style.backgroundColor = "black";
    event.target.style.opacity = newOpacity;

}

function randomBackground(event) {
    let red = getRandomNumber();
    let green = getRandomNumber();
    let blue = getRandomNumber();
    event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    event.target.style.opacity = "1";
}

function getRandomNumber() {
    return Math.floor(Math.random() * 255);
}

createGrid(20, 900, "black");