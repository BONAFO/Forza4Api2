const fs = require("fs");
const path = require("path");
const { data } = require("../DB/db.cars");
const path_main = path.join(__dirname, '../DB/');
const usuario = "bruno";
const folders_to_search = [
    `C:/Users/${usuario}/Downloads/`
];

const extension = ".json";

const filename = 'forza_4_api_2_save';

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

(async() => {
    let newdata = undefined;
    for (let i = 0; i < folders_to_search.length; i++) {
        const url = folders_to_search[i] + filename + extension;
        try {
            const file = fs.readFileSync(url);
            newdata = JSON.parse(file.toString());
        } catch (error) {
            console.log(error.errno);
        }

    }

    newdata.map(d => {
        let index = -1;
        const found = data.filter((dt, i) => (dt.id == d.id) ? (index = i) : (""))[0];

        if (index != -1) {
            data[index] = d;
        }

        // let fileload = fs.readFileSync(path_main + 'cars/' + d.name + "/init.json");
        // fileload = JSON.parse(fileload.toString());

        fs.writeFileSync(path_main + 'cars/' + d.name + "/init.json", JSON.stringify(d));
    })

    fs.writeFileSync(path_main + "db.cars.js", parse_data_to_text())

    // const filedata = parse_data_to_text()

})()



// const directory = {
//     db: "../DB/cars/",
//     front_db: "../DB/"
// };

// // fs.readdirSync


// const parse_data_to_text = (data) => {
//     let db_file = `const data =[ \n`
//     data.map((d) => {
//         let txt = "{"
//         Object.keys(d).map(k => {
//             txt += `"${k}"  : "${d[k]}",`;
//         })
//         txt += "},\n";

//         db_file += txt
//     })
//     db_file += `];


//     try {
//     module.exports = {
//         data
//     };
//     } catch (error) {

//     }

//     `;


//     return db_file








// }

// const getCars = () => {
//     const dirs = fs.readdirSync(directory.db);
//     const cars = [];
//     for (let i = 0; i < dirs.length; i++) {
//         const dir = dirs[i];
//         let info = fs.readFileSync(directory.db + dir + "/init.json");
//         info = JSON.parse(info.toString());
//         cars.push(info)
//     }

//     const db_file = parse_data_to_text(cars)
//     fs.writeFileSync(directory.front_db + "/db.cars.js", db_file)
//         // console.log(data);
// }


// getCars()