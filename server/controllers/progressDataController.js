import { progressModel } from "../db/schema/schema.js"

export const getProgressController = async (req,res)=>{
    const {date} = req.params
    try {
        const dateProgressData = await progressModel.findOne({date})
        console.log("iran")
        if (!dateProgressData) {
            
          return res.json({
            "Lesson" : "",
            "githubPush": false,
            "DSA":false,
            "applicationtoJob":false,
            "linkedInPost":false,
            "points":0,
            "date":date
        });
        }
        console.log(dateProgressData)
        res.json(dateProgressData);

      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

export const postProgressController = async (req, res) => {
    const { date } = req.params;
    
  
    try {
      let dateProgressData = await progressModel.findOne({ date });
      console.log("returned dateProgressData : ", dateProgressData)
      console.log(req.body)
  
      if (!dateProgressData) {
        dateProgressData = new progressModel({
          Lesson: '',
          githubPush: false,
          DSA: false,
          applicationtoJob: false,
          linkedInPost:false,
          points : 0,
          date,
        });
  
        await dateProgressData.save();
      }

      let score = 0;
  
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
      if (req.body.linkedInPost !== undefined) {
        dateProgressData.linkedInPost = req.body.linkedInPost;
      }
      

    if(req.body.Lesson) score +=50
    if(req.body.DSA) score += 100
    if(req.body.Github) score += 50
    if(req.body.linkedInPost) score += 100
    if(req.body.JobApplication) score += 50
      dateProgressData.points = score
  
      await dateProgressData.save();
  
      res.json(dateProgressData);
    } catch (error) {
      res.status(500).json({ message: error.message });
      console.log(error.message)
    }
  }

  export const getAllProgressController = async (req,res) => {
    const allProgress = await progressModel.find()
    res.send(allProgress)
  }