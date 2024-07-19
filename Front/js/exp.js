const exp_calculations = (exp) => {

    // const;
    const seed = 25000;
    let lv = 0;
    let total = 0;

    let exprest = exp;
    let percent = 0;




    const calcular_entero = () => {

    }

    // +
    // -
    // *
    // /
    // /%
    // %


    do {

        const tolevel = calcular_decimal([seed, 'd*', lv + 1, 'pd', 'd*', .27, 'pd', 'd+', seed, 'pd', 'd/', 1.2, 'pe']);
        // const tolevel = '26458';
        // const tolevel = calcular_decimal([seed, 'd*', lv + 1, 'pd', 'd*', .27, 'pd', 'd+', seed, 'pd', 'd/', 1.2, 'pe']);
        // console.log('------------------------------------------');
        // total = sumar_enteros(total.toString(), tolevel);
        total = sumar_enteros(total.toString(), tolevel);


        // console.log(parseEntero(division_enteros(parseEntero(multiplicacion_enteros(parseEntero(exprest), 100)), tolevel).cociente));
        if (compare_Bi(exp, total)) {
            lv++
            exprest = parseEntero(resta_enteros(exprest, tolevel))
        } else {
            percent = calcular_decimal(['pe', exprest, '*', '100', 'pe', '/', tolevel, 'pe'])
            break
        }
        // if (total <= exp) {
        //     lv++
        //     exprest = parseEntero(resta_enteros(exprest, tolevel))
        // } else {
        //     percent = calcular_decimal(['pe', exprest, '*', '100', 'pe', '/', tolevel])
        //         // percent = Math.floor(exprest * 100 / tolevel)
        //     break
        // }




        // // console.log(compare_Bi(bt, ));
        // console.log('------------------------------------------');



        // let tolevel = (lv != 0) ? (Math.floor(((seed * (lv + 1) * 0.27) + seed) / 1.2)) : (seed);
        // total += tolevel
        //     // console.log((seed * (lv + 1) * 0.27) / 1.2);
        //     // const a = multiplicacion_decimales(seed.toString(), (lv + 1).toString());
        //     // console.log(parseEntero(division_decimales(parseDecimal(multiplicacion_decimales(parseDecimal(a), '0.27')), '1.2').cociente));



        // // console.log(Math.floor(((seed * (lv + 1) * 0.27) + seed)));
        // // console.log(multiplicacion_decimales(multiplicacion_decimales(seed.toString(), (lv + 1).toString()), '0.27'));




        // if (total <= exp) {
        //     lv++
        //     exprest -= tolevel
        // } else {
        //     percent = Math.floor(exprest * 100 / tolevel)
        //     break
        // }



    } while (true);




    return { lv, percent }

}

const change_value = (element, newvalue, start) => {

    const addAnimation = () => {
        element.classList.add('animate');
        setTimeout(() => {
            element.classList.remove('animate');
        }, 2000);
    }


    const observer = new MutationObserver(() => {
        addAnimation();
    });

    observer.observe(element, {
        attributes: true,
        attributeFilter: ['style'],
    });


    element.style.setProperty('--p', newvalue);
    text_animation(element, newvalue, start);
}



// CALCULAR EL % PARA EL TEMPORIZADOR
const calculate_percent = (element, txt) => {
    const start = element.textContent;

    if (parseInt(start) < parseInt(txt)) {
        return parseInt(txt) - parseInt(start)
    } else {
        return parseInt(txt)
    }
}

const text_animation = (element, txt, start) => {


    const timelimit = 2000;

    // const to_fill = calculate_percent(element, txt);
    // console.log("tf", txt);
    // const start = parseInt(element.textContent);

    const time = (txt == 0) ? (timelimit) : (timelimit / txt);
    let counter = 0;

    let interval = setInterval(() => {
        if (parseInt(counter) <= parseInt(txt)) {
            element.textContent = `${counter}%`;
            counter++
        } else {
            clearInterval(interval);

        }
    }, time);;

    element.textContent = `${txt}%`;
}