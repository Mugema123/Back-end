const express = require('express');
const router = express.Router();
const news = require("../models/news");


// Getting all
router.get('/v1/blogs', async (req, res) => {
    
    try {
      const letters = await news.find()
      res.json(letters)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })

  
  // Creating one
router.post('/v1/blogs/new', async (req, res) => {
  try { 
  const data = new news({
      title: req.body.title,
      Writter: req.body.Writter,
      date:req.body.date,
      content:req.body.content
    })
   
      const newNews = await data.save()
      res.status(201).json(newNews)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })

 

 // Updating One
  router.patch('/v1/blogs/:id',getNews, async (req, res) => {
      if (req.body.title != null) {
        res.data.title = req.body.title
      }
      if (req.body.Writter != null) {
        res.data.Writter = req.body.Writter
      }
      if (req.body.date != null) {
          res.data.date = req.body.date
        }
        if (req.body.content != null) {
          res.data.content = req.body.content
        }
      try {
        const updatedNews = await res.data.save()
        res.json(updatedNews)
      } catch (err) {
        res.status(400).json({ message: err.message })
      }
    })  

   // Deleting One
  router.delete('/v1/blogs/:id',getNews,async (req, res) => {
    
      try {
        await res.data.remove()
        res.json({ message: 'Deleted data' })
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
    })
// function to get single data
    async function getNews(req, res, next) {
      let data
      try {
        data = await news.findById(req.params.id)
        if (data == null) {
          return res.status(404).json({ message: 'Cannot find data' })
        }
      } catch (err) {
        return res.status(500).json({ message: err.message })
      }
      res.data = data
      next()
    }
    


  module.exports = router



