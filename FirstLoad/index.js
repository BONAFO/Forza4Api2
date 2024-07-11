const cars = require("./cars.json");
const { exist, mkdir, write } = require('../resorces');
const path = require("path");

const index = [0, 10];

(async() => {
    const path_main = path.join(__dirname, '../DB/cars/');

    if (!exist(path.join(__dirname, '../DB/'))) {
        await mkdir(path.join(__dirname, '../DB/'));
    }

    if (!exist(path.join(__dirname, '../DB/cars'))) {
        await mkdir(path.join(__dirname, '../DB/cars'));
    }

    for (let i = index[0]; i < index[1]; i++) {
        const car = cars[i];
        const invalids = '/:*?¿"<>|'.split("")
        invalids.map(inv => car.name = car.name.replaceAll(inv, ""))
        const folder_name = `${car.marca} - ${car.name}`;
        const url = path.join(__dirname, '../DB/cars/') + folder_name;





        if (!exist(url)) {
            await mkdir(url);

            const data = {
                "name": car.name,
                "id": i,
                "rally_lv": 0,
                "race_lv": 0,
                "special_lv": 0,
                "money": 0
            };
            const init_data = `const data = 
        ${JSON.stringify(data)}
        


        
        `

            await write(url + "/init.js", init_data)
            await write(url + "/init.json", JSON.stringify(data))
        }

        console.log(`CREATED ${car.name}`);
    }



})()