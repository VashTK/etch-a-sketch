//Testing an example from stack overflow idea, previous idea was failing

//Declearing these values that will connect with their respective HTML id
const container = document.getElementById("container");
const clearBtn = document.getElementById("clearBtn")


//Adds the functon to clear and set up a new grid
clearBtn.addEventListener("click", function startEtch() {
    container.innerHTML = "";
    let rows = prompt("Please enter the amount of rows:");
    let columns = prompt("Please enter the number or columns:");
    makeRows(rows, columns);
    
});

//Creates the css grid
function makeRows(rows, cols) {

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");

        /*Mouseover event that will 'listen' or watch for an event where the
            mouse is over one of the grids. Then it will run the function and
            change the background color to black.*/
        cell.addEventListener("mouseover", function() {
            cell.setAttribute("style", "background-color:black;");
        });
        container.appendChild(cell).className = "grid-item";
    }
};

function change() {
    let clearBtn = document.getElementById("clearBtn");
    if (clearBtn.value == "Create a new grid") {
        clearBtn.value = "Clear";
    }
}