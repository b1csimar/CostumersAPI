import express from 'express';
const PORT = 300;
const app = express();

app.use(express.json());

let costumers = [
    {id: 1, name: "Bob", email:"bob@gmail.com"},
    {id: 2, name: "Rick", email:"rick@gmail.com"},
    {id: 3, name: "Louise", email:"louise@gmail.com"},
    {id: 4, name: "Alice", email:"alice@gmail.com"},
    {id: 5, name: "Diana", email:"diana@gmail.com"},
]

//GET
app.get("/costumers", (req, res) => {
    res.status(200).json(costumers);
});

app.get("/costumers/:id", (req, res) =>{
    const id = req.params.id
    const costumer = costumers.find(costumer => costumer.id == id)
    if(!costumer){
        return res.status(404).json({message: "costumer not found"})
    }
    res.status(200).json(costumer);
})

//POST
app.post("/costumers", (req, res) => {
    const name = req.body.name
    const email = req.body.email
    if(!name || !email) {
        return res.status(400).json({message: "Invalid credentials"})
    }
    const id = costumers[costumers.length - 1]?.id + 1 || 1;
    const user = {id, name, email};
    costumers.push(costumer);
    res.status(201).json(costumer);
});

//PUT
app.put("/costumers/:id", (req, res) => {
    const id = +req.body.id
    let costumer = costumers.find(costumer => costumer.id === id)
    if(!costumer){
        return res.status(404).json({message: "costumer not found"})
    }
    const index = costumers.indexOf(costumer);
    costumer = {... id, name, email};
    costumers[index] = costumer;
    res.status(200).json(costumer)
});

//DELETE
app.delete("/costumers/:id", (req, res) => {
    const id = +req.body.id
    costumers = costumer.find(costumer => costumer.id !== id)
    res.status(200).json({message: "successful delete"})
});

app.listen(PORT, () => {
    console.log((`server is running on http://localhost:${PORT}`))
});