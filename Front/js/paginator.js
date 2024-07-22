let max = 0;

const paginate_content = () => {
    let AP = parseInt(sessionStorage.getItem("actual-page")) || 0
    sessionStorage.setItem("actual-page", AP)
    return cards_data.slice(paginator_config.perpage * AP, paginator_config.perpage * (AP + 1))

}


const update_table = (search) => {
    return data.filter(
        fil =>
        fil.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())

    );
}

const disable_paginator_btn = (prev, next) => {

    prev = document.getElementById(prev);
    next = document.getElementById(next);
    let AP = parseInt(sessionStorage.getItem("actual-page"))
    if (AP == 0) {
        prev.disabled = true;
        prev.style.opacity = .8;

    } else {
        prev.disabled = false;
        prev.style.opacity = 1;

    }
    if (AP == max - 1) {
        next.disabled = true;
        next.style.opacity = .8;
    } else {
        next.disabled = false;
        next.style.opacity = 1;
    }

}
const paginator_btns_colors = () => {


    let AP = parseInt(sessionStorage.getItem("actual-page"))

    for (let i = 0; i < max; i++) {
        document.getElementById(`btn-${i }`).className = document.getElementById(`btn-${AP}`).className.replace(' pag-selected', "");


    }



    document.getElementById(`btn-${AP }`).className += ' pag-selected';
    // for (let i = 0; i < btns.length; i++) {
    //     btns[i].className = btns[i].className.replace(' btn-page');

    // }
    // button.id = `btn-${i}`;
}

const build_paginator = () => {

    const paginator = document.getElementById("paginator-pages")
    paginator.textContent = "";
    const Tpages = Math.ceil(cards_data.length / paginator_config.perpage);;

    for (let i = 1; i <= Tpages; i++) {
        const button = cre("button");
        button.className = "btn-pag btn-page";

        button.textContent = i;

        let AP = parseInt(sessionStorage.getItem("actual-page"))
        if (AP == i - 1) {
            button.className += ' pag-selected';
        }
        button.id = `btn-${i -1 }`;

        button.onclick = () => {

            // if (AP != i - 1) {

            // }else{

            // }


            sessionStorage.setItem("actual-page", i - 1)

            const table_content = paginate_content(cards_data)
            build_table(table_content)


            paginator_btns_colors()
            disable_paginator_btn('paginator-prev', 'paginator-next')
        }

        paginator.append(button)

    }
    max = Tpages;
    disable_paginator_btn('paginator-prev', 'paginator-next')
}




document.getElementById("search").oninput = (e) => {

    sessionStorage.removeItem('actual-page')
    const filted = update_table(e.target.value);
    cards_data = filted;

    const table_content = paginate_content()
    build_paginator();
    build_table(table_content)

    // build_paginator(update_table(e.target.value))

}



document.getElementById("paginator-prev").onclick = () => {
    let AP = parseInt(sessionStorage.getItem("actual-page"))
    AP--
    if (AP != -1) {
        sessionStorage.setItem("actual-page", AP)
    }
    const table_content = paginate_content(cards_data)
    build_table(table_content)
    disable_paginator_btn('paginator-prev', 'paginator-next')
    paginator_btns_colors()
}

document.getElementById("paginator-next").onclick = () => {
    let AP = parseInt(sessionStorage.getItem("actual-page"))
    AP++
    if (AP <= max - 1) {
        sessionStorage.setItem("actual-page", AP)
    }
    const table_content = paginate_content(cards_data)
    build_table(table_content)
    disable_paginator_btn('paginator-prev', 'paginator-next')
    paginator_btns_colors()
}