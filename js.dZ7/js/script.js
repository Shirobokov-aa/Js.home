// задача 1 

// class Circle {
//     constructor(radius) {
//         this._radius = radius;
//     }

//     get radius() {
//         return this._radius;
//     }

//     set radius(value) {
//         if (value < 0) {
//             console.error("Радиус не может быть отрицательным.");
//         } else {
//             this._radius = value;
//         }
//     }

//     get diameter() {
//         return this._radius * 2;
//     }

//     calculateArea() {
//         return Math.PI * Math.pow(this._radius, 2);
//     }

//     calculateCircumference() {
//         return 2 * Math.PI * this._radius;
//     }
// }

// // Пример использования класса:
// const myCircle = new Circle(5); // Создаем окружность с радиусом 5
// console.log(`Радиус: ${myCircle.radius}`);
// console.log(`Диаметр: ${myCircle.diameter}`);
// console.log(`Площадь: ${myCircle.calculateArea()}`);
// console.log(`Длина окружности: ${myCircle.calculateCircumference()}`);

// // Изменение радиуса через set-свойство
// myCircle.radius = 7;
// console.log(`Новый радиус: ${myCircle.radius}`);



// Задача 2 



// class HtmlElement {
//     constructor(tagName, isSelfClosing = false) {
//         this.tagName = tagName;
//         this.isSelfClosing = isSelfClosing;
//         this.textContent = "";
//         this.attributes = {};
//         this.styles = {};
//         this.children = [];
//     }

//     setAttribute(name, value) {
//         this.attributes[name] = value;
//     }

//     setStyle(property, value) {
//         this.styles[property] = value;
//     }

//     appendChild(element) {
//         this.children.push(element);
//     }

//     prependChild(element) {
//         this.children.unshift(element);
//     }

//     getHtml() {
//         const attributeString = Object.keys(this.attributes)
//             .map(attr => `${attr}="${this.attributes[attr]}"`)
//             .join(" ");

//         const styleString = Object.keys(this.styles)
//             .map(prop => `${prop}: ${this.styles[prop]};`)
//             .join(" ");

//         const elementContent = this.children.map(child => child.getHtml()).join("");

//         if (this.isSelfClosing) {
//             return `<${this.tagName} ${attributeString} style="${styleString}" />`;
//         } else {
//             return `<${this.tagName} ${attributeString} style="${styleString}">${this.textContent}${elementContent}</${this.tagName}>`;
//         }
//     }
// }

// // Пример использования для создания блока
// const container = new HtmlElement("div", false);
// container.setAttribute("id", "my-container");
// container.setStyle("background-color", "lightblue");

// const header = new HtmlElement("h1");
// header.textContent = "Заголовок";

// const paragraph = new HtmlElement("p");
// paragraph.textContent = "Это текстовый абзац.";

// container.appendChild(header);
// container.appendChild(paragraph);

// document.write(container.getHtml());
