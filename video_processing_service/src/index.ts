import express from "express";
import ffmpeg from "fluent-ffmpeg";

const app = express();  // initializing express by calling it 
const port = 3000;      // specifying which port we want to use 

app.post("/process-video" , (req, res) => {
    // inputVideoPath and outputVideoPath get path input/output of the video we're inputting
    const inputFilePath = req.body.inputFilePath;
    const outputFilePath = req.body.outputFilePath; 

    // error checking inputFilePath and outputFilePath for when they're individually missing 
    // or when they're both missing
    if(!inputFilePath && !outputFilePath){
        res.status(400).send("Bad Request: Missing input and output file path");
    } 
    else if(!inputFilePath){
        res.status(400).send("Bad Request: Missing input file path.");
    }
    else if(!outputFilePath){
        res.status(400).send("Bad Request: Missing output file path.");
    }
});

app.listen(port, () => {
    console.log('Video processing service listening at http://localhost:' + port);
});

