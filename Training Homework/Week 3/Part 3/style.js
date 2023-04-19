
let dataArray = [
    {
      "name": "John Smith",
      "email": "john.smith@example.com"
    },
    {
      "name": "Jane Doe",
      "email": "jane.doe@example.com"
    },
    {
      "name": "Bob Johnson",
      "email": "bob.johnson@example.com"
    },
    {
      "name": "Alice Defe",
      "email": "bob.johnson@example.com"
    },
    {
      "name": "Chen Yang",
      "email": "bob.johnson@example.com"
    }
];

//get the input value
const inputText = document.querySelector("input");
//get the dropdown list 
const dropArea = document.querySelector(".dropDownList");

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

//监控input text是否有值输入
inputText.addEventListener("input", function(){
    closedList();
     //if did not have any input text Value, closed drop down list
    const inputValue = this.value; //Function declaration有自己的this, arrow function 没有
    if (!inputValue) { 
        return false;
    }

    //check and find the states that have same character
    //get a new array about it have same character states
    //使用 indexOf() 检查 inputValue 是否出现在 matchStates 字符串中。
    //如果是的，它将返回 inputValue 在 matchStates 字符串中第一次出现的索引， 不是， 返回 -1
    const matchList = dataArray.filter(function (matchUser) {
        //!== -1 检查确保只有具有匹配字符串的非负索引， 才会加入到matchList中
        return matchUser.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1;
    }); //And test if the lowercase version of matchStates contains the lowercase version of another variable called inputValue.


    matchList.forEach(function(matchItem){
        const dropDownItem = document.createElement("ul");
        dropDownItem.textContent = matchItem.name;
        dropDownItem.name = matchItem.name;
        dropDownItem.email = matchItem.email;
        //if clicked choose one states, complete the input text value and closed drop down list
        dropDownItem.addEventListener("click", function(){
            inputText.value = dropDownItem.textContent;
            userName.textContent = dropDownItem.name;
            userEmail.textContent = dropDownItem.email;
            closedList();
        });
        //允许您将 HTML 元素添加到另一个元素的末尾作为子节点。
        dropArea.appendChild(dropDownItem); //add the items as child node into parents node
    });
});


//closed drop down list
const closedList = (e) =>{
    const items = document.querySelectorAll(".dropDownList ul"); //get the states item from drop down ul
    items.forEach(function (item) {
        if (e !== item && e !== inputText) {
          item.parentNode.removeChild(item); //remove the DOM node
        }
    });
}


const startfifteen = () => {
    const timefifteen = document.getElementById("second15");
    let timeValue = 15;
    let interval = setInterval(function() {
        timeValue--;
        timefifteen.textContent = timeValue;

        if(timeValue == 0){
            clearInterval(interval);
            timefifteen.textContent = "Finished"
        }
    }, 100)
}

const startThirty = () => {
    const timeThirty = document.getElementById("second30");
    let timeValue = 30;
    let interval = setInterval(function() {
        timeValue--;
        timeThirty.textContent = timeValue;

        if(timeValue == 0){
            clearInterval(interval);
            timeThirty.textContent = "Finished"
        }
    }, 100)
}