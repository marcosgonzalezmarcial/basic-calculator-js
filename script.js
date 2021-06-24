// SPRINT 3  - NIVEL 2


// -----------------------------

// Display
let display = document.getElementById('display');

// Array de botones
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(function (button) {
    button.addEventListener('click', calcBtn)
})

function calcBtn(e) {
    switch (e.target.innerText) {
        case 'C':
            display.innerText = '';
            break;
        case '=':
            try {
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = "Error"
            }
            break;
        case '←':
            if (display.innerText) {
                display.innerText = display.innerText.slice(0, -1);
            }
            break;
        default:
            display.innerText += e.target.innerText;
    }
}



// código ok
// buttons.map(function (button) {
//     button.addEventListener('click', function (e) {
//         switch (e.target.innerText) {
//             case 'C':
//                 display.innerText = '';
//                 break;
//             case '=':
//                 try {
//                     display.innerText = eval(display.innerText);
//                 } catch {
//                     display.innerText = "Error"
//                 }
//                 break;
//             case '←':
//                 if (display.innerText) {
//                     display.innerText = display.innerText.slice(0, -1);
//                 }
//                 break;
//             default:
//                 display.innerText += e.target.innerText;
//         }
//     })
// })



// buttons.map(button => {
//     button.addEventListener('click', (e) => {
//         switch (e.target.innerText) {
//             case 'C':
//                 display.innerText = '';
//                 break;
//             case '=':
//                 try {
//                     display.innerText = eval(display.innerText);
//                 } catch {
//                     display.innerText = "Error"
//                 }
//                 break;
//             case '←':
//                 if (display.innerText) {
//                     display.innerText = display.innerText.slice(0, -1);
//                 }
//                 break;
//             default:
//                 display.innerText += e.target.innerText;
//         }
//     });
// });



