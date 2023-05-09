//import module biodata.js
const dataBiodata = require('./biodata')


// Memanggil fungsi dataBiodata dan menyimpan hasilnya pada variabel myBiodata
// Fungsi dataBiodata akan menerima empat argumen: name, birthPlace, birthDate, dan address.

//mengganti nilai dari masing-masing argumen sesuai dengan biodata Anda sendiri.
const myBiodata = dataBiodata('Nurdin','Karawang', '01 September 1996', 'Cibalongsari Klari-Karawang');

// Menampilkan properti-properti dari objek biodata yang dikembalikan oleh fungsi biodata.
console.log("Nama: " + myBiodata.name);
console.log("Tempat Lahir: " + myBiodata.birthPlace);
console.log("Tanggal Lahir: " + myBiodata.birthDate);
console.log("Alamat: " + myBiodata.address);


//Bagian output yang akan di hasilkan di Browser
const http = require('http')

const server = http.createServer((req, res) => {
    // set header respons HTTP
    res.writeHead(200, {'Content-Type': 'text/html'})

    const output = `
    <html>
      <head>
        <title>Biodata</title>
      </head>
      <body>
        <ul>
          <li>Nama: ${myBiodata.name}</li>
          <li>Tempat Lahir: ${myBiodata.birthPlace}</li>
          <li>Tanggal Lahir: ${myBiodata.birthDate}</li>
          <li>Alamat: ${myBiodata.address}</li>
        </ul>
      </body>
    </html>
  `

  // kirim teks output ke browser
  res.write(output)
  res.end()
})

// jalankan server pada port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/')
})