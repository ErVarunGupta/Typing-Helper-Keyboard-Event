const inputBtn = document.querySelector(".input");
const body = document.querySelector("body");
let btn47 = document.getElementById("caps-lock");

const clickBtnDown  = (e) =>{
    let result = "";
    if(e.type === "keydown"){
        result = "blue";
    }
    else if(e.type === "keyup"){
        result = "";
    }
    // console.log(e.key);
     console.log(e);
    //console.log(e.keyCode);
    switch (e.keyCode) {
        case 27:
            let btn1 = document.getElementById("esc");
            btn1.style.backgroundColor = `${result}`;
            break;
        case 91:
            let btn2 = document.getElementById("f1");
            btn2.style.backgroundColor = `${result}`;
            break;
        case 112:
            let btn02 = document.getElementById("f1");
            btn02.style.backgroundColor = `${result}`;
            break;
        case 255:
            let btn3 = document.getElementById("f2");
            btn3.style.backgroundColor = `${result}`;
            break;
        case 113:
            let btn03 = document.getElementById("f2");
            btn03.style.backgroundColor = `${result}`;
            break;
        case 114:
            let btn4 = document.getElementById("f3");
            btn4.style.backgroundColor = `${result}`;
            break;
        case 115:
            let btn5 = document.getElementById("f4");
            btn5.style.backgroundColor = `${result}`;
            break;
        case 116:
            let btn6 = document.getElementById("f5");
            btn6.style.backgroundColor = `${result}`;
            break;
        case 177:
            let btn7 = document.getElementById("f6");
            btn7.style.backgroundColor = `${result}`;
            break;
        case 117:
            let btn07 = document.getElementById("f6");
            btn07.style.backgroundColor = `${result}`;
            break;
        case 179:
            let btn8 = document.getElementById("f7");
            btn8.style.backgroundColor = `${result}`;
            break;
        case 118:
            let btn08 = document.getElementById("f7");
            btn08.style.backgroundColor = `${result}`;
            break;
        case 176:
            let btn9 = document.getElementById("f8");
            btn9.style.backgroundColor = `${result}`;
            break;
        case 119:
            let btn09 = document.getElementById("f8");
            btn09.style.backgroundColor = `${result}`;
            break;
        case 174:
            let btn10 = document.getElementById("f9");
            btn10.style.backgroundColor = `${result}`;
            break;
        case 120:
            let btn010 = document.getElementById("f9");
            btn010.style.backgroundColor = `${result}`;
            break;
        case 175:
            let btn11 = document.getElementById("f10");
            btn11.style.backgroundColor = `${result}`;
            break;
        case 121:
            let btn011 = document.getElementById("f10");
            btn011.style.backgroundColor = `${result}`;
            break;
        case 173:
            let btn12 = document.getElementById("f11");
            btn12.style.backgroundColor = `${result}`;
            break;
        case 122:
            let btn012 = document.getElementById("f11");
            btn012.style.backgroundColor = `${result}`;
            break;
        case 123:
            let btn13 = document.getElementById("f12");
            btn13.style.backgroundColor = `${result}`;
            break;
        case 45:
            let btn14 = document.getElementById("insert");
            btn14.style.backgroundColor = `${result}`;
            break;
        case 91:
            let btn15 = document.getElementById("prtSc");
            btn15.style.backgroundColor = `${result}`;
            break;
        case 46:
            let btn16 = document.getElementById("delete");
            btn16.style.backgroundColor = `${result}`;
            break;

        // Second row
        case 192:
            let btn17 = document.getElementById("tindle");
            btn17.style.backgroundColor = `${result}`;
            break;
        case 49:
            let btn18 = document.getElementById("one");
            btn18.style.backgroundColor = `${result}`;
            break;
        case 50:
            let btn19 = document.getElementById("two");
            btn19.style.backgroundColor = `${result}`;
            break;
        case 51:
            let btn20 = document.getElementById("three");
            btn20.style.backgroundColor = `${result}`;
            break;
        case 52:
            let btn21 = document.getElementById("four");
            btn21.style.backgroundColor = `${result}`;
            break;
        case 53:
            let btn22 = document.getElementById("five");
            btn22.style.backgroundColor = `${result}`;
            break;
        case 54:
            let btn23 = document.getElementById("six");
            btn23.style.backgroundColor = `${result}`;
            break;
        case 55:
            let btn24 = document.getElementById("seven");
            btn24.style.backgroundColor = `${result}`;
            break;
        case 56:
            let btn25 = document.getElementById("eight");
            btn25.style.backgroundColor = `${result}`;
            break;
        case 57:
            let btn26 = document.getElementById("nine");
            btn26.style.backgroundColor = `${result}`;
            break;
        case 48:
            let btn27 = document.getElementById("zero");
            btn27.style.backgroundColor = `${result}`;
            break;
        case 189:
            let btn28 = document.getElementById("minus");
            btn28.style.backgroundColor = `${result}`;
            break;
        case 187:
            let btn29 = document.getElementById("plus");
            btn29.style.backgroundColor = `${result}`;
            break;
        case 8:
            let btn30 = document.getElementById("backspace");
            btn30.style.backgroundColor = `${result}`;
            break;
        case 36:
            let btn31 = document.getElementById("home");
            btn31.style.backgroundColor = `${result}`;
            break;


// 3rd Row
        case 9:
            let btn32 = document.getElementById("tab");
            btn32.style.backgroundColor = `${result}`;
            break;
        case 81:
            let btn33 = document.getElementById("q");
            btn33.style.backgroundColor = `${result}`;
            break;
        case 87:
            let btn34 = document.getElementById("w");
            btn34.style.backgroundColor = `${result}`;
            break;
        case 69:
            let btn35 = document.getElementById("e");
            btn35.style.backgroundColor = `${result}`;
            break;
        case 82:
            let btn36 = document.getElementById("r");
            btn36.style.backgroundColor = `${result}`;
            break;
        case 84:
            let btn37 = document.getElementById("t");
            btn37.style.backgroundColor = `${result}`;
            break;
        case 89:
            let btn38 = document.getElementById("y");
            btn38.style.backgroundColor = `${result}`;
            break;
        case 85:
            let btn39 = document.getElementById("u");
            btn39.style.backgroundColor = `${result}`;
            break;
        case 73:
            let btn40 = document.getElementById("i");
            btn40.style.backgroundColor = `${result}`;
            break;
        case 79:
            let btn41 = document.getElementById("o");
            btn41.style.backgroundColor = `${result}`;
            break;
        case 80:
            let btn42 = document.getElementById("p");
            btn42.style.backgroundColor = `${result}`;
            break;
        case 219:
            let btn43 = document.getElementById("open-bracket");
            btn43.style.backgroundColor = `${result}`;
            break;
        case 221:
            let btn44 = document.getElementById("closed-bracket");
            btn44.style.backgroundColor = `${result}`;
            break;
        case 220:
            let btn45 = document.getElementById("backslash");
            btn45.style.backgroundColor = `${result}`;
            break;
        case 33:
            let btn46 = document.getElementById("pg-up");
            btn46.style.backgroundColor = `${result}`;
            break;
// 4th Row
        case 20:
            btn47.style.backgroundColor = `${result}`;
            break;
        case 65:
            let btn48 = document.getElementById("a");
            btn48.style.backgroundColor = `${result}`;
            break;
        case 83:
            let btn49 = document.getElementById("s");
            btn49.style.backgroundColor = `${result}`;
            break;
        case 68:
            let btn50 = document.getElementById("d");
            btn50.style.backgroundColor = `${result}`;
            break;
        case 70:
            let btn51 = document.getElementById("f");
            btn51.style.backgroundColor = `${result}`;
            break;
        case 71:
            let btn52 = document.getElementById("g");
            btn52.style.backgroundColor = `${result}`;
            break;
        case 72:
            let btn53 = document.getElementById("h");
            btn53.style.backgroundColor = `${result}`;
            break;
        case 74:
            let btn54 = document.getElementById("j");
            btn54.style.backgroundColor = `${result}`;
            break;
        case 75:
            let btn55 = document.getElementById("k");
            btn55.style.backgroundColor = `${result}`;
            break;
        case 76:
            let btn56 = document.getElementById("l");
            btn56.style.backgroundColor = `${result}`;
            break;
        case 186:
            let btn57 = document.getElementById("colone");
            btn57.style.backgroundColor = `${result}`;
            break;
        case 222:
            let btn58 = document.getElementById("inverted-comma");
            btn58.style.backgroundColor = `${result}`;
            break;
        case 13:
            let btn59 = document.getElementById("enter");
            btn59.style.backgroundColor = `${result}`;
            break;
        case 34:
            let btn60 = document.getElementById("pg-dn");
            btn60.style.backgroundColor = `${result}`;
            break;
//5th Row
        case 16:
            if(e.location === 1){
                let btn61 = document.getElementById("shift");
                btn61.style.backgroundColor = `${result}`;
            }
            break;
        case 90:
            let btn62 = document.getElementById("z");
            btn62.style.backgroundColor = `${result}`;
            break;
        case 88:
            let btn63 = document.getElementById("x");
            btn63.style.backgroundColor = `${result}`;
            break;
        case 67:
            let btn64 = document.getElementById("c");
            btn64.style.backgroundColor = `${result}`;
            break;
        case 86:
            let btn65 = document.getElementById("v");
            btn65.style.backgroundColor = `${result}`;
            break;
        case 66:
            let btn66 = document.getElementById("b");
            btn66.style.backgroundColor = `${result}`;
            break;
        case 78:
            let btn67 = document.getElementById("n");
            btn67.style.backgroundColor = `${result}`;
            break;
        case 77:
            let btn68 = document.getElementById("m");
            btn68.style.backgroundColor = `${result}`;
            break;
        case 188:
            let btn69 = document.getElementById("comma");
            btn69.style.backgroundColor = `${result}`;
            break;
        case 190:
            let btn70 = document.getElementById("dot");
            btn70.style.backgroundColor = `${result}`;
            break;
        case 191:
            let btn71 = document.getElementById("question");
            btn71.style.backgroundColor = `${result}`;
            break;
        
        case 35:
            let btn73 = document.getElementById("end");
            btn73.style.backgroundColor = `${result}`;
            break;

//6th Row
        case 17:
            if(e.location === 1){
            let btn74 = document.getElementById("ctrl1");
            btn74.style.backgroundColor = `${result}`;
            }
        break;
        case 100:
            let btn75 = document.getElementById("function");
            btn75.style.backgroundColor = `${result}`;
            break;
        
        case 18:
            if(e.location === 1){
                let btn77 = document.getElementById("alt1");
                btn77.style.backgroundColor = `${result}`;
            }
            break;
        case 91:
            let btn76 = document.getElementById("windows");
            btn76.style.backgroundColor = `${result}`;
            break;
        case 32:
            let btn78 = document.getElementById("spacebar");
            btn78.style.backgroundColor = `${result}`;
            break;
        
        case 93:
            let btn80 = document.getElementById("menu");
            btn80.style.backgroundColor = `${result}`;
            break;
        case 37:
            let btn82 = document.getElementById("left");
            btn82.style.backgroundColor = `${result}`;
            break;
        case 38:
            let btn83 = document.getElementById("up");
            btn83.style.backgroundColor = `${result}`;
            break;
        case 40:
            let btn84 = document.getElementById("down");
            btn84.style.backgroundColor = `${result}`;
            break;
        case 39:
            let btn85 = document.getElementById("right");
            btn85.style.backgroundColor = `${result}`;
            break;
        default:
           break;
    }
    if(e.location === 2 && e.keyCode === 17){
        let btn81 = document.getElementById("ctrl2");
        btn81.style.backgroundColor = `${result}`;
        }
    else if(e.location === 2 && e.keyCode === 18){
        let btn81 = document.getElementById("alt2");
        btn81.style.backgroundColor = `${result}`;
        }
    else if(e.location === 2 && e.keyCode === 16){
        let btn72 = document.getElementById("pause");
        btn72.style.backgroundColor = `${result}`;
    }
}



body.addEventListener("keydown", clickBtnDown);
body.addEventListener("keyup", clickBtnDown);


let divPoint = document.querySelector(".div-point");
divPoint.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
body.addEventListener("keydown",(e)=>{
    if(e.keyCode === 20){
        if(divPoint.style.backgroundColor === "rgba(255, 255, 255, 0.1)"){
            divPoint.style.backgroundColor = "white";
        }else if(divPoint.style.backgroundColor === "white"){
            divPoint.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        }
    }
})
