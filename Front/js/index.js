//  CREATING THE TABLE

const BASEURL = "../DB/cars/";
const cre = (element) => {
    return document.createElement(element)
}


let cards_data = [];
sessionStorage.removeItem("car-id")


let clearner = [];

const build_stats = (id, value, stat) => {
    const div1 = cre("div");
    const div2 = cre("div");
    const lb1 = cre("label");
    const div3 = cre("div");
    const div4 = cre("div");

    div1.style.width = "fit-content";
    div1.style.marginLeft = "5%";
    div2.className = "w-100 text-center";
    lb1.className = "tcwh";

    div3.textContent = value + "%";
    lb1.textContent = stat;

    div3.id = id;

    div1.className = "d-inline-block";

    div1.append(div2)
    div2.append(lb1)
    div1.append(cre("br"))
    div1.append(div3)
    div1.append(div4)

    div3.className = 'pie no-round animate tcwh';
    div4.className = 'pie no-round animate tcwh';


    div3.style.setProperty('--c', "#7ab0f1");
    div3.style.setProperty('--b', "15px");


    div4.style.position = "absolute";
    div4.style.marginLeft = "-9.7rem";

    div3.style.zIndex = 100;
    div4.style.zIndex = 99;


    div4.style.setProperty('--c', "rgb(226, 78, 78)");
    div4.style.setProperty('--b', "15px");

    div3.style.setProperty('--p', value);
    div4.style.setProperty('--p', 100);
    // console.log(value);
    text_animation(div3, value, 0);

    return div1
}



const build_content_table = (cars) => {
    const table = document.getElementById("cars");


    let unziped

    try {
        unziped = unzip(localStorage.getItem("temp"));

        if (unziped) {
            unziped = JSON.parse(unziped);
        } else {
            unziped = [];
        }

    } catch (error) {
        unziped = [];
    }

    cars.map(dat => {

        const found = unziped.filter(d => d.id == dat.id)[0];
        if (found) {
            dat = found;
        }
        const tr = cre("tr");
        const td1 = cre("td");
        td1.className = "td1";
        const div1 = cre("div");
        div1.className = "div1 text-center";
        const lb1 = cre("label");
        lb1.className = "tcwh";
        lb1.textContent = dat.name;

        div1.append(lb1)
        td1.append(div1)
        td1.append(cre("br"))

        const img1 = cre('img')
        img1.className = "w-100";
        img1.src = BASEURL + dat.name + "/" + "img.png" || '../media/noimg.jpg';
        img1.onerror = () => {
            img1.src = './media/noimg.jpg';
        }
        td1.append(img1)




        const td2 = cre("td");
        td2.className = "td2 text-center";


        const params = [exp_calculations(dat.rally_exp), exp_calculations(dat.race_exp), exp_calculations(dat.special_exp)];
        // console.log(params);
        const rally_stats = build_stats(`${dat.id}-rally`, params[0].percent, `RALLY - LV: ${params[0].lv}`);
        td2.append(rally_stats)

        const race_stats = build_stats(`${dat.id}-rally`, params[1].percent, `RACE - LV: ${params[1].lv}`);
        td2.append(race_stats)

        const special_stats = build_stats(`${dat.id}-rally`, params[2].percent, `SPECIAL - LV: ${params[2].lv}`);
        td2.append(special_stats)

        const td3 = cre("td");
        const button1 = cre("button");
        button1.textContent = "PLAY";
        button1.className = "play-btn";
        button1.onclick = () => {
            sessionStorage.setItem("car-id", dat.id)
            window.location.href = "./car.html";
        }

        td3.className = "td3";
        td3.append(button1);

        const separator = cre("tr");
        separator.className = "separator";

        const separator2 = cre("tr");
        separator2.className = "separator";

        table.append(separator)
        table.append(tr)
        tr.append(td1)
        tr.append(td2)
        tr.append(td3)
        table.append(separator2)

        // const tr =cre("");
    })
}

const build_table = (cars) => {
    const table = document.getElementById("cars");

    clearTimeout(clearner[0])
    clearTimeout(clearner[1])

    table.style.opacity = 0;
    clearner[1] = setTimeout(() => {
        table.textContent = "";
        build_content_table(cars)
    }, 300);



    clearner[0] = setTimeout(() => {
        table.style.opacity = 1;
    }, 500);
}





(() => {
    cards_data = data;
    const table_content = paginate_content()
    build_table(table_content)
    build_paginator()
})()