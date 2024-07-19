document.getElementById("back").onclick = () => {
    window.location.href = "./index.html";
}

const id = sessionStorage.getItem("car-id");

let found;

const first_deco =() => {
    const temp = localStorage.getItem("temp");
    let datafound;
    if(temp !=  null){
       const unziped = JSON.parse(unzip(temp))
       datafound = unziped.filter(dat => dat.id == id)[0];
       if(datafound == undefined){
        datafound = data.filter(dat => dat.id == id)[0];
        unziped.push(datafound)
        const coded = zip(unziped);
        localStorage.setItem('temp', coded)
       }
          
    }else{
        datafound = data.filter(dat => dat.id == id);
        const coded = zip(datafound);
        datafound = datafound[0]
        localStorage.setItem('temp', coded)
    }

  
    return datafound
}


found = first_deco()
document.getElementById("car-name").textContent = found.name;
console.log(found);

// if (localStorage.getItem("temp")) {
//     found = JSON.parse(localStorage.getItem("temp")).filter(dat => dat.id == id)[0];
// } else {
//     found = data.filter(dat => dat.id == id)[0];

// }

// found = data.filter(dat => dat.id == id)[0];

const params = [exp_calculations(found.rally_exp), exp_calculations(found.race_exp), exp_calculations(found.special_exp)];


document.getElementById("rally-lab").textContent = "RALLY-" + params[0].lv;




document.getElementById("race-lab").textContent = "RACE-" + params[1].lv;




document.getElementById("special-lab").textContent = "SPECIAL-" + params[2].lv;




change_value(document.getElementById("rally-percent"), params[0].percent, 0)
change_value(document.getElementById("race-percent"), params[1].percent, 0)
change_value(document.getElementById("special-percent"), params[2].percent, 0)


const covers = document.getElementsByClassName("cover");


for (let i = 0; i < covers.length; i++) {
    const element = covers[i]

    element.onclick = () => {
        Swal.fire({
            title: "Good job!",
            input: "number",


            text: "You clicked the button!",
            customClass: {
                popup: 'sw2-popup',
                cancelButton: "btn btn-danger",
                confirmButton: "btn btn-success",
            },
            showCancelButton: true,
            showDenyButton: false,
            showCancelButton: true,


        }).then((rest) => {
            if (rest.isConfirmed) {
                if (!isNaN(parseInt(rest.value))) {
                    const instance = element.getAttribute("data-id");

                    const exp = parseInt(found[`${instance}_exp`]) + parseInt(rest.value);
                    const start = parseInt(document.getElementById(`${instance}-percent`).textContent);
                    const newparams = exp_calculations(exp)
                    document.getElementById(`${instance}-lab`).textContent = instance.toUpperCase() + "-" + newparams.lv;
                    change_value(document.getElementById(`${instance}-percent`), newparams.percent, start)


                    found[`${instance}_exp`] = exp.toString();

                    const temp = JSON.parse(unzip(localStorage.getItem("temp")));

                    let index = temp.filter(dat => dat.id == id)[0];
                    index =temp.indexOf(index);

                    temp[index] = found;
                    
                    const zipped = zip(temp);
                    localStorage.setItem("temp", zipped)
                    // let foundsave = found;
                    // if (temp) {
                    //     foundsave = temp.filter(dat => dat.id == id)[0];
                    // }



                }
            }
        });
    }

}




// const decode =()=>{
//     // const data = localStorage.getItem("temp")
    
//     const 
// }


// encode()




// const codeEquiv = () => {
//     let coded = JSON.stringify(found);

//     equiv.map(code => {
//         coded = coded.replaceAll(code.d, code.c);
//     })


//     return coded
// }
// const decodeEquiv = (coded ="") => {

// }






// console.log(codeEquiv());



// function generarNumeroAleatorioConDigitos(numDigitos) {
//     // Generar un número aleatorio entre 1 y 9 (para evitar que comience con cero)
//     let numero = Math.floor(Math.random() * 9) + 1;

//     // Generar el resto de los dígitos
//     for (let i = 1; i < numDigitos; i++) {
//         numero = numero * 10 + Math.floor(Math.random() * 10);
//     }

//     return numero;
// }

// Ejemplo de uso: Generar un número aleatorio con 5 dígitos
// const numeroAleatorio = generarNumeroAleatorioConDigitos(5);
// console.log(numeroAleatorio); // Ejemplo de salida: 87429





// const repeat = (times, string) => {
//     return new Array(times + 1).join(string);
// }


// const divisor = () => {
//     const dSeed = 'qwertyuiopasdfghjklzxcvbnm'.split("");

//     dSeed.map((s, i) => {
//         let start = '1000';
//         start += repeat(i, '0');
//         console.log(parseInt(start));
//     })
// }






// const numeroBase = 1000000000000000;


