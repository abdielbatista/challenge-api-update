const router = require('express').Router();
const EncripController = require('../controllers/encrip.crotoller')


//initial route
router.get('/',(req,res)=>{
    res.json({message: "Olá humano"});
})

//router create
router.post('/create', EncripController.create)

//router search
router.get('/encripts/:id', EncripController.search)


module.exports = router