// fungsi
// function volumekubus(a, b) {
//     var volume = a * a * a + b * b * b;
//     return volume;
// }
// var hasil = volumekubus(3, 4);
// console.log(hasil);

// recursive function

// function cetakangka(n) {
//     if (n === 0) return;
//     console.log(n);
//     cetakangka(n-1)
// }
// cetakangka(10)

// angka semakin berkurang

// ---------------------------
// ARRAY

var hari = ['minggu', ['senin', true, 23], 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'];
// console.log(hari[1][2]);

// menampilkan array bukan dengan objek menggunakan pengulangan
// for (i = 0; i < hari.length; i++) {
//     console.log(hari[i]);
// }

// method join
// console.log(hari.join (' '));

// method push, pop, shift, unshift
// console.log(hari.pop());
// console.log(hari.push ('weekend', 'holiday'));
// console.log(hari.shift());
// console.log(hari.unshift());
// console.log(hari.splice(1,0,'week'));


// object

var mahasiswa = {
    nama: 'novia',
    lulus: 2020,
    ips: [4.0, 3.9, 4.0, 3.6],
}