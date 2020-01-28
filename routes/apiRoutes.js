const notesData = require("../db/data");
module.exports = function(app) {

    app.get('/api/notes', (req,res)=>{
        res.json(notesData);
    }); 
    app.post('/api/add', (req,res)=>{
        notesDate = req.body;
        res.json(true);
    });
    app.delete('/api/delete', (req,res)=>{
        res.send("Note deleted homie");
    }); 
}