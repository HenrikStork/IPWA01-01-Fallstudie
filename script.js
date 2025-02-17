
let btnWeltweit = document.getElementById('btnWeltweit');;
let btnEuropa = document.getElementById('btnEuropa');
let btnNordamerika = document.getElementById('btnNordamerika');
let btnAsien = document.getElementById('btnAsien');

let inputLand = document.getElementById('inputLand');
let inputUntern = document.getElementById('inputUntern');

let tableRows = document.querySelectorAll('tbody tr');

function bereinigeInput(input) {
    return input.replace(/[<>\/"'&]/g, '');
}

function resetTable() {
    for (let i = 0; i < tableRows.length; i++) {
        tableRows[i].style.display = '';
    }
}

function filterKontinent(Kontinent) {
    for (let i = 0; i < tableRows.length; i++) {
        let cellText = tableRows[i].cells[1].textContent.trim().toLowerCase();
        if (cellText === Kontinent.toLowerCase()) {
            tableRows[i].style.display = '';
        } else {
            tableRows[i].style.display = 'none';
        }
    }
}

function filterLand() {
    let landValue = bereinigeInput(inputLand.value.trim().toLowerCase());

    for (let i = 0; i < tableRows.length; i++) {
        let countryText = tableRows[i].cells[2].textContent.trim().toLowerCase();

        if (landValue === '') {
            tableRows[i].style.display = '';
        }

        else if (countryText.includes(landValue)) {
            tableRows[i].style.display = '';
        } else {
            tableRows[i].style.display = 'none';
        }
    }
}

function filterUntern() {
    let unternValue = bereinigeInput(inputUntern.value.trim().toLowerCase());

    for (let i = 0; i < tableRows.length; i++) {
        let companyText = tableRows[i].cells[3].textContent.trim().toLowerCase();


        if (unternValue === '') {
            tableRows[i].style.display = '';
        }

        else if (companyText.includes(unternValue)) {
            tableRows[i].style.display = '';
        } else {
            tableRows[i].style.display = 'none';
        }
    }
}

btnWeltweit.addEventListener('click', resetTable);
btnEuropa.addEventListener('click', () => filterKontinent('Europa'));
btnNordamerika.addEventListener('click', () => filterKontinent('Nordamerika'));
btnAsien.addEventListener('click', () => filterKontinent('Asien'));
inputLand.addEventListener('input', filterLand);
inputUntern.addEventListener('input', filterUntern);
