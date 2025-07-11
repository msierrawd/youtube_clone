import express from "express";
import ffmpeg from "fluent-ffmpeg";

const app = express();  // initializing express by calling it 
const port = 3000;      // specifying which port we want to use 

app.post("/process-video" , (req, res) => {
    // inputVideoPath and outputVideoPath get path input/output of the video we're inputting
    const inputFilePath = req.body.inputFilePath;
    const outputFilePath = req.body.outputFilePath; 


});

app.listen(port, () => {
    console.log('Video processing service listening at http://localhost:' + port);
});