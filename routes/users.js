import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();  //initialise the router

let users = [                      //since we are changing users array
    {
    'name': "kashyup",
    'age': 24
    }
]

//all routes in here are starting with /users
router.get('/', (req, res)=> {

    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;

   users.push({ ...user, id: uuidv4()}); 

   res.send(`User with name ${user.fisrtName} added to the database`);

});

router.delete('/:id', (req, res) => {
        const { id } = req.params;

        users = users.filter((user) => true)
        res.send(`user with id ${id} deleted`)
});

export default router;