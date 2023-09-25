// class User{
//     #id = 20;
//     constructor(firstName, secondName){                         //constructor это класс   (считай переменная)
//         this.firstName = firstName;
//         this.secondName = secondName;                           // создали свойство класса
//     }
//     sayHello(){
//         console.log(`Privet! Meny zovut ${this.firstName} ${this.secondName}`)
//     }
// }

// const person1 = new User("Антон", "Александрович");

// console.log(person1)

// person1.sayHello()

// class Student extends User{                 //extends  позволяет наследовать другой класс 
//     constructor(firstName, secondName, degree){
//         super(firstName, secondName);
//         this.degree = degree;
//     }
//     sayHello(){
//         console.log(`Privet! Meny zovut ${this.firstName}
//         ${this.secondName} У меня ${this.degree} По IT`)
//     }
// }   

// const student1 = new Student ("Валерий", "Иванов", 5);

// student1.sayHello()


// class Button{
//     constructor(height, width, text){
//         this.height = height;
//         this.width = width;
//         this.text = text;
//     }
//     showBtn(){
//         document.write(`<button style="height:${this.height};
//         width:${this.width}px">${this.text} </button>`)
//     }


// }

// class BootstrapButton extends Button{
//     constructor(height, width, text, backgroundColor){
//     super(height, width, text)
//         this.backgroundColor = backgroundColor;

//     }
//     showBtn(){
//         document.write(`<button style="height:${this.height};
//         width:${this.width}px;  background-color:${this.backgroundColor}">${this.text} </button>`)
//     }
// }




// const btn = new Button ("200px", 500, "Klick");
// btn.showBtn();

// const newBtn = new BootstrapButton("400px", 500, "Click", "red");
// newBtn.showBtn()




let value = Math.floor(Math.random()*(100 - 1 + 1)+1)
console.log(value)

function game(){
    let answer = +prompt ("Введите Ваше число");
    if(answer > value){
        alert("Ваше число больше");
        game();
        return;
    }else if(answer < value){
        alert("Ваше число меньше");
        game();
        return;
    }else if(answer == value){
        alert("WIN")
    }
}
game()