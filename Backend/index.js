const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const funcRegex = require('./regex')
const funcSearchRegex = require('./searchRegex')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "dnadb",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/get', (req, res)=> {
    const sqlSelect = "SELECT * FROM jenis_penyakit;"
    db.query(sqlSelect, (err, result) =>{
        res.send(result);
    });
})

app.get('/api/getUpload', (req,res)=>{
    const titleDis = req.body.titleDis
    const textDis = req.body.textDis

    if (funcRegex(textDis) == false){
        res.send("Upload Failed. DNA Sequence can only filled by A G T C")
    } else if (funcRegex(textDis) == true){
        res.send("Upload new disease succesful")
    }
})

// app.post('/api/test', (req,res)=>{
//     const title = req.body.title
//     const body = req.body.body
//     const text = req.body.text

//     if (funcRegex(text) == false){
//         res.send("Upload Failed. DNA Sequence can only filled by A G T C")
//         console.log('fail');
//     } else if (funcRegex(text) == true){
//         const sqlInsert = "SELECT dna_penyusun;"
//         res.send("Upload new disease succesful")
//         db.query(sqlInsert, [titleDis, textDis], (err, result) =>{
//             console.log(result);
//         });
//     }
// })

app.post('/api/search', (req,res)=>{

    const search = req.body.search
    const [first, rest] = search.split(/\s+(.*)/);
    const search1 = first;
    const search2 = rest;
    if (funcSearchRegex(search) == 1){
        const sqlSelect = "SELECT * FROM hasil_prediksi WHERE tanggal_prediksi = ?;"
        db.query(sqlSelect, [search], (err, result) =>{
            if (err){
                res.send({err: err})
            } else {
                if (result.length > 0){
                    res.send(result);
                } else {
                    res.send({message: "There is no data match"})
                }
            }
        });
    }
    else if (funcSearchRegex(search) == 2){
        const sqlSelect = "SELECT * FROM hasil_prediksi WHERE penyakit_prediksi = ?;"
        db.query(sqlSelect, [search], (err, result) =>{
            if (err){
                res.send({err: err})
            } else {
                if (result.length > 0){
                    res.send(result);
                } else {
                    res.send({message: "There is no data match"})
                }
            }
        });
    }
    else if (funcSearchRegex(search) == 3){
        const sqlSelect = "SELECT * FROM hasil_prediksi WHERE tanggal_prediksi = ? AND penyakit_prediksi = ?;"
        // res.send({message: first});
        db.query(sqlSelect, [first, rest], (err, result) =>{
            if (err){
                res.send({err: err})
                console.log(err);
            } else {
                if (result.length > 0){
                    res.send(result);
                } else {
                    res.send({message: "There is no data match"})
                }
            }
        });
    }
    else if (funcSearchRegex(search) == 4){
        res.send({message: "Input Invalid. Use <Date> <Disease> or <Date> or <Disease>"})
    }

    

})

app.post("/api/upload", (req, res)=>{

    const titleDis = req.body.titleDis
    const textDis = req.body.textDis

    if (funcRegex(textDis) == false){
        res.send("Upload Failed. DNA Sequence can only filled by A G T C")
        console.log('fail');
    } else if (funcRegex(textDis) == true){
        const sqlInsert = "INSERT INTO jenis_penyakit (nama_penyakit, dna_penyusun) VALUES (?,?);"
        res.send("Upload new disease succesful")
        db.query(sqlInsert, [titleDis, textDis], (err, result) =>{
            console.log(result);
        });
    }
});

// app.get("/", (req, res) => {

//     const sqlInsert = "INSERT INTO jenis_penyakit (nama_penyakit, dna_penyusun) VALUES ('Toothache', 'AAAAAAAAAAAAAAAAAAAA');"
//     db.query(sqlInsert, (err, result) =>{
//         if (err){
//             // throw err;
//             res.send(err.message)
//         } else if (result){
//             res.send("no")
//         }

//     });

// });

app.listen(3001, () =>{
    console.log("running on port 3001")
});