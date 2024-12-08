const btnCamisa = document.getElementById('btnCamisa');
const btnPantalon = document.getElementById('btnPantalon');
const btnZapato = document.getElementById('btnZapato');

const sectionBtn = document.getElementById('secEdit');
const secEscoger = document.getElementById('pEscoger');
const secColor = document.getElementById('pColor');
const secPerso = document.getElementById('pPersonalizar')

const btnUser = document.getElementById('btnUser');
const btnHead = document.getElementById('btnHead');
const btnRopa = document.getElementById('btnRopa');

const btnMale = document.getElementById('male');
const btnFemale = document.getElementById('female');

const btnC1 = document.getElementById('btnC1');
const btnC2 = document.getElementById('btnC2');
const btnC3 = document.getElementById('btnC3');
const btnC4 = document.getElementById('btnC4');
const btnC5 = document.getElementById('btnC5');
const btnC6 = document.getElementById('btnC6');
const btnC7 = document.getElementById('btnC7');


const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btn10 = document.getElementById('btn10');
const btn11 = document.getElementById('btn11');
const btn12 = document.getElementById('btn12');
const btn13 = document.getElementById('btn13');
const btn14 = document.getElementById('btn14');
const btn15 = document.getElementById('btn15');
const btn16 = document.getElementById('btn16');
const btn17 = document.getElementById('btn17');
const btn18 = document.getElementById('btn18');


const cambiarP = (num) => {
    let tipo = num;

    let b1 = parseInt(btn1.getAttribute('src').split("/")[1].split(".")[0]);
    let b2 = parseInt(btn2.getAttribute('src').split("/")[1].split(".")[0]);
    let b3 = parseInt(btn3.getAttribute('src').split("/")[1].split(".")[0]);
    let b4 = parseInt(btn4.getAttribute('src').split("/")[1].split(".")[0]);
    let b5 = parseInt(btn5.getAttribute('src').split("/")[1].split(".")[0]);
    let b6 = parseInt(btn6.getAttribute('src').split("/")[1].split(".")[0]);
    let b7 = parseInt(btn7.getAttribute('src').split("/")[1].split(".")[0]);
    let b8 = parseInt(btn8.getAttribute('src').split("/")[1].split(".")[0]);
    let b9 = parseInt(btn9.getAttribute('src').split("/")[1].split(".")[0]);
    let b10 = parseInt(btn10.getAttribute('src').split("/")[1].split(".")[0]);
    let b11 = parseInt(btn11.getAttribute('src').split("/")[1].split(".")[0]);
    let b12 = parseInt(btn12.getAttribute('src').split("/")[1].split(".")[0]);
    let b13 = parseInt(btn13.getAttribute('src').split("/")[1].split(".")[0]);
    let b14 = parseInt(btn14.getAttribute('src').split("/")[1].split(".")[0]);
    let b15 = parseInt(btn15.getAttribute('src').split("/")[1].split(".")[0]);
    let b16 = parseInt(btn16.getAttribute('src').split("/")[1].split(".")[0]);
    let b17 = parseInt(btn17.getAttribute('src').split("/")[1].split(".")[0]);
    let b18 = parseInt(btn18.getAttribute('src').split("/")[1].split(".")[0]);
    

    console.log(tipo);
    console.log(b1);

    if((tipo==1&&b1==101)||(tipo==2&&b1==201)){
        b1-=100;
        b2-=100;
        b3-=100;
        b4-=100;
        b5-=100;
        b6-=100;
        b7-=100;
        b8-=100;
        b9-=100;
        b10-=100;
        b11-=100;
        b12-=100;
        b13-=100;
        b14-=100;
        b15-=100;
        b16-=100;
        b17-=100;
        b18-=100;
    }
    else if(tipo==1&&b1==201){
        b1-=200;
        b2-=200;
        b3-=200;
        b4-=200;
        b5-=200;
        b6-=200;
        b7-=200;
        b8-=200;
        b9-=200;
        b10-=200;
        b11-=200;
        b12-=200;
        b13-=200;
        b14-=200;
        b15-=200;
        b16-=200;
        b17-=200;
        b18-=200;
    }
    else if((tipo==2&&b1==1)||(tipo==3&&b1==101)){
        b1+=100;
        b2+=100;
        b3+=100;
        b4+=100;
        b5+=100;
        b6+=100;
        b7+=100;
        b8+=100;
        b9+=100;
        b10+=100;
        b11+=100;
        b12+=100;
        b13+=100;
        b14+=100;
        b15+=100;
        b16+=100;
        b17+=100;
        b18+=100;
    }
    else if(tipo==3&&b1==1){
        b1+=200;
        b2+=200;
        b3+=200;
        b4+=200;
        b5+=200;
        b6+=200;
        b7+=200;
        b8+=200;
        b9+=200;
        b10+=200;
        b11+=200;
        b12+=200;
        b13+=200;
        b14+=200;
        b15+=200;
        b16+=200;
        b17+=200;
        b18+=200;
    }


    btn1.setAttribute('src', 'ropa/'+b1+'.png')
    btn2.setAttribute('src', 'ropa/'+b2+'.png')
    btn3.setAttribute('src', 'ropa/'+b3+'.png')
    btn4.setAttribute('src', 'ropa/'+b4+'.png')
    btn5.setAttribute('src', 'ropa/'+b5+'.png')
    btn6.setAttribute('src', 'ropa/'+b6+'.png')
    btn7.setAttribute('src', 'ropa/'+b7+'.png')
    btn8.setAttribute('src', 'ropa/'+b8+'.png')
    btn9.setAttribute('src', 'ropa/'+b9+'.png')
    btn10.setAttribute('src', 'ropa/'+b10+'.png')
    btn11.setAttribute('src', 'ropa/'+b11+'.png')
    btn12.setAttribute('src', 'ropa/'+b12+'.png')
    btn13.setAttribute('src', 'ropa/'+b13+'.png')
    btn14.setAttribute('src', 'ropa/'+b14+'.png')
    btn15.setAttribute('src', 'ropa/'+b15+'.png')
    btn16.setAttribute('src', 'ropa/'+b16+'.png')
    btn17.setAttribute('src', 'ropa/'+b17+'.png')
    btn18.setAttribute('src', 'ropa/'+b18+'.png')
}


const press = (num) => {
    btnCamisa.setAttribute('class', 'btnContain');
    btnPantalon.setAttribute('class', 'btnContain');
    btnZapato.setAttribute('class', 'btnContain');

    if(num==1){
        btnCamisa.setAttribute('class', 'btnPress');
    }
    else if(num==2){
        btnPantalon.setAttribute('class', 'btnPress');
    }
    else if(num==3){
        btnZapato.setAttribute('class', 'btnPress');
    }
    else if(num==4){
        sectionBtn.setAttribute('class', 'borrar')
        secEscoger.setAttribute('class', 'borrar')
        secColor.setAttribute('class', 'borrar')
        secPerso.setAttribute('class', 'personalizar')

        btnUser.setAttribute('class', 'btnPress');
        btnHead.setAttribute('class', 'btnContain');
        btnRopa.setAttribute('class', 'btnContain');
    }
    else if(num==5){
        sectionBtn.setAttribute('class', 'borrar')
        secEscoger.setAttribute('class', 'borrar')
        secPerso.setAttribute('class', 'borrar')
        secColor.setAttribute('class', 'color')


        btnHead.setAttribute('class', 'btnPress');
        btnUser.setAttribute('class', 'btnContain');
        btnRopa.setAttribute('class', 'btnContain');
    }
    else if(num==6){
        sectionBtn.setAttribute('class', 'princi2')
        secColor.setAttribute('class', 'borrar')
        secPerso.setAttribute('class', 'borrar')
        secEscoger.setAttribute('class', 'escoger')

        btnRopa.setAttribute('class', 'btnPress');
        btnHead.setAttribute('class', 'btnContain');
        btnUser.setAttribute('class', 'btnContain');
    }
}

const pressColor = (num) => {
    btnC1.setAttribute('class', 'colores');
    btnC2.setAttribute('class', 'colores');
    btnC3.setAttribute('class', 'colores');
    btnC4.setAttribute('class', 'colores');
    btnC5.setAttribute('class', 'colores');
    btnC6.setAttribute('class', 'colores');
    btnC7.setAttribute('class', 'colores');
    if(num==1){
        btnC1.setAttribute('class', 'colorPress');
    }
    else if(num==2){
        btnC2.setAttribute('class', 'colorPress');
    }
    else if(num==3){
        btnC3.setAttribute('class', 'colorPress');
    }
    else if(num==4){
        btnC4.setAttribute('class', 'colorPress');
    }
    else if(num==5){
        btnC5.setAttribute('class', 'colorPress');
    }
    else if(num==6){
        btnC6.setAttribute('class', 'colorPress');
    }
    else if(num==7){
        btnC7.setAttribute('class', 'colorPress');
    }
}

const generoPress = (num) => {
    btnMale.setAttribute('class', 'btnContain')
    btnFemale.setAttribute('class', 'btnContain')
    if(num==1){
        btnMale.setAttribute('class', 'generoPress')
    }
    else if(num==2){
        btnFemale.setAttribute('class', 'generoPress')
    }
}