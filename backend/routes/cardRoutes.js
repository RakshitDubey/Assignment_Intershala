const { createCard,getAllCards,getCardByTitle } = require('../controllers/cardControllers')


const router=require('express').Router()



router.post('/cards',createCard)
router.get('/cards',getAllCards)
router.get('/cards/:title',getCardByTitle)
module.exports=router

