//task 1: process bar
const reload = () => {
    const percentage = document.getElementById("process-bar");
    let proWidth = 0;
    let interval = setInterval(function() {
        proWidth++; 
        percentage.style.width = proWidth + "%";
        percentage.innerHTML = proWidth + "%";
        
        if(proWidth >= 99){
            clearInterval(interval);
            percentage.style.width = 100 + "%";
            percentage.innerHTML = "Finished";
        }
    }, 100)
}

//task 2: search the datas from json file

//task 3: auto complete search
const states = ["AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "GU", "HI", "ID", "IL",
"IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", 
"NY", "NC", "ND", "MP", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "VI",
"WA", "WV", "WI", "WY"];

//get the input value
const input = document.querySelector("input");
//get the dropdown list 
const dropDown = document.querySelector(".dropDownList");

input.addEventListener("input", function(){
    closedList();
    //if did not have any input text Value, closed drop down list
    const inputValue = this.value;
    if (!inputValue) { 
        return false;
    }

    //check and find the states that have same character
    //get a new array about it have same character states
    //使用 indexOf() 检查 inputValue 是否出现在 matchStates 字符串中。
    //如果是的，它将返回 inputValue 在 matchStates 字符串中第一次出现的索引， 不是， 返回 -1
    const matchList = states.filter(function (matchStates) {
        //!== -1 检查确保只有具有匹配字符串的非负索引， 才会加入到matchList中
        return matchStates.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1;
    }); //And test if the lowercase version of matchStates contains the lowercase version of another variable called inputValue.
    
    //show the mach list into drop down
    matchList.forEach(function (matchItem) {
        const dropDownItem = document.createElement("ul"); //add the matchList element into ul to shown
        dropDownItem.textContent = matchItem;
        //if clicked choose one states, complete the input text value and closed drop down list
        dropDownItem.addEventListener("click", function() {
            //console.log("11111")
            input.value = dropDownItem.textContent;
            closedList();
        });
        dropDown.appendChild(dropDownItem); //add the items and show it in the dropDown area
    });
});

//closed drop down list
const closedList = (e) =>{
    const items = document.querySelectorAll(".dropDownList ul"); //get the states item from drop down ul
    items.forEach(function (item) {
        if (e !== item && e !== input) {
          item.parentNode.removeChild(item); //remove the DOM node
        }
    });
}


//task 4: box game
const cradsList = document.querySelectorAll('.card-item');
const scoreSum = document.getElementById("scoreTotal");
let score = 0;
let gussTimes = 5;
let gusses = 0;
let randomMCards = [];

const randomM = () => {
    while(randomMCards.length < gussTimes) {
        //在还没被翻的card中 随机放入m
        const randomM = Math.floor(Math.random() * cradsList.length);
        //检查生成的是否是之前已经被翻开了的
        if(!randomMCards.includes(randomM)){
            randomMCards.push(randomM);
        }
    }

    /*randomMCards.forEach(item => {
        console.log(item);
    })*/
}

cradsList.forEach((gussCard, cardIndex) => {
    randomM();
    gussCard.addEventListener("click", () => {
        if(randomMCards.includes(cardIndex)){
            score++;
            scoreSum.textContent = score;
        }

        gussCard.textContent = randomMCards.includes(cardIndex) ? 'm' : '';
        gussCard.classList.add('open'); //引用open class的效果

        setTimeout(() => {
            gussCard.textContent = '';
            gussCard.classList.remove('open');
        }, 1000);

        gusses++;

        if(gusses >= gussTimes){
            alert("Game Over, Your score is " + score);
            score = 0;
            scoreSum.textContent = score;
            gusses = 0;
            randomMCards = [];
            randomM();
        }
    });
});
