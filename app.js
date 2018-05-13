const brain = require("brain.js")

const network = new brain.NeuralNetwork()

network.train([
    {input:{r:0.62 , g:0.72 ,b:0.88}, output:{light:1}},
    {input:{r:0.1 , g:0.81 ,b:0.72}, output:{light:1}},
    {input:{r:0.33 , g:0.24 ,b:0.29}, output:{dark:1}},
    {input:{r:0.74 , g:0.78 ,b:0.86}, output:{light:1}},
    {input:{r:0.31 , g:0.35 ,b:0.41}, output:{dark:1}}
])


const result = network.run({r:0 ,g:1 ,b:0.65})
console.log(result)
