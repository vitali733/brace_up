const express = require('express')
usersRouter = express.Router();
const db = require('./db.js')

usersRouter.get('/', (req, res) => {
    res.send('getting all the users')
})

usersRouter.get('/:id', async (req, res, next) => {
console.log('A')
try {
    const result = await db.query('SELECT * FROM users');
    res.json(result.rows);
} catch (err) {
    next(err);
}
});


module.exports = usersRouter;