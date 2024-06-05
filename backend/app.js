const express = require('express')
const cors = require('cors')

const app = express()
const port = 4000

app.use(cors())
app.use(express.json())

app.post('/segitiga', (req, res) => {
    const angka = req.body.angka;
    const hasil = segitiga(angka);

    console.log(hasil)
    res.json({ hasil });
})

function segitiga(angka) {
    let hasil = '';
    const angkaStr = angka.toString();

    for (let i = 1; i <= angkaStr.length; i++) {
        let subStr = angkaStr.slice(i - 1, i);
        subStr = subStr + '0'.repeat(i - 1)
        hasil += subStr + '\n'
    }
    
    return hasil;
}


app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})