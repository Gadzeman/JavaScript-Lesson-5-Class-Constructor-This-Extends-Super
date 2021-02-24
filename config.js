// різниця виклику функції в об'єкті

let userTest = {
    name: "petya",
    age: 25,
    greeting: function () {
        console.log("hello " + userTest.name)
    },
}

console.log(userTest.greeting())

console.log("=====and=====")

userTest.greeting()

console.log("==========================================================================")

// this приклад:

let user = {
    name: "olya",
    age: 20,
    printInfo: function () {
        console.log(this) // тут this (переклад ЦЕЙ), є якби зміною для назви об'єкта (user), і ссилається на нього
    }
}

user.printInfo()

console.log("==========================================================================")

// function construrtor це нам дозволить не прописувати кожного юзера, а за допомогою конструктора створити шаблон для створення юзерів
// new викликається конструктор за допомогою new
// зазвичай коли ми створюємо шаблон, його назва починається з великої літери

function User(name, age) {
    this.name = name
    this.age = age
}

let user1 = new User("alex", 25)
let user2 = new User("olya", 20)
let user3 = new User("vasya", 20)

console.log(user1)
console.log(user2)
console.log(user3)

console.log("==========================================================================")

// class & class constructor :

class User2 {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.greeting = function () {
            console.log("Hello " + this.name)
        }
    }
}

let user4 = new User2("petya", 23)
console.log(user4)

console.log("===================================Task====================================")

// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

function Tag(title, action, titleOfArray, actionOfArray) {
    this.title = title;
    this.action = action;
    let info = [{
        titleOfAttr: titleOfArray
    }, {
        actionOfAttr: actionOfArray
    }]
    console.log("---------------")
    console.log("Title of tag: " + this.title)
    console.log("Action of tag: " + this.action)
    console.log(info)
}

let a = new Tag("a", "Является одним из важных элементов HTML и предназначен для создания ссылок", "a", "Является одним из важных элементов HTML и предназначен для создания ссылок")
let div = new Tag("div", "Является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого", "div", "Является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого")
let h1 = new Tag("h1", "предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка", "h1", "предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка")

// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

class MakeTag {
    constructor(name, action, nameOfArr, actionOfArr) {
        this.name = name;
        this.action = action;
        let tagArray = [{
            name: nameOfArr
        }, {
            action: actionOfArr
        }]
        console.log("---------------")
        console.log("Tag name: " + this.name)
        console.log("Tag action: " + this.action)
        console.log(tagArray)
    }
}

let span = new MakeTag("span", "Предназначен для определения строчных элементов документа", "span", "Предназначен для определения строчных элементов документа")
let input = new MakeTag("input", "является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем", "input", "является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем")
let form = new MakeTag("form", "устанавливает форму на веб-странице", "form", "устанавливает форму на веб-странице")
let option = new MakeTag("option", "определяет отдельные пункты списка, создаваемого с помощью контейнера <select>", "option", "определяет отдельные пункты списка, создаваемого с помощью контейнера <select>")
let select = new MakeTag("select", "позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее", "select", "позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее")

// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

console.log("==========================================================================")

let car = {
    model: "Opel",
    country: "Germany",
    year: "2013",
    maxSpeed: "240 km/h",
    engine: 1.7,
    drive: function(){console.log(`We drive at a speed of ${car.maxSpeed}`)},
    info: function(){console.log(`Model: ${car.model}; Country: ${car.country}; Engine: ${car.engine}; Year: ${car.year}`)},
    increaseMaxSpeed: function(newSpeed){
        car.maxSpeed = newSpeed;
    },
    changeYear: function(newValue){
        car.year = newValue;
    },
    addDriver: function(driverName, driverAge){
        car.driver = {
            name: driverName,
            age: driverAge,
            greeting: `Hello! My name is ${driverName}`
        }
    }
}

// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

class MakeCar{
    constructor(model, year, maxSpeed, engine){
        this.model = model
        this.year = year
        this.maxSpeed = maxSpeed
        this.engine = engine
    }
    drive() {
        console.log(`We drive at a speed of ${this.maxSpeed}`)
    }
    info(){
        console.log(`Model: ${this.model}; Max Speed: ${this.maxSpeed}; Engine: ${this.engine}; Year: ${this.year}`)
    }
    increaseMaxSpeed(newSpeed){
        this.maxSpeed = newSpeed;
    }
    changeYear(newValue){
        this.year = newValue;
    }
    addDriver(driverName, driverAge){
        this.driver = {
            name: driverName,
            age: driverAge,
            greeting: `Hello! My name is ${driverName}`
        }
    }
}

let car1 = new MakeCar("BMW", "1998", "310 km/h", 3.5)
console.log(car1)
car1.addDriver("Vasya", 35)
console.log(car1)
car1.drive()
car1.increaseMaxSpeed("258 km/h")
console.log(car1)
car1.drive()
car1.changeYear("2002")
console.log(car1)

let car2 = new MakeCar("OPEL", "2013", "240 km/h", 1.7)
car2.info()

console.log("==========================================================================")

// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

class Prince{
    constructor(name, age, foundFootSize){
        this.name = name
        this.age = age
        this.foundFootSize = foundFootSize
    }
}

class Cinderella{
    constructor(name, age, footSize){
        this.name = name
        this.age = age
        this.footSize = footSize
    }
}

let cinArray = [
    new Cinderella("Katya", 20, 37.8),
    new Cinderella("Olya", 22, 38.5),
    new Cinderella("Galya", 26, 37.5),
    new Cinderella("Zoryana", 21, 38.3),
    new Cinderella("Daryna", 23,  38.2)
]

let prince = new Prince("Albert", 25, 38.2)

for (const cin of cinArray) {
    if(cin.footSize === prince.foundFootSize){
        prince.cinderella = cin.name
    }
}

console.log(prince)

console.log("==========================================================================")

// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

function Cind(name, age, footSize){
    this.name = name
    this.age = age
    this.footSize = footSize
}

function Princ(name, age, foundFootSize){
    this.name = name;
    this.age = age;
    this.foundFootSize = foundFootSize
    this.lookingFor = function (array){
        for (const cin of array) {
            if(cin.footSize == this.foundFootSize){
                this.cindarella = cin.name
            }
        }
    }
}

let cin1 = new Cind("Katya", 20, 37.8)
let cin2 = new Cind("Olya", 22, 38.5)
let cin3 = new Cind("Galya", 26, 37.5)
let cin4 = new Cind("Zoryana", 21, 38.3)
let cin5 = new Cind("Daryna", 23,  38.2)

let cinArr = [
    cin1,
    cin2,
    cin3,
    cin4,
    cin5
]

let p = new Princ("Petya", 27, 37.8)
p.lookingFor(cinArr)
console.log(p)

console.log("==================================Practice================================")

// попрацювати з наслідуванням (inherit / extends)

class People{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

class Soldier extends People{
    constructor(name, age, rank){
        super(name, age)
        this.rank = rank
    }
}

class Developer extends People{
    constructor(name, age, skills){
        super(name, age)
        this.skills = skills
    }
}

let person1 = new Soldier("Payne", 33, "major")
console.log(person1)
let person2 = new Developer("Ostap", 20, "HTML/CSS, JS")
console.log(person2)

console.log("==========================================================================")

function mario(n){

    let gapStar=[];

    for(let i=0; i<n-1; i++){
        let b=' ';
        let a='*';
        gapStar.push(b);
        if(gapStar.length===n){

            gapStar.push(a);
        }
    }
    for(let i=1; i<=n; i++){
        gapStar.splice(n-i, 1, '*');
        console.log(...gapStar);
    }

}
mario(5);
