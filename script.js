var istatus = document.querySelector("h5")
var btn = document.querySelector("#add")

var flag = 0

btn.addEventListener("click",function(){
    if(flag == 0){
    istatus.innerHTML="Friends"
    istatus.style.color = "green"
    btn.innerHTML = "Remove friend"
    flag = 1
}
else{
    istatus.innerHTML="Stranger"
    istatus.style.color = "blue"
    btn.innerHTML = "Add friend"
    flag = 0
}
})
