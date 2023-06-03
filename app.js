// morning review

// html structure -> containerization

// datatypes ( strings, numbers, boolean, array, object, undefined, null)
//     methods

let menu = {
    breakast: ["chicken biscuit", "spicy chicken biscuit", "chick-n-minis", "egg white grill", "hash brown scramble burrito", "hash brown scramble bowl"],
    lunch: ["chicken sandwich", "deluxe sandwich", "spicy chicken sandwich", "grilled chicken sandwhich"],
    dinner: ["cobb salad", "spicy southwest salad", "market salad"],
    drinks: ["sweetened iced tea", "unsweetened iced tea", "lemonade", "iced coffee"]
}

let dailySpecial = "Biscuits and Burritos"

let storeLocations = ["dallas", "pittsburgh", "new york"]
    //look at websites for more info... look at how info is present for user
    
    
// what is syntax?
//     -spelling and grammar rules of programming language
    
    
// for loops -- conditionals

for(let i = 0; i <= 10; i++){

}


const menu2 = {
    breakfast : {
        chickenBiscuit : {
            name: "Chicken Biscuit",
            price : '$5',
            quantity : 2,
            image : "https://img.favpng.com/1/2/5/breakfast-chick-fil-a-toast-restaurant-biscuit-png-favpng-yq5bd3EtFWBBqknhkw1qHiAkV.jpg"
        },
        spicyChickenBiscuit : {
            name: "Spicy Chicken Biscuit",
            price : '$3',
            quantity : 1,
            image : "https://www.pngfind.com/pngs/m/256-2564116_biscuit-drawing-buttermilk-chick-fil-a-spicy-chicken.png"
        },
        hashBrown : {
            name: "Hash Brown",
            price : '$1',
            quantity : 4,
            image : "https://w7.pngwing.com/pngs/30/868/png-transparent-hash-browns-chick-fil-a-restaurant-menu-deep-brown.png"
        },
    },
    lunch : {
        chickenSandwich : {
            name: "Chicken Sandiwich",
            price : '$2',
            quantity : 1,
            image : ""
        },
        deluxeSandwich : {
            name: "Deluxe Sandwich",
            price : '$3',
            quantity : 1,
            image : ""
        },
        spicyChickenSandwich : {
            name: "Spicy Chicken Sandwich",
            price : '$1',
            quantity : 1,
            image : ""
        },
    },
    dinner : {
        cobbSalad : {
            name: "Cobb Salad",
            price : '$2',
            quantity : 1,
            image : ""
        },
        spicySouthwestSalad : {
            name: "Spice Southwest Salad",
            price : '$3',
            quantity : 1,
            image : ""
        },
        marketSalad : {
            name: "Market Salad",
            price : '$1',
            quantity : 1,
            image : ""
        },
    },
    drinks : {
        sweetenedIcedTea : {
            name: "Sweetened Iced Tea",
            price : '$2',
            quantity : 1,
            image : ""
        },
        unsweetenedIcedTea : {
            name: "Unsweetened Iced Tea",
            price : '$3',
            quantity : 1,
            image : ""
        },
        lemonade : {
            name: "Lemonade",
            price : '$1',
            quantity : 1,
            image : ""
        },
    }}

// set count for future loop
let count = 0


//grabbing elements to later populate with data
const populatedBreakfast = document.querySelector('.breakfast')
const populatedLunch = document.querySelector('.lunch')
const populatedDinner = document.querySelector('.dinner')
const populatedDrinks = document.querySelector('.drinks')
//checking
console.log(populatedBreakfast)


//function that grabs property{object} of menu2{}
const clickedCategory = (type) => {
    let foodType = menu2[type]

    for(const property in foodType){
        count++
        console.log(property)
        console.log(foodType[property])
        //store individual properties of property in variables for convenience
        const name = foodType[property].name
        const price = foodType[property].price
        const quantity = foodType[property].quantity
        const image = foodType[property].image
        console.log(name, price, quantity, image)
        getElement(type,name,price,quantity,image,count)
    }
}

//function that unhides element that will be populated.. just in case
const unhideElement = () => {
    populatedBreakfast.hidden = false
    populatedLunch.hidden = false
    populatedDinner.hidden = false
    populatedDrinks.hidden = false
}


// function that grabs and displays food
const displayFood = (type) => {
    // check that parameter holds the right data
    console.log(type)

    // grab data from menu object (dot or bracket notation)
        // dot notation doesnt work.. so stick with bracket notation
    console.log( menu2[type] )

    // store in variable for convenience
    let foodType = menu2[type]

    //avoid duplication
    removeContent()

    // function that grabs specific property from menu2{} and passes all info to getElement() function that it also calls
    clickedCategory(type)
    
    // unhiding element to populate (avoid logical error of not having parent element to append child to)
    unhideElement()

    // function to hide other elements (to be populated in future)
    clearOthers(type)
}

const removeContent = () => {
     // remove any content from menu.. avoids duplicating
     populatedBreakfast.innerHTML = ""
     populatedLunch.innerHTML = ""
     populatedDinner.innerHTML = ""
     populatedDrinks.innerHTML = ""
}

//function that grabs element that will hold data
const getElement = (type,name,price,quantity,image, count) => {
    const element = document.querySelector(`.${type}`)

    // const el = document.getElementsByClassName(type)
        //  noticed this is "HTMLCollection [div.breakfast]"
    // console.log(el)
    console.log(element)

    //call function to populte html with data
    populateElement(element,name,price,quantity,image,count)
}


//  function to display data in element
const populateElement = (element,name,price,quantity,image) => {
    console.log(element)

    // loop to create as many paragraph elements as needed
    for(let i = 1; i <= count; i++){
        console.log(count)
        var paragraph = element.appendChild(document.createElement("p"))

        // var imageElement = element.appendChild(document.createElement('img'))
        //var is bad practice ? but it makes paragraph variable accessible outside for loop

        // hurting brain too much work.. shows hidden errors (loop runs too many times?)
        // imageElement.classList.add("src")
        // imageElement.setAttribute("src", image)
    }

    // account for proper grammar
    if(quantity > 1){
        paragraph.innerText = `${quantity} ${name}'s for ${price}` 
    } else if(quantity === 1){
        paragraph.innerText = `${quantity} ${name} for ${price}` 
    }
}

//  function to clear other menu items when new category is clicked
const clearOthers = (type) => {
    //add hidden property to food category NOT being clicked
    if(type === 'breakfast'){
        populatedLunch.hidden = true
        populatedDinner.hidden = true
        populatedDrinks.hidden = true
    }
    if(type === 'lunch'){
        populatedBreakfast.hidden = true
        populatedDinner.hidden = true
        populatedDrinks.hidden = true
    }
    if(type === 'dinner'){
        populatedBreakfast.hidden = true
        populatedLunch.hidden = true
        populatedDrinks.hidden = true
    }
    if(type === 'drinks'){
        populatedBreakfast.hidden = true
        populatedDinner.hidden = true
        populatedLunch.hidden = true
    }
}


//  display location when any delivery option is clicked
const displayLocation = () => {
    // element to display inside
    const element = document.querySelector('.locations')

    console.log(element)
    
    let locations = ""
    storeLocations.forEach((location) => {
        location = location.toUpperCase()
        locations += ` ${location}   `
    })
    console.log(locations)

    element.innerText = locations
}