
// get the element of the preview field
const preview = document.getElementById('value-id');
// get all numbers
const numbers = document.querySelectorAll('.number');

numbers.forEach(number => {
    number.addEventListener('click', () => {
        if(preview.innerHTML <= 0){
            preview.innerHTML = `${number.innerHTML}`;
        }else {
            preview.innerHTML = `${preview.innerHTML}${number.innerHTML}`;
        }
    })
})

// ======== SIGN ========
const sign = document.querySelectorAll('.sign');
sign.forEach(signSymbol => {
    signSymbol.addEventListener('click', () => {
        if(preview.innerHTML > 0){
            preview.innerHTML = `${preview.innerHTML}${signSymbol.innerHTML}`;
        }else{
            preview.innerHTML = `${preview.innerHTML}`;
        }
    })
})

// ======== EQUAL SIGN ========
const equal = document.getElementById('equal');
equal.addEventListener('click', () => {
    try {
        preview.innerHTML = `${eval(preview.innerHTML)}`;
    } catch (error) {
        alert("Something wrong, Check input.")
    }
})

// ======== PERCENT SIGN ========
const percent = document.getElementById('percent');
percent.addEventListener('click', () => {
    preview.innerHTML = `${preview.innerHTML}%`;
})

// ======== CLEAR SIGN ========
const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    if(((preview.innerHTML).split('')).length > 0) {
        var list_of_values = (preview.innerHTML).split('');
        list_of_values.pop()
        preview.innerHTML = `${list_of_values.join('')}`;
    }else {
        preview.innerHTML = `0`;
    }
})

// ======== DELETE KEY ========
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if(key === "Backspace" || key === "Delete"){
        if(preview.innerHTML > 9) {
            var list_of_values = (preview.innerHTML).split('');
            list_of_values.pop()
            preview.innerHTML = `${list_of_values.join('')}`;
        }else {
            preview.innerHTML = `0`;
        }
    }
})

// ======== POINT SIGN ========
const point = document.getElementById('point')
point.addEventListener('click', () =>{
    preview.innerHTML = `${preview.innerHTML}.`;
})

// ======== CLEAR ALL SYMBOL ========
const clear_all = document.getElementById('clear_all');
clear_all.addEventListener('click', () => {
    preview.innerHTML = `0`;
})
