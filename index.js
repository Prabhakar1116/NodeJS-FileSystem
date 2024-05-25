import express from "express";
import fs from "fs";
import {format} from "date-fns"
import path from "path";

const app = express();
const port = 4000;

//middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
res.status(200).send("This is the main page to go to both endpoints add /create for 1st endpoint & /view for 2nd endpoint")
});


app.get("/create", (req,res)=>{
let today = format(new Date(), "dd-MM-yy-HH-mm-ss");
const file_path = `Time_Stamp/${today}.txt`;

fs.writeFileSync(file_path, `${today}`,"utf-8");
let data = fs.readFileSync(file_path, "utf-8");
res.status(200).send(data);
});


app.get("/read",(req,res)=>{
    const folder_path = "Time_Stamp";
    const files = fs.readdirSync(folder_path);
        const txt_files = [];
        
        files.forEach(file => {
            if (path.extname(file) === ".txt") {
                txt_files.push(file);
            }
        });

        res.status(200).send(txt_files);

})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
