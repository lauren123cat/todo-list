const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask()
{
    if (inputBox.value === '')
    {
        alert("Write something already!");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; // text inside li
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""; // resets input to no text after previous input is displayed on the bottom
    saveData();
}

listContainer.addEventListener("click", function(e)
{
    if (e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked"); // if an assignment is checked it'll remove it
        saveData();
    }
    else if (e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() 
{
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();