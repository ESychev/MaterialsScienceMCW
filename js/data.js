var test = "Умножение";
var peremeshat_voprosi = "да";
var vopros_1 = "Степень заполнения объёма порами материала называется?";
var vopros_2 = "Назовите способность материала впитывать и удерживать воду";
var vopros_3 = "Способность насыщенного водой материала выдерживать многократное замораживания и оттаивание без признаков разрушения";
var vopros_4 = "Назовите свойство материала пропускать тепло через свою толщину";
var vopros_5 = "Назовите свойство материала противостоять длительному воздействию высоких температур не деформируясь и не расплавляясь";
var vopros_6 = "Назовите свойство материала не разрушаться от воздействия внешних физических, химических и биологических факторов";
var vopros_7 = "Назовите свойство материала сохранять свою структуру при воздействии кислот";
var vopros_8 = "Способность материала сопротивляться разрушению под действием напряжений, возникающих от нагрузок? ";
var vopros_9 = "Назовите свойство материалов восстанавливать свою первоначальную форму и размер после снятия нагрузки ";
var vopros_10 = "Назовите свойство материала уменьшаться в объеме и массе под действием истирающего усилия ";
var vopros_11 = "Назовите способность материала противостоять воздействию на него сил трения от движущихся предметов. Она важна для материалов, используемых для покрытий полов, дорог и т.д. ";
var vopros_12 = "Назовите самопроизвольное разрушение твердых тел, которое вызывается химическими и электрохимическими процессами, протекающими в них при воздействии с внешней средой. ";
var vopros_13 = "Способность соединяться с другой поверхностью. Данное свойство характеризуется показателем прочности и схватки между потенциальными материалами. Эти данные очень важны при образовании бетона, клееных деталей.";
var vopros_14 = "Разрушение материалов под действием живых организмов (грибков, микробов) называется? ";
var vopros_15 = "Назовите термин. в какой степени материал проводит сквозь свою толщу звук. Зависит от массы материала и его строения. Материал тем меньше проводит звук, чем больше его масса.";
var pr_otv_zadachi_1 = "5AVCVCA=="; 
var pr_otv_zadachi_2 = "408+8+U9U=";
var pr_otv_zadachi_3 = "5Ac+Y+4+ZM";
var pr_otv_zadachi_4 = "U/5R4+ZM";
var pr_otv_zadachi_5 = "c9c/Q9VCCA=";
var pr_otv_zadachi_6 = "1C4+Q+w55Bw=";
var pr_otv_zadachi_7 = "xB5CVC06VCA==";
var pr_otv_zadachi_8 = "Q+0+ZM";
var pr_otv_zadachi_9 = "OTY=";
var pr_otv_zadachi_10 = "MTY3";
var pr_otv_zadachi_11 = "MzI5";
var pr_otv_zadachi_12 = "MjUz";
var pr_otv_zadachi_13 = "MjQy";
var pr_otv_zadachi_14 = "Mzk2";
var pr_otv_zadachi_15 = "MzQy";

document.addEventListener('DOMContentLoaded', function(){

    voprosi = [[vopros_1,pr_otv_zadachi_1],[vopros_2,pr_otv_zadachi_2],[vopros_3,pr_otv_zadachi_3],[vopros_4,pr_otv_zadachi_4],[vopros_5,pr_otv_zadachi_5],[vopros_6,pr_otv_zadachi_6],[vopros_7,pr_otv_zadachi_7],[vopros_8,pr_otv_zadachi_8],[vopros_9,pr_otv_zadachi_9],[vopros_10,pr_otv_zadachi_10],[vopros_11,pr_otv_zadachi_11],[vopros_12,pr_otv_zadachi_12],[vopros_13,pr_otv_zadachi_13],[vopros_14,pr_otv_zadachi_14],[vopros_15,pr_otv_zadachi_15]];
    if(peremeshat_voprosi == "да"){
        voprosi = peremeshat_vse_voprosi(voprosi);
    }
    document.getElementById('v_1').innerHTML = voprosi[0][0];
    document.getElementById('v_2').innerHTML = voprosi[1][0];
    document.getElementById('v_3').innerHTML = voprosi[2][0];
    document.getElementById('v_4').innerHTML = voprosi[3][0];
    document.getElementById('v_5').innerHTML = voprosi[4][0];
    document.getElementById('v_6').innerHTML = voprosi[5][0];
    document.getElementById('v_7').innerHTML = voprosi[6][0];
    document.getElementById('v_8').innerHTML = voprosi[7][0];
    document.getElementById('v_9').innerHTML = voprosi[8][0];
    document.getElementById('v_10').innerHTML = voprosi[9][0];
    document.getElementById('v_11').innerHTML = voprosi[10][0];
    document.getElementById('v_12').innerHTML = voprosi[11][0];
    document.getElementById('v_13').innerHTML = voprosi[12][0];
    document.getElementById('v_14').innerHTML = voprosi[13][0];
    document.getElementById('v_15').innerHTML = voprosi[14][0];
});
function sled_vopr(){
    if(document.getElementById('vopros14').style.display == "block"){
        document.getElementById('vopros14').style.display = "none";
        document.getElementById('vopros15').style.display = "block";
        document.getElementById('kn_sl').style.display = "none";
        document.getElementById('kn_pr').style.display = "block";
    }
    if(document.getElementById('vopros13').style.display == "block"){
        document.getElementById('vopros13').style.display = "none";
        document.getElementById('vopros14').style.display = "block";
    }
    if(document.getElementById('vopros12').style.display == "block"){
        document.getElementById('vopros12').style.display = "none";
        document.getElementById('vopros13').style.display = "block";
    }
    if(document.getElementById('vopros11').style.display == "block"){
        document.getElementById('vopros11').style.display = "none";
        document.getElementById('vopros12').style.display = "block";
    }
    if(document.getElementById('vopros10').style.display == "block"){
        document.getElementById('vopros10').style.display = "none";
        document.getElementById('vopros11').style.display = "block";
    }
    if(document.getElementById('vopros9').style.display == "block"){
        document.getElementById('vopros9').style.display = "none";
        document.getElementById('vopros10').style.display = "block";
    }
    if(document.getElementById('vopros8').style.display == "block"){
        document.getElementById('vopros8').style.display = "none";
        document.getElementById('vopros9').style.display = "block";
    }
    if(document.getElementById('vopros7').style.display == "block"){
        document.getElementById('vopros7').style.display = "none";
        document.getElementById('vopros8').style.display = "block";
    }
    if(document.getElementById('vopros6').style.display == "block"){
        document.getElementById('vopros6').style.display = "none";
        document.getElementById('vopros7').style.display = "block";
    }
    if(document.getElementById('vopros5').style.display == "block"){
        document.getElementById('vopros5').style.display = "none";
        document.getElementById('vopros6').style.display = "block";
    }
    if(document.getElementById('vopros4').style.display == "block"){
        document.getElementById('vopros4').style.display = "none";
        document.getElementById('vopros5').style.display = "block";
    }
    if(document.getElementById('vopros3').style.display == "block"){
        document.getElementById('vopros3').style.display = "none";
        document.getElementById('vopros4').style.display = "block";
    }
    if(document.getElementById('vopros2').style.display == "block"){
        document.getElementById('vopros2').style.display = "none";
        document.getElementById('vopros3').style.display = "block";
    }
    if(document.getElementById('vopros1').style.display == "block"){
        document.getElementById('vopros1').style.display = "none";
        document.getElementById('vopros2').style.display = "block";
    }
}
function proverit(){
otv_uch_1 = document.getElementById('z_1').value;
otv_ucgenika_1 = otv_uch_1;
otv_uch_1 = kodirov(otv_uch_1);
otv_uch_2 = document.getElementById('z_2').value;
otv_ucgenika_2 = otv_uch_2;
otv_uch_2 = kodirov(otv_uch_2);
otv_uch_3 = document.getElementById('z_3').value;
otv_ucgenika_3 = otv_uch_3;
otv_uch_3 = kodirov(otv_uch_3);
otv_uch_4 = document.getElementById('z_4').value;
otv_ucgenika_4 = otv_uch_4;
otv_uch_4 = kodirov(otv_uch_4);
otv_uch_5 = document.getElementById('z_5').value;
otv_ucgenika_5 = otv_uch_5;
otv_uch_5 = kodirov(otv_uch_5);
otv_uch_6 = document.getElementById('z_6').value;
otv_ucgenika_6 = otv_uch_6;
otv_uch_6 = kodirov(otv_uch_6);
otv_uch_7 = document.getElementById('z_7').value;
otv_ucgenika_7 = otv_uch_7;
otv_uch_7 = kodirov(otv_uch_7);
otv_uch_8 = document.getElementById('z_8').value;
otv_ucgenika_8 = otv_uch_8;
otv_uch_8 = kodirov(otv_uch_8);
otv_uch_9 = document.getElementById('z_9').value;
otv_ucgenika_9 = otv_uch_9;
otv_uch_9 = kodirov(otv_uch_9);
otv_uch_10 = document.getElementById('z_10').value;
otv_ucgenika_10 = otv_uch_10;
otv_uch_10 = kodirov(otv_uch_10);
otv_uch_11 = document.getElementById('z_11').value;
otv_ucgenika_11 = otv_uch_11;
otv_uch_11 = kodirov(otv_uch_11);
otv_uch_12 = document.getElementById('z_12').value;
otv_ucgenika_12 = otv_uch_12;
otv_uch_12 = kodirov(otv_uch_12);
otv_uch_13 = document.getElementById('z_13').value;
otv_ucgenika_13 = otv_uch_13;
otv_uch_13 = kodirov(otv_uch_13);
otv_uch_14 = document.getElementById('z_14').value;
otv_ucgenika_14 = otv_uch_14;
otv_uch_14 = kodirov(otv_uch_14);
otv_uch_15 = document.getElementById('z_15').value;
otv_ucgenika_15 = otv_uch_15;
otv_uch_15 = kodirov(otv_uch_15);
ball = 0;
document.getElementById('vopros15').style.display = "none";
document.getElementById('kn_pr').style.display = "none";
otveti = "<table class='table'><tr class='table-active'><td>№</td><td>Вопрос</td><td>Ответ</td></tr>";
if(otv_uch_1 == voprosi[0][1]){
    ball +=1;
    otveti += "<tr class='table-success'><td>1</td><td>"+voprosi[0][0]+"</td><td>Вы ответили верно. Ваш ответ: "+otv_ucgenika_1+"</td></tr>";
} else {
    otveti += "<tr class='table-danger'><td>1</td><td>"+voprosi[0][0]+"</td><td>Вы ответили не верно. Ваш ответ: "+otv_ucgenika_1+"</td></tr>"; 
}
if(otv_uch_2 == voprosi[1][1]){
    ball +=1;
    otveti += "<tr class='table-success'><td>2</td><td>"+voprosi[1][0]+"</td><td>Вы ответили верно. Ваш ответ: "+otv_ucgenika_2+"</td></tr>";
} else {
   otveti += "<tr class='table-danger'><td>2</td><td>"+voprosi[1][0]+"</td><td>Вы ответили не верно. Ваш ответ: "+otv_ucgenika_2+"</td></tr>";  
}
if(otv_uch_3 == voprosi[2][1]){
    ball +=1;
    otveti += "<tr class='table-success'><td>3</td><td>"+voprosi[2][0]+"</td><td>Вы ответили верно. Ваш ответ: "+otv_ucgenika_3+"</td></tr>";
} else {
    otveti += "<tr class='table-danger'><td>3</td><td>"+voprosi[2][0]+"</td><td>Вы ответили не верно. Ваш ответ: "+otv_ucgenika_3+"</td></tr>"; 
}
if(otv_uch_4 == voprosi[3][1]){
    ball +=1;
    otveti += "<tr class='table-success'><td>4</td><td>"+voprosi[3][0]+"</td><td>Вы ответили верно. Ваш ответ: "+otv_ucgenika_4+"</td></tr>";
} else {
    otveti += "<tr class='table-danger'><td>4</td><td>"+voprosi[3][0]+"</td><td>Вы ответили не верно. Ваш ответ: "+otv_ucgenika_4+"</td></tr>"; 
}
if(otv_uch_5 == voprosi[4][1]){
    ball +=1;
    otveti += "<tr class='table-success'><td>5</td><td>"+voprosi[4][0]+"</td><td>Вы ответили верно. Ваш ответ: "+otv_ucgenika_5+"</td></tr>";
} else {
    otveti += "<tr class='table-danger'><td>5</td><td>"+voprosi[4][0]+"</td><td>Вы ответили не верно. Ваш ответ: "+otv_ucgenika_5+"</td></tr>"; 
}
if(otv_uch_6 == voprosi[5][1]){
    ball +=1;
    otveti += "<tr class='table-success'><td>6</td><td>"+voprosi[5][0]+"</td><td>Вы ответили верно. Ваш ответ: "+otv_ucgenika_6+"</td></tr>";
} else {
   otveti += "<tr class='table-danger'><td>6</td><td>"+voprosi[5][0]+"</td><td>Вы ответили не верно. Ваш ответ: "+otv_ucgenika_6+"</td></tr>"; 
}
if(otv_uch_7 == voprosi[6][1]){
    ball +=1;
    otveti += "<tr class='table-success'><td>7</td><td>"+voprosi[6][0]+"</td><td>Вы ответили верно. Ваш ответ: "+otv_ucgenika_7+"</td></tr>";
} else {
    otveti += "<tr class='table-danger'><td>7</td><td>"+voprosi[6][0]+"</td><td>Вы ответили не верно. Ваш ответ: "+otv_ucgenika_7+"</td></tr>"; 
}
if(otv_uch_8 == voprosi[7][1]){
    ball +=1;
    otveti += "<tr class='table-success'><td>8</td><td>"+voprosi[7][0]+"</td><td>Вы ответили верно. Ваш ответ: "+otv_ucgenika_8+"</td></tr>";
} else {
     otveti += "<tr class='table-danger'><td>8</td><td>"+voprosi[7][0]+"</td><td>Вы ответили не верно. Ваш ответ: "+otv_ucgenika_8+"</td></tr>";
}
if(otv_uch_9 == voprosi[8][1]){
    ball +=1;
    otveti += "<tr class='table-success'><td>9</td><td>"+voprosi[8][0]+"</td><td>Вы ответили верно. Ваш ответ: "+otv_ucgenika_9+"</td></tr>";
} else {
    otveti += "<tr class='table-danger'><td>9</td><td>"+voprosi[8][0]+"</td><td>Вы ответили не верно. Ваш ответ: "+otv_ucgenika_9+"</td></tr>";
}
if(otv_uch_10 == voprosi[9][1]){
    ball +=1;
    otveti += "<tr class='table-success'><td>10</td><td>"+voprosi[9][0]+"</td><td>Вы ответили верно. Ваш ответ: "+otv_ucgenika_10+"</td></tr>";
} else {
    otveti += "<tr class='table-danger'><td>10</td><td>"+voprosi[9][0]+"</td><td>Вы ответили не верно. Ваш ответ: "+otv_ucgenika_10+"</td></tr>";
}
if(otv_uch_11 == voprosi[10][1]){
    ball +=1;
    otveti += "<tr class='table-success'><td>11</td><td>"+voprosi[10][0]+"</td><td>Вы ответили верно. Ваш ответ: "+otv_ucgenika_11+"</td></tr>";
} else {
    otveti += "<tr class='table-danger'><td>11</td><td>"+voprosi[10][0]+"</td><td>Вы ответили не верно. Ваш ответ: "+otv_ucgenika_11+"</td></tr>";
}
if(otv_uch_12 == voprosi[11][1]){
    ball +=1;
    otveti += "<tr class='table-success'><td>12</td><td>"+voprosi[11][0]+"</td><td>Вы ответили верно. Ваш ответ: "+otv_ucgenika_12+"</td></tr>";
} else {
    otveti += "<tr class='table-danger'><td>12</td><td>"+voprosi[11][0]+"</td><td>Вы ответили не верно. Ваш ответ: "+otv_ucgenika_12+"</td></tr>";
}
if(otv_uch_13 == voprosi[12][1]){
    ball +=1;
    otveti += "<tr class='table-success'><td>13</td><td>"+voprosi[12][0]+"</td><td>Вы ответили верно. Ваш ответ: "+otv_ucgenika_13+"</td></tr>";
} else {
    otveti += "<tr class='table-danger'><td>13</td><td>"+voprosi[12][0]+"</td><td>Вы ответили не верно. Ваш ответ: "+otv_ucgenika_13+"</td></tr>";
}
if(otv_uch_14 == voprosi[13][1]){
    ball +=1;
    otveti += "<tr class='table-success'><td>14</td><td>"+voprosi[13][0]+"</td><td>Вы ответили верно. Ваш ответ: "+otv_ucgenika_14+"</td></tr>";
} else {
    otveti += "<tr class='table-danger'><td>14</td><td>"+voprosi[13][0]+"</td><td>Вы ответили не верно. Ваш ответ: "+otv_ucgenika_14+"</td></tr>";
}
if(otv_uch_15 == voprosi[14][1]){
    ball +=1;
     otveti += "<tr class='table-success'><td>15</td><td>"+voprosi[14][0]+"</td><td>Вы ответили верно. Ваш ответ: "+otv_ucgenika_15+"</td></tr>";
} else {
    otveti += "<tr class='table-danger'><td>15</td><td>"+voprosi[14][0]+"</td><td>Вы ответили не верно. Ваш ответ: "+otv_ucgenika_15+"</td></tr></table>";
}
vsego_zadach = 15;
procent_vip = ball/vsego_zadach * 100;
procent_vip = procent_vip.toFixed();
document.getElementById('rezultat').innerHTML = "<p style='font-weight:bold;'></p><span id='ot'>Задания выполнены верно на "+procent_vip+"%.</span><br><div class='progress'><div class='progress-bar' role='progressbar' style='width: "+procent_vip+"%' aria-valuenow='"+procent_vip+"' aria-valuemin='0' aria-valuemax='100'></div></div><br>"+otveti;
}
function kodirov(stroka) { 
    var b64ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefg'+ 
                   'hijklmnopqrstuvwxyz0123456789+/='; 
    var b64enc = ''; 
    var ch1, ch2, ch3; 
    var en1, en2, en3, en4; 
    for (var i=0; i<stroka.length;) { 
        ch1 = stroka.charCodeAt(i++); 
        ch2 = stroka.charCodeAt(i++); 
        ch3 = stroka.charCodeAt(i++); 
        en1 = ch1 >> 2; 
        en2 = ((ch1 & 3) << 4) | (ch2 >> 4); 
        en3 = isNaN(ch2) ? 64:(((ch2 & 15) << 2) | (ch3 >> 6)); 
        en4 = isNaN(ch3) ? 64:(ch3 & 63); 
        b64enc += b64ch.charAt(en1) + b64ch.charAt(en2) + 
                      b64ch.charAt(en3) + b64ch.charAt(en4); 
    } 
    return b64enc; 
}
function peremeshat_vse_voprosi(m_vopros) {
    for (var i = m_vopros.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = m_vopros[i];
        m_vopros[i] = m_vopros[j];
        m_vopros[j] = temp;
    }
    return m_vopros;
}