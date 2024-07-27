const express = require('express');
const router = express.Router();

const menuItem = require('./../models/menuItem');

//  POST Method to add a Menu Item
router.post('/', async (req, res) => {
    try {
      const data = req.body
      const newMenu = new menuItem(data);
      const response = await newMenu.save();
      console.log('data saved');
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' })
    }
  });

  //  GET method to get the Menu Items
router.get('/', async (req, res) => {
    try {
      const data = await menuItem.find();
      console.log('data fetched');
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' })
    }
  });

  router.get('/:moddy', async (req, res) => {
    try {
      const taste = req.params.taste;
      if (moddy == 'cold' || moddy == 'hot' || moddy == 'sweet') {
        const response = await Nikii.find({ taste: moddy });
        console.log('response fetched');
        res.status(200).json(response);
      } else {
        res.status(404).json({ error: 'Invalid work type' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  
  });

  module.exports = router;
  