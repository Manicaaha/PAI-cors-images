const express = require('express');
const cors = require('cors');
const app = express();

const port = 3000;

app.use(cors());


const dog = {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUmckZRaPOLuYUzRsUzqqj1s6kz-ZV5qVxQ&usqp=CAU',
    attr: { weight: 25, maxAge: 15, speed: 48 }
};

const cat = {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqAqjYtKjeSvnPe3INtIRSeXxAkbGT2-Z3NA&usqp=CAU',
    attr: { weight: 2, maxAge: 10, speed: 35 }
};

const horse = {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC9u_yBhr37VoQ9BCoilTqxTnLH4NymlE-Yw&usqp=CAU',
    attr: { weight: 450, maxAge: 25, speed: 65 }
};


app.get('/dog', (req, res) => {
    res.json(dog);
});


app.get('/cat', (req, res) => {
    res.json(cat);
});


app.get('/horse', (req, res) => {
    res.json(horse);
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});







// const express = require('express')
// const cors = require('cors')
// const app = express()

// const port = 3000

// app.use(cors())

// let dog = new Object()
// let cat = new Object()
// let horse = new Object()

// dog.img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUmckZRaPOLuYUzRsUzqqj1s6kz-ZV5qVxQ&usqp=CAU'
// dog.attr = new Object()
// dog.attr.weight = 25
// dog.attr.maxAge = 15
// dog.attr.speed = 48

// cat.img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqAqjYtKjeSvnPe3INtIRSeXxAkbGT2-Z3NA&usqp=CAU'
// cat.attr = new Object()
// cat.attr.weight = 2
// cat.attr.maxAge = 10
// cat.attr.speed = 35

// horse.img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC9u_yBhr37VoQ9BCoilTqxTnLH4NymlE-Yw&usqp=CAU'
// horse.attr = new Object()
// horse.attr.weight = 450
// horse.attr.maxAge = 25
// horse.attr.speed = 65

// let zoo = new Object()
// zoo.dog = dog
// zoo.cat = cat
// zoo.horse = horse

// app.listen(port, ()=>{
//     console.log(`Example app listening on port ${port}`)
// })
