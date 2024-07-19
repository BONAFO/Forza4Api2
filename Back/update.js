const fs = require("fs");


const directory = {
    db: "../DB/cars/",
    front_db: "../DB/"
};

// fs.readdirSync


const parse_data_to_text = (data) => {
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

const getCars = () => {
    const dirs = fs.readdirSync(directory.db);
    const cars = [];
    for (let i = 0; i < dirs.length; i++) {
        const dir = dirs[i];
        let info = fs.readFileSync(directory.db + dir + "/init.json");
        info = JSON.parse(info.toString());
        cars.push(info)
    }

    const db_file = parse_data_to_text(cars)
    fs.writeFileSync(directory.front_db + "/db.cars.js", db_file)
        // console.log(data);
}


getCars()