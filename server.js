const express = require("express")

const app = express()
app.listen(3000, () => {
    console.log('CHECK CHECK CHECK')
  })
  // localhost:3000/greetings/Muhannad 
app.get('/greetings/:name', (req, res) => {
    const { name } = req.params
    // res.send('hello there, ${name}!');
    res.send(`hello there, ${name}!`); // BACK TICKS -_-
});

app.get('/roll/:number', (req, res) => {
    const { number } = req.params
    
    if (isNaN(number)) {
        res.send('you must specify a number.');
    } else {
        const randomNumber = Math.floor(Math.random() * (parseInt(number) + 1));
        // res.send('you rolled ${randomNumber}.');
        res.send(`you rolled ${randomNumber}.`); // back ticks lazm
    }
});

app.get('/collectibles/:index',(req,res)=> {
const {index} = req.params
if (index >= 0 && index < collectibles.length) {
    const { name, price } = collectibles[index];
    res.send(`So, you want the ${name}? For ${price}, it can be yours!`);
} else {
    res.send('This item is not yet in stock. Check back soon!');
}
})

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  app.get('/hello', (req, res) => {
    res.send(`Hello there, ${req.query.name}! I hear you are ${req.query.age} years old!`);
});


  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];
app.get('/shoes', (req, res) => {
    const { minPrice, maxPrice, type } = req.query;
    
    
    
});