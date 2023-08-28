import express, { Router } from 'express'
import {progressModel} from '../db/schema/schema.js'

const routes = express.Router()


export const getProgress =  routes.get('/:date',async (req,res)=>{
    const {date} = req.params
    console.log(date)
    try {
        const dateProgressData = await progressModel.findOne({date})
    
        if (!dateProgressData) {
          return res.json({
            "Lesson" : "",
            "githubPush": false,
            "DSA":false,
            "applicationtoJob":false,
            "date":date
        });
        }
        console.log(dateProgressData)
        res.json(dateProgressData);

      } catch (error) {
        res.status(500).json({ message: 'Error fetching data' });
      }
})

export const postProgress = routes.post('/:date', async (req, res) => {
    const { date } = req.params;
  
    try {
      let dateProgressData = await progressModel.findOne({ date });
      console.log("returned dateProgressData : ", dateProgressData)
      console.log(req.body)
  
      if (!dateProgressData) {
        dateProgressData = new progressModel({
          Lesson: 'N',
          githubPush: false,
          DSA: false,
          applicationtoJob: false,
          date,
        });
  
        await dateProgressData.save();
      }

      
  
      // Update data based on the request body
      if (req.body.Lesson !== undefined) {
        dateProgressData.Lesson = req.body.Lesson;
      }
      if (req.body.Github !== undefined) {
        dateProgressData.githubPush = req.body.Github;
      }
      if (req.body.DSA !== undefined) {
        dateProgressData.DSA = req.body.DSA;
      }
      if (req.body.JobApplication !== undefined) {
        dateProgressData.applicationtoJob = req.body.JobApplication;
      }
  
      await dateProgressData.save();
  
      res.json(dateProgressData);
    } catch (error) {
      res.status(500).json({ message: error.message });
      console.log(error.message)
    }
  })


export default routes