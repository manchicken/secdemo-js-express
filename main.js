/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/************************************************
 * I cannot say this enough. This is demo code. *
 * Please do not use this code for anything     *
 * other than education on what not to do.      *
 * I am using this code to test security tools  *
 * which scan code for vulnerabilities.         *
 ************************************************/

const express = require('express')
const app = express()
const mysql = require('mysql2/promise')

const port = 3001

// THE FOLLOWING ARE FAKE, BUT FOR EDUCATIONAL PURPOSES!
const DB_HOST = "localhost"
const DB_USER = "appuser"
const DB_PASSWORD = "apppassword"
const DB_NAME = "appdb"

const dbConn = async () => await mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  insecureAuth: true
})

app.get('/', (req, res) => res.send('OK'))

app.get('/key/:id', async (req, res) => {
  const db = await dbConn()

  const result = await db.query(`SELECT * FROM keys_and_values WHERE id=${req.params.id}`)

  console.log(result)
  res.json(result)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

