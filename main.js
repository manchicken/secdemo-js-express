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

const port = 3001
app.get('/', (req, res) => res.send('OK'))
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