// console.log(numeroBase);

// console.log("l", (numeroBase.toString()).length);

// // Datos de ejemplo a comprimir
// const data2 = "Hola, este es un ejemplo de texto para comprHola, este es un ejemplo de texto para comprimir con pako.js en JavaScript vanilla.imir con pako.jHola, este es un ejemplo de texto para comprimir con pako.js en JavaScript vanilla.s en JavaScript vanilla.HHola, este es un ejemplo de texto para comprimir con pako.js en JavaScript vanilla.ola, Hola, este es un ejemplo de texto para comprimir con pako.js en JavaScript vanilla.este es un ejemplo de texto para comprimir con pako.js en JavaScript vanilla.";

// // Comprimir los datos
// const compressedData = pako.gzip(data2);

// // Convertir los datos comprimidos a una representación base64 para facilitar el almacenamiento
// const compressedDataB64 = btoa(String.fromCharCode.apply(null, compressedData));

// console.log("Datos comprimidos en base64:", compressedDataB64.length);

// // Para descomprimir, primero convertimos de base64 a un array de bytes
// const compressedDataBytes = atob(compressedDataB64).split('').map(char => char.charCodeAt(0));

// // Descomprimir los datos
// const decompressedData = pako.ungzip(new Uint8Array(compressedDataBytes), { to: 'string' });

// console.log("Datos descomprimidos:", decompressedData.length);

// console.log(536825 / 2);


// console.log(((5 / 2).toString())[0] + "0");
// console.log();


// const num = '522545565549846445817423';
// const num2 = 336;

// const division_enteros = (dividendo, divisor) => {
//     let resto = "0";
//     let cociente = "";
//     let operando = "";
//     dividendo = dividendo.toString();

//     for (let i = 0; i < dividendo.length; i++) {
//         operando += dividendo[i];
//         if (parseInt(operando) >= divisor) {
//             operando = parseInt(operando);
//             cociente += (parseInt(operando / divisor)).toString();
//             resto = (operando % divisor);
//             operando = "" + resto;

//         } else {
//             cociente += "0"
//             resto = "" + operando;

//         }

//     }

//     return {
//         cociente: cociente,
//         resto: resto
//     }

// }




// const division_enteros_test = (a, b) => {
//     // console.log("COCIENTE", Math.floor(a / b));
//     // console.log("RESTO", Math.floor(a % b));
//     let cociente = "";
//     let resto = "";
//     let counter = 0;
//     let inter = setInterval(() => {
//         console.log('---------------------------------------');
//         console.log("OPERACION:", `${resto}${a[counter]} / ${b}`);
//         cociente += (Math.floor(parseInt(`${resto}${a[counter]}`) / b)).toString();
//         resto = parseInt(`${resto}${a[counter]}`) % b;
//         console.log("COCIENTE: ", cociente);
//         console.log("RESTO: ", resto);
//         counter++


//         console.log('---------------------------------------');
//         if (a.length == counter) {
//             clearInterval(inter)
//             console.log('---------------------------------------');
//             console.log("COMPROBACION:");
//             console.log(division_enteros(num, num2).cociente == cociente);
//             console.log('---------------------------------------');
//         }


//     }, 10);
// }


// let breaker = 2;
// do {
//     const result = division_enteros(num, breaker);
//     if (result.resto == 0) {
//         console.log(result);
//         break
//     }
//     breaker++
//     // console.log(result);
//     // breaker++
//     // console.log(breaker);
//     // if (breaker >= 100) {
//     //     break
//     // }
// } while (true);


// Ejemplo de JavaScript Vanilla para comprimir y descomprimir usando pako.js

// Función para comprimir un string usando pako.js
// function compressString(inputString) {
//     const byteArray = pako.deflate(inputString, { to: 'string' });
//     return btoa(String.fromCharCode.apply(null, byteArray));


// }

// // Función para descomprimir una cadena comprimida usando pako.js
// function decompressString(compressedBase64) {
//     // Decodificar la cadena base64
//     const decodedData = atob(compressedBase64);

//     // Convertir el string decodificado a un array de bytes
//     const byteCharacters = decodedData.split('').map(char => char.charCodeAt(0));
//     const byteArray = new Uint8Array(byteCharacters);

//     // Descomprimir el array de bytes UTF-8
//     const decompressed = pako.inflate(byteArray, { to: 'string' });

//     // Devolver la cadena descomprimida
//     return decompressed;
// }

// // Ejemplo de uso
// const originalString = '{ASDASD1 ASD : DS QAD123 }';
// console.log('Original:', originalString);

// const compressedBase64 = compressString(originalString);
// console.log('Comprimido y codificado en base64:', compressedBase64);

// const decompressedString = decompressString(compressedBase64);
// console.log('Descomprimido:', decompressedString);