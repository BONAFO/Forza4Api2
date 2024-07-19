const cars = require("./cars.json");
const { exist, mkdir, write, read } = require('../resorces');
const path = require("path");
const { log } = require("console");
let data = [];
try {
    const { data: datila } = require("../DB/db.cars");
    data = datila;
} catch (error) {
    console.log(error);
}

const index = [0, 10];

(async() => {
    const path_main = path.join(__dirname, '../DB/');



    if (!exist(path.join(__dirname, '../DB/'))) {
        await mkdir(path.join(__dirname, '../DB/'));
    }

    if (!exist(path.join(__dirname, '../DB/cars'))) {
        await mkdir(path.join(__dirname, '../DB/cars'));
    }


    let i = 0;
    let interval = setInterval(async() => {


        if (i < 10) {
            const car = cars[i];
            const invalids = '/:*?¿"<>|'.split("")
            invalids.map(inv => car.name = car.name.replaceAll(inv, ""))
            const folder_name = `${car.marca} - ${car.name}`;
            const url = path.join(__dirname, '../DB/cars/') + folder_name;


            const data = {
                "name": car.name,
                "id": i,
                "rally_lv": 0,
                "race_lv": 0,
                "special_lv": 0,
                "money": 0,
                "rally_exp": 0,
                "race_exp": 0,
                "special_exp": 0,

            };

            // let txt = "{"


            // Object.keys(data).map(k => {
            //     txt += `"${k}"  : "${data[k]}",`;
            // })


            // txt += "}";


            // db_file += `${txt},\n`

            prepare_db_file(data)


            if (!exist(url)) {
                await mkdir(url);




                const init_data = `const data = 
                ${JSON.stringify(data)}
            `

                await write(url + "/init.json", JSON.stringify(data))

            }
            console.log(`CREATED ${car.name}`);
        } else {
            clearInterval(interval)
                // db_file += `];`;
            await write(path_main + "db.cars.js", parse_data_to_text())
        }
        i++

    }, 500);



})()

//LAST INDEX



const prepare_db_file = (newdata) => {
    const found = data.filter(d => d.id == newdata.id)[0];
    if (found == undefined) {
        data.push(newdata)
    }
}

const parse_data_to_text = () => {
    let db_file = `const data =[ \n`
    data.map((d) => {
        let txt = "{"
        Object.keys(d).map(k => {
            txt += `"${k}"  : "${d[k]}",`;
        })
        txt += "},\n";

        db_file += txt
    })
    db_file += `];
    
    
    try {
    module.exports = {
        data
    };
    } catch (error) {

    }
    
    `;


    return db_file








}