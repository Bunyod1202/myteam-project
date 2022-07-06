var elDirLink=document.querySelectorAll(".directors-list__link");
var elDirItem=document.querySelectorAll(".directors-list__item")

console.log(elDirLink);
console.log(elDirItem);

elDirLink.forEach(function(links){

    console.log(links);

    links.addEventListener("click",function(evt){

        evt.preventDefault()

        elDirItem.forEach(function(items){
            items.classList.remove("directors-list__item-active")
            console.log(items);
        })
        
        
        
    });
})