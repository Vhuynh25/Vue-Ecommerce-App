const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const bcrypt = require('bcrypt')
const cors = require('cors')
const db = new sqlite3.Database(
    "./database/commerce.db", 
    (err) => 
{
    if (err)
        console.log(err)
})

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/products', function (req, res)  {
    if (req.query.id == null)
    {
        db.all("SELECT * FROM products", (err, results) => 
        {
            if (err)
            {
                console.log(err)
                res.sendStatus(404)
            }
            else 
                res.send(results)
        })
    }
    else 
    {
        db.get("SELECT * FROM products WHERE id = ?", req.query.id, (err, row) => 
        {
            if (err)
            {
                console.log(err)
                res.sendStatus(404)
            }
            else 
                res.send(row)
            })
    }
});

app.post('/users', function (req, res)  {
    const rounds = 10;
    bcrypt.hash(req.query.pass, rounds, (err, hash) => 
    {
        db.run("INSERT INTO users (EMAIL, HASHEDPASSWORD, USERNAME) VALUES (?, ?, ?)", 
        [req.query.email, hash, req.query.username], 
        (err) => 
        {
            if (err)
            {
                console.log(err)
                res.sendStatus(404)
            }
        })
    })
});

app.get('/users', function (req, res)  {
    db.get("SELECT * FROM users WHERE EMAIL=?", req.query.email,
        (err, row) => 
        {
            if (err || row === null)
            {
                console.log(row + " " + err)
                res.sendStatus(404)
            }
            else 
                bcrypt.compare(req.query.pass, row.HASHEDPASSWORD,
                    (err, same) => 
                    {
                        if (err)
                        {
                            console.log(err)
                        }
                        else if (same)
                        {
                            res.send(row)
                        }
                        else 
                        {
                            console.log(row)
                            res.sendStatus(404)
                        }
                    })
        }
    )
});


app.listen(port);