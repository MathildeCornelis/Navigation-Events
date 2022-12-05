const _initTime = Date.now();

const getElapsedTime = () => {
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's';
};

const clickOnSquare = (e) => {
console.log(e.target.classList[1]);
console.log(getElapsedTime());
        /*Everytime the user clicks on one of the action squares
        Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper)*/
section = document.getElementsByTagName('section')[0];
let div = document.createElement('div');
div.classList.add("displayedsquare", e.target.classList[1]);
section.appendChild(div);

/*Create a new <li> in the log below to state when the action was done*/
ul = document.getElementsByTagName('ul')[0];
let li = document.createElement('li');
ul.appendChild(li);
li.textContent = "[" + getElapsedTime() + "]" + " created a new " + e.target.classList[1] + " square";
};

const actionSquares = document.querySelectorAll('.actionsquare');
for (let actionSquare of actionSquares) {
actionSquare.addEventListener('click', clickOnSquare);
};

/*When the spacebar is hit randomly change the background color of the whole page*/
const body = document.querySelector('body');

function random_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bColor = "rgb(" + x + "," + y + "," + z + ")";
    return bColor;
}

document.addEventListener('keyup', event => {
    console.log(event);
        if (event.code === 'Space') {
            document.body.style.background = random_color();
            /*Log when the spacebar is used the same way you used for the generated squares.*/
            ul = document.getElementsByTagName('ul')[0];
            let li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = "[" + getElapsedTime() + "]" + " created a new " + random_color() + " background";
            }
        else if (event.code == "KeyI") {
            console.log('test');
            while (document.querySelectorAll('li').length) {
                document.querySelector('li').remove();
            }
        };
    }
);

/*Log when the spacebar is used the same way you used for the generated squares.
li = document.getElementsByTagName('li')[0];
let body_li = document.createElement('li');
li.appendChild(li);*/