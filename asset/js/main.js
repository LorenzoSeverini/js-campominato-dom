/************************************/
/********** MAIN JS *****************/
/************************************/

// reload the page on click header link 
const myLink = document.getElementById('myLink');

myLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default behavior of following the link
    location.reload(); // Reload the page
});

grid = document.getElementById('myGrid');
Btngenerate = document.getElementById('myGenerate');
Btncancel = document.getElementById('myCancel');

// choose the difficulty level and generate the grid (1 = 7x7, 2 = 9x9, 3 = 10x10)

Btngenerate.addEventListener('click', () => {

    const myValue = document.getElementById('myDifficulty').value;
    
    if (myValue == 1) {
        grid.innerHTML = "";
        for (let i = 1; i <= 100; i++) {
            grid.innerHTML += `<div class="myBox1">${i}</div>`;
        }
    } else if (myValue == 2) {
        grid.innerHTML = "";
        for (let i = 1; i <= 81; i++) {
            grid.innerHTML += `<div class="myBox2">${i}</div>`;
        }
    } else if (myValue == 3) {
        grid.innerHTML = "";
        for (let i = 1; i <= 49; i++) {
            grid.innerHTML += `<div class="myBox3">${i}</div>`;
        }
    } 


    // on click the background changes color
    grid.addEventListener('click', (event) => {
        const myValue = document.getElementById('myDifficulty').value;
        const myBoxes = document.querySelectorAll('.myBox1, .myBox2, .myBox3');
        // lo score e la somma delle caselle cliccate e crea punteggio finale
        let myScore = 0;

        if (myValue == 1) {
            if (myArray.includes(parseInt(event.target.innerHTML))) {
                event.target.classList.add('myBomb');
                for (let i = 0; i < myBoxes.length; i++) {
                    myBoxes[i].classList.add('myClicked');
                }
                // somma le caselle cliccate e crea punteggio finale 
                document.getElementById('myScore').innerHTML = `Il tuo punteggio è ${myScore}`;

                // location.reload();
            } else {
                event.target.classList.add('myClicked');
                myScore++;
               
            }
        } else if (myValue == 2) {
            if (myArray.includes(parseInt(event.target.innerHTML))) {
                event.target.classList.add('myBomb');
                for (let i = 0; i < myBoxes.length; i++) {
                    myBoxes[i].classList.add('myClicked');
                }
                alert('Hai perso!');
                // location.reload();
            } else {
                event.target.classList.add('myClicked');
                myScore++;
            }
        } else if (myValue == 3) {
            if (myArray.includes(parseInt(event.target.innerHTML))) {
                event.target.classList.add('myBomb');
                for (let i = 0; i < myBoxes.length; i++) {
                    myBoxes[i].classList.add('myClicked');
                }
                document.getElementById('myScore').innerHTML = `Il tuo punteggio è ${myScore}`;
                // location.reload();
            } else {
                event.target.classList.add('myClicked');
                myScore++;
            }
        }

        
        if (myScore == (myValue * myValue) - 16) {
            alert('Hai vinto!');
            location.reload();
        }


    });

    // generate 16 random numbers for each value of the difficulty level (1 = 100, 2 = 81, 3 = 49)  
    const myArray = [];
        
    if (myValue == 1) {
        while (myArray.length < 16) {
            const myRandom = Math.floor(Math.random() * 100) + 1;
            if (!myArray.includes(myRandom)) {
                myArray.push(myRandom);
            } else {
                continue;
            }
        }
    } else if (myValue == 2) {
        while (myArray.length < 16) {
            const myRandom = Math.floor(Math.random() * 81) + 1;
            if (!myArray.includes(myRandom)) {
                myArray.push(myRandom);
            } else {
                continue;
            }
        }
    } else if (myValue == 3) {
        while (myArray.length < 16) {
            const myRandom = Math.floor(Math.random() * 49) + 1;
            if (!myArray.includes(myRandom)) {
                myArray.push(myRandom);
            } else {
                continue;
            }
        }
    }

     console.log(myArray);

    grid.addEventListener('dblclick', (event) => {
        event.target.classList.remove('myClicked');
    });

    
});

// on click cancel grid is deleted
Btncancel.addEventListener('click', () => {
grid.innerHTML = "";

}); 
