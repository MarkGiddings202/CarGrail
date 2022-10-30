//onclick function that renders page layout when user selects make account
function makeAccount(event) {
    document.head.link.setAttribute("href", "index2.css");
}
const createAccountBtn  = document.getElementById("createAccount")
createAccountBtn.addEventListener("click", makeAccount);




let arr = ["Acura", "Alfa Romeo", "Audi","Bentley"];

let arr2 = [["TLX", "ILX"],["Guila", "Stelvio"],["A6", "RS7"],["Bentayga", "488"]]

function addToCarMake(arr) {
    let parent = document.getElementById("carMake")

    for (let i = 0; i < arr.length; i++){
        let newOption = document.createElement('option');
        newOption.setAttribute("value", arr[i]);
        newOption.innerText = arr[i];
        parent.appendChild(newOption);
    }
}
addToCarMake(arr);



function addToCarModel(event) {
    let parent = document.getElementById("carModel")
    const target = event.target.value.toString();
    let index = arr.indexOf(target);

    for (let i = 0; i < arr2[index].length; i++){
        let newOption = document.createElement('option');
        newOption.setAttribute("value", arr2[index][i]);
        newOption.innerText = arr2[index][i];
        parent.appendChild(newOption);
    }
}

let makeOptions = document.getElementById("carMake")
makeOptions.addEventListener("change", addToCarModel)
