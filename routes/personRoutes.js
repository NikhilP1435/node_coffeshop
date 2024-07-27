const express = require('express');
const router = express.Router();

const Nikii = require('./../models/Nikii');

// POST route to Add a Person
router.post('/', async (req,res)=>{
    try{
   //  Assuming the request body contain the nikhil data
   const data = req.body
   // Create a newPerson document using the mongooge model
    const newPerson = new Nikii(data);
   //  Save the newPerson to the database
     const response = await  newPerson.save();
     console.log('data saved');
     res.status(200).json(response);
  
    }catch(err){
      console.log('Error are come',err)
      res.status(500).json({error:'Internal Server error'})
    }
  });

  // Get method to get the information
  router.get('/',async (req,res)=>{
    try{
      const data = await Nikii.find();
      console.log('data fetched');
      res.status(200).json(data);
   
    }catch(err){
      console.log('Error are come',err)
      res.status(500).json({error:'Internal Server error'})
    }
  });

  router.get('/:workType', async (req, res) => {
    try {
      const workType = req.params.workType;
      if (workType == 'waiter' || workType == 'Owner' || workType == 'chef') {
        const response = await Nikii.find({ work: workType });
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

  router.put('/:id',async(req,res)=>{
    try{
    const nikhilId = req.params.id;
    const updatedPersonData = req.body;

   const response = await Nikii.findByIdAndUpdate(nikhilId, updatedPersonData,{
    new:true,
    runValidators:true
   }) 
   if(!response){
    return res.status(404).json({error:'Person not found'});
   }
   console.log('data updated');
   res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' })
    }
});


  

  module.exports = router;
