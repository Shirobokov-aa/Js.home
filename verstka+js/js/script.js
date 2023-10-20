// const btn = document.querySelector(".button");
// console.log(btn);

// const btn1 = $("button")
// console.log(btn1[0])

// btn.addEventListener("click", function(){
//     console.log("jglkdfjg")
// })
// $("button").hover(function(){
//     console.log("eto hover")
// })

// btn.addEventListener("mouseover", function(){
//     btn.style.color = "red";
// })

// btn.addEventListener("submit", function(){
//     btn.style.color = "red";
// })


// document.addEventListener("keydown" , function(event){
//     // console.log(event)
//     // if(event.key == "Escape"){
//     //     alert("escate")
//     // }

//     if (event.key == "F5"){
//         event.preventDefault()
//         return
//     }
// })

// const clickOnBtn = function(){
//     console.log(event)
//     console.log(event.screenX)
//     // btn.classList.add("newClass, newClass2")
//     btn.classList.remove("newClass")
//     btn.classList.toggle("newClass")
//     if (btn.classList.contains("newClass")){

//     }
//     btn.classList.replace("oldClass","newClass")

// }

// btn.addEventListener('click', clickOnBtn);
// // btn.removeEventListener('click', clickOnBtn)


const tabHead = document.querySelector(".tabs__head--js")   //Инструкция для добавления класса и удаления
const tabBody = document.querySelector(".tabs__body")


// Первый Вариант
// tabHead.addEventListener('click', function(){               // Функция которая при клике добовляет и удаляет класс
//     tabBody.classList.toggle("tabs__body--open");           // По бэм body--open
// })


// Второй Вариант
// tabHead.addEventListener('click', () => {
//     tabBody.classList.toggle("tabs__body--open");
// })



// Третий Вариант

// $(".tabs__head").click(function()){
//     $(".tabs__body").toggleClass("tabs__body--head")
// }


$(".tabs__caption").click(function() {
    // console.log($(this).index())
    $(this).addClass("tabs__caption--active")                            //добовляем класс нашему элементу
    $(this).siblings().removeClass("tabs__caption--active")              // Удаляем класс 
    let currentTabIndex = $(this).index()
    $(this)
    .closest(".tabs")
    .find(".tabs__item")
    .eq(currentTabIndex)
    .addClass("tabs__item--active")
    .siblings()
    .removeClass("tabs__item--active")

    // $(this).parent()
    //         .next()
    //         .children()
    //         .toggleClass("tabs__item--active")
})




// next() prev()
//perent
// closest ("Селектор")

// index() - индекс элемент в потоке

//.eq()
// siblings() - все соседние элемнты 


