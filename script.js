const inputbox=document.getElementById("input-box");
const listcontainer =document.querySelector(".list-container");

function addTask(){
    if(inputbox.value===''){
        alert("You Muat write Something!!");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
     inputbox.value = "";
     savedata();
}
listcontainer.addEventListener("click",function(e){
    //check or uncheck 
    if (e.target.tagName==="LI") {
        e.target.classList.toggle("checked");
        savedata();
    }
    //delete 
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);
//save page reload
function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showTask();

