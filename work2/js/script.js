$(".allParent").addClass("newClass")      //обращаемся к классу, что бы добавить новый класс.


console.log($(".allParent"))

$(".child11").click(function(){
    // $(this).toggleClass("isActive")

    // $(this).parent().next().toggleClass("isActive")

    $(this).closest(".allParent").toggleClass("isActive")

})



// .parent()                    выход на родителя
// .prev()                      предыдущий
// children()                   выход на ребенка
// .closest(".allParent")       выход на allParent
// .find(".child44")            поиск элемента child44
// .siblings()                  все соседи



