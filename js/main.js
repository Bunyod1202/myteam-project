var elDirLink=document.querySelectorAll(".directors-list__link");
var elDirItem=document.querySelectorAll(".directors-list__iiner")

console.log(elDirLink);
console.log(elDirItem);

    
links.addEventListener("click",function(evt){

    elDirItem.forEach(function(items){
        items.classList.remove("directors-list__item--active")
    })

    links.parentElement.classList.add("directors-list__item--active")
})
  
