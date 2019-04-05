module.exports = {
    display: (req, res) => {
        let db = req.app.get('db')
        db.get_houses()
        .then(houses => res.status(200).send(houses))
        .catch(err => console.log(`Your error is ${err}`))
    },
    
    create: (req, res) => {
        let db = req.app.get('db')
        let { name, address, city, state, zip} = req.body
        db.create_houses([name, address, city, state, zip])
        .then(() => res.status(200).send("You created a house"))
        .catch(err => console.log(`Your error is ${err}`))
    },
    
    delete: (req, res) => {
        let db = req.app.get('db')
        let { id } = req.params
        db.delete_house([id])
        .then(() => res.status(200).send('Deleted House'))
        .catch(err => console.log(`Your error is ${err}`))
    }
}