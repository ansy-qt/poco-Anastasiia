const food = {
    calories: 250,
    vitamins: ["B12", "C", "A"],
    name: "",
    contains: ["nuts", "gluten"],
    vegetarian: true,
    halal: false,
    expiry_date: "2023-10-18",
    category: "fruit",
    price: 5.90,
    isEdible: function () {
        let today = new Date();
        if (today.toISOSString().split('T')[0] < this.expiry_date) {
            return true;
        }
        return false;
    }
}

console.table(food);

console.log(food.name);
console.log(food["expiry_date"]);

console.log(`Is my ${food.name} still edible?`);



//object constructor

function Food2(calories, vitamins = [], name, contains, halal, expiry_date, category, price, vegetarian = true,) { //for objects the name is capitalized
    this.calories = calories;
    this.vitamins = vitamins;
    this.name = name;
    this.contains = contains;
    this.halal = halal;
    this.expiry_date = expiry_date;
    this.category = category;
    this.price = price;
    this.vegetarian = vegetarian;
    isEdible = function() {
        let today = new Date();
        if (today.toISOSString().split('T')[0] < this.expiry_date) {
            return true;
        }
        return false;
    }
}


const banana = new Food2(250, ["B12", "C", "A"], "Banana", ["nuts", "gluten"], true, "2023-10-18", 5.90);
banana.mushy = true;
banana.expiry_date = "2023-10-16";
// console.log(banana.isEdible());

// console.table(banana);


class Food {
    constructor(calories, vitamins = [], name, contains, halal, expiry_date, category, price, vegetarian = true) { //for objects the name is capitalized
        this.calories = calories;
        this.vitamins = vitamins;
        this.name = name;
        this.contains = contains;
        this.halal = halal;
        this.expiry_date = expiry_date;
        this.category = category;
        this.price = price;
        this.vegetarian = vegetarian;
        isEdible = function () {
            let today = new Date();
            if (today.toISOSString().split('T')[0] < this.expiry_date) {
                return true;
            }
            return false;
        }
    }
}

let apple = new Food(300, ["B12", "C"], "Apple", ["nuts"], true, "2023-10-18", 1.90);
console.table(apple);
console.log(`Is my ${apple.name} still edible?`);