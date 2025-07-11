import express from "express";
import ffmpeg from "fluent-ffmpeg";

const app = express();  // initializing express by calling it 
const port = 3000;      // specifying which port we want to use 

app.get("/" , (req, res) => {
    res.send("Hello world!");
});

app.listen(port, () => {
    console.log('Video processing service listening at http://localhost:' + port);
});