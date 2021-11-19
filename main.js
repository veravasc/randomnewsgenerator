 function noticiaAppear() {
            let min = 3, // 3 segundos como mínimo
            max = 8; // 8 segundos como máximo
            let rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 1 - 10

            let Name = ['Brian', 'Olivia', 'Diane','Pedro', 'Matthew', 'Rachel'];
            let randName = Name[Math.floor(Math.random() * Name.length)];
            document.getElementById("rand_name").innerHTML= randName;

            let randNumber = Math.floor(Math.random() * 9) + 1; 
            document.getElementById("rand_number").innerHTML= randNumber;

            let Zeros = ['0', '00', '000'];
            let randZeros = Zeros[Math.floor(Math.random() * Zeros.length)];
            document.getElementById("rand_zeros").innerHTML= randZeros;

            let Product = ['ducks','rulers','deodorants','oranges','road stones', 'dragonflies'];
            let randProduct = Product[Math.floor(Math.random() * Product.length)];
            document.getElementById("rand_product").innerHTML= randProduct;
        
            setTimeout(noticiaAppear, rand * 1000);
        }
        noticiaAppear();  



        function checkTime(i) {
            if (i < 10) {
              i = "0" + i;
            }
            return i;
          }
          
          function startTime() {
            let today = new Date();
            let h = today.getHours();
            let m = today.getMinutes();
            //let s = today.getSeconds();
            // add a zero in front of numbers<10
            m = checkTime(m);
            //s = checkTime(s);
            document.getElementById('time').innerHTML = h + ":" + m;
            t = setTimeout(function() {
              startTime()
            }, 500);
          }
          startTime();