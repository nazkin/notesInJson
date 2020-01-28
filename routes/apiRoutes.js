let notesData = require("../db/data");
const fs = require('fs');
module.exports = function(app) {

    app.get('/api/notes', (req,res)=>{
        fs.readFile('./db/data.json', 'utf8', (err, jsonNotes) => {
             if (err) {
                 console.log("File read failed:", err)
                 return
             }
             res.json(JSON.parse(jsonNotes));
        });
        // res.json(notesData);
    }); 
    app.post('/api/add', (req,res)=>{
        let jsonArr = [];
        notesData.push(req.body);
        jsonArr = [...notesData];
        fs.writeFile("./db/data.json", JSON.stringify(jsonArr), 'utf8', function (err) {
             if (err) {
                    console.log("An error occured while writing JSON Object to File.");
                    return console.log(err);
                }
            res.json(true);
        });
        
    });
    app.delete('/api/delete/:id', (req,res)=>{
        let arrJson = []
        for(let i = 0; i < notesData.length; i++){
            if(notesData[i].title == req.params.id){
                notesData.splice(i);
                // res.json(true);
            }
        }
        arrJson = [...notesData];
        fs.writeFile("./db/data.json", JSON.stringify(arrJson), 'utf8', function (err) {
            if (err) {
                   console.log("An error occured while writing JSON Object to File.");
                   return console.log(err);
               }
           res.json(true);
       });
        
    }); 
}