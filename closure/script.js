//======closure=======\\

let adah = (function() {    //function adalah value dari variabel adah
    let angka = 0;
    return function () {       //function anak direturn
        return ++angka;
    }
})();

// let angka = 4;      //maka angka didalam funtion tidak berubah dan console.log tetap menghasilkan function let adah

for (let i = 0; i <- 5; i++) {
    console.log(adah());    
}

//====akhir closure===\\


/*--------------arrow function----------------*/

let namaku = (nama, waktu) => `nama kamu ${nama} ${waktu}`;

console.log(namaku ('novia', 'malam'));

/*-----------akhir arrow function------------*/