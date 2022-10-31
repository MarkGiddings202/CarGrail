// function addToCarMake(arr) {
//     let parent = document.getElementById("carMake")

//     for (let i = 0; i < arr.length; i++) {
//         let newOption = document.createElement('option');
//         newOption.setAttribute("value", arr[i]);
//         newOption.innerText = arr[i];
//         parent.appendChild(newOption);
//     }
// }
// addToCarMake(arr);



// function addToCarModel(event) {
//     let parent = document.getElementById("carModel")
//     const target = event.target.value.toString();
//     let index = arr.indexOf(target);

//     for (let i = 0; i < arr2[index].length; i++) {
//         let newOption = document.createElement('option');
//         newOption.setAttribute("value", arr2[index][i]);
//         newOption.innerText = arr2[index][i];
//         parent.appendChild(newOption);
//     }
// }

// let makeOptions = document.getElementById("carMake")
// makeOptions.addEventListener("change", addToCarModel)


function firstNext() {
    let current = document.getElementById("accountInputForm")
    current.style.display = "none";
    let next = document.getElementById("incomeForm");
    next.style.display = "flex";
}

let firstNextBtn = document.getElementById("firstNextButton")
console.log(firstNextBtn);
firstNextBtn.addEventListener("click", firstNext);



function secondNext() {
    let current = document.getElementById("incomeForm")
    current.style.display = "none";
    let next = document.getElementById("needsForm");
    next.style.display = "flex";
}

let secondNextBtn = document.getElementById("secondNextButton")
secondNextBtn.addEventListener("click", secondNext);



function thirdNext() {
    let current = document.getElementById("needsForm")
    current.style.display = "none";
    let next = document.getElementById("wantsForm");
    next.style.display = "flex";
}

let thirdNextBtn = document.getElementById("thirdNextButton")
thirdNextBtn.addEventListener("click", thirdNext);



function fourthNext() {
    let current = document.getElementById("wantsForm")
    current.style.display = "none";
    let next = document.getElementById("dreamCarForm");
    next.style.display = "flex";
}

let fourthNextBtn = document.getElementById("fourthNextButton")
fourthNextBtn.addEventListener("click", fourthNext);


function firstBack() {
    let current = document.getElementById("incomeForm");
    current.style.display = "none";
    let prev = document.getElementById("accountInputForm");
    prev.style.display = "flex";
}

let firstBackBtn = document.getElementById("firstBackButton");
firstBackBtn.addEventListener("click", firstBack);


function secondBack() {
    let current = document.getElementById("needsForm");
    current.style.display = "none";
    let prev = document.getElementById("incomeForm");
    prev.style.display = "flex";
}

let secondBackBtn = document.getElementById("secondBackButton");
secondBackBtn.addEventListener("click", secondBack);


function thirdBack() {
    let current = document.getElementById("wantsForm");
    current.style.display = "none";
    let prev = document.getElementById("needsForm");
    prev.style.display = "flex";
}

let thirdBackBtn = document.getElementById("thirdBackButton");
thirdBackBtn.addEventListener("click", thirdBack);


function fourthBack() {
    let current = document.getElementById("dreamCarForm");
    current.style.display = "none";
    let prev = document.getElementById("wantsForm");
    prev.style.display = "flex";
}

let fourthBackBtn = document.getElementById("fourthBackButton");
fourthBackBtn.addEventListener("click", fourthBack);

