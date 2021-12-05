const router = require('express').Router();
const EncryptController = require('../../modules/encrypt/controllers');


//initial route
router.get('/',(req,res)=>{
    res.json({message: "Olá humano"});
})

//router create
router.post('/create', EncryptController.create)

//router search
router.get('/encripts/:id', EncryptController.search)


module.exports = router