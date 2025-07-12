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

    // using ffmpeg to conver inputFilePath into a 360p video. 
    ffmpeg(inputFilePath)
        .outputOptions("-vf", "scale= -1:360") // saying we want video file to be 360p
        .on("end", () =>{                      // when this process finishes we give a status 200 and say "Processing finished successfully"
            res.status(200).send("Processing finished successfully.")
        })
        .on("error", (err) => {                // if an error occurs we console.log the error and send a status code of 500 along with a message 
            console.log(`An error occured: ${err.message}`);
            res.status(500).send(`Internal Server Error: ${err.message}`)
        })
        .save(outputFilePath);                 // if everything goes well we save the file to directory outputFilePath
});

app.listen(port, () => {
    console.log('Video processing service listening at http://localhost:' + port);
});

