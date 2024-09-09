let content = document.querySelector(".content")

// targets
let progress = document.querySelectorAll(".target-row .progress span")
let targetSection = document.querySelector(".target")
console.log(targetSection);



window.onscroll = function(){
    if(window.scrollTop >= targetSection.offsetTop-200){
        progress.forEach(span => {
            span.style.width = span.dataset.width
        })
    }
}

// tickets 
let ticketSpan = document.querySelectorAll(".tickets .box span.num")
let section = document.querySelector(".tickets")
let started = false

content.onscroll = function(){
    if(content.scrollTop >= targetSection.offsetTop-200){
        progress.forEach(span => {
            span.style.width = span.dataset.width
        })
    }
        if(content.scrollTop >= section.offsetTop-200){
            if(!started){
                ticketSpan.forEach((span)=>count(span))
        }
            started = true
        console.log(section.offsetTop);
    }
}

function count(span){
    let goal = span.dataset.goal
    let counter = setInterval(() => {
                span.textContent++
                if(span.textContent == goal){
                    clearInterval(counter)
                }
        }, 10/goal);
}
