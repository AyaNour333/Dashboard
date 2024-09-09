let projects = document.querySelectorAll(".projects-page .box")
let content = document.querySelector(".content");

window.onload = ()=>{
    projects.forEach((el , index) => {
        if(index < 2){
            let progressSpan = el.querySelector(".progress span")
            progressSpan.style.width = progressSpan.dataset.width
        }
    })
}

content.onscroll = function(){
    projects.forEach(box => {
        let boxOffset = box.offsetTop - content.offsetTop;
        if(content.scrollTop >= boxOffset - content.clientHeight + 100){
            let progressSpan = box.querySelector(".progress span")
            progressSpan.style.width = progressSpan.dataset.width
        }
    })
}
