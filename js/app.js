// selector
let sections = document.querySelectorAll("section");
let ulList = document.getElementById("navbar__list");
let pageHeader = document.querySelector(".page__header");
let footer = document.querySelector("footer");


// make nav list
function navList(num) {
    for (let i = 0; i < num; i++){
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.appendChild(document.createTextNode(`Section ${i+1}`));
        // a.href = `#section${i+1}`;
        a.classList.add("menu__link");
        li.appendChild(a);
        ulList.appendChild(li);
        // event when click to nav links go directly to section
        a.addEventListener("click", function () {
            let sectionPostion = sections[i].getBoundingClientRect().y + window.scrollY;
            window.scrollTo({
                top: sectionPostion,
                behavior: "smooth"
            })
        })
    }
}

navList(sections.length);



// hide and Appear page-Header
function controlPageHeaderAndMakeActiveClass() {
    let scrollingBefore = window.scrollY;
window.onscroll = function () {
    let scrollingAfter = window.scrollY;
    if (scrollingBefore > scrollingAfter) {
        pageHeader.style.top = "0";
    } else {
        pageHeader.style.top = "-60px";
    }
    scrollingBefore = scrollingAfter;

    // make active state when scroll;
    sections.forEach((s) => {
        if (window.scrollY >= s.getBoundingClientRect().y + window.scrollY  - 300 && window.scrollY < s.getBoundingClientRect().bottom + window.scrollY - 300) {
            s.classList.add("active");
        } else {
            s.classList.remove("active");
        }
})
    }
}

controlPageHeaderAndMakeActiveClass();

// create button to scroll to up 
function upButton() {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode("Up"));
    footer.after(div);
    div.style.cssText = "position: fixed;background-color: darkcyan;color: white;padding: 10px;text-transform: uppercase;border-radius: 10px;cursor: pointer;transition: .3s ; "
    window.addEventListener("scroll" ,function(){
        if (window.scrollY >= 800) {
            div.style.bottom = "60px";
            div.style.right = "20px";
        } else {
            div.style.bottom = "-60px";
            div.style.right = "-50px";
        }
    })
    div.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior:"smooth"
        })
    }
}

upButton();







