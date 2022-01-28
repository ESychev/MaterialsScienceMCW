var test = "Умножение";
var peremeshat_voprosi = "да";
var vopros_1 = "Эти вяжущие твердеют и длительное время сохраняют свою прочность только на воздухе, во влажных условиях они теряют прочность ";
var vopros_2 = "Эти вяжущие способны твердеть и длительно время сохранять свою прочность как на воздухе, так и в вод";
var vopros_3 = "Эти вяжущие после затворения их водным раствором силиката натрия (жидкое стекло) затвердевают на воздухе";
var vopros_4 = "Процесс потери пластичности вяжущим тестом. ";
var vopros_5 = "Гидравлическое вяжущее вещество, получаемое тонким измельчением  клинкера и небольшого количества гипса.";
var pr_otv_zadachi_1 = "43dI81"; 
var pr_otv_zadachi_2 = "w0QyxHU6U=";
var pr_otv_zadachi_3 = "I448+Y+44SA=";
var pr_otv_zadachi_4 = "UyZLQ9U=";
var pr_otv_zadachi_5 = "5A8wRGw1I=";

document.addEventListener('DOMContentLoaded', function(){

    voprosi = [[vopros_1,pr_otv_zadachi_1],[vopros_2,pr_otv_zadachi_2],[vopros_3,pr_otv_zadachi_3],[vopros_4,pr_otv_zadachi_4],[vopros_5,pr_otv_zadachi_5]];
    if(peremeshat_voprosi == "да"){
        voprosi = peremeshat_vse_voprosi(voprosi);
    }
    document.getElementById('v_1').innerHTML = voprosi[0][0];
    document.getElementById('v_2').innerHTML = voprosi[1][0];
    document.getElementById('v_3').innerHTML = voprosi[2][0];
    document.getElementById('v_4').innerHTML = voprosi[3][0];
    document.getElementById('v_5').innerHTML = voprosi[4][0];
});
function sled_vopr(){
    if(document.getElementById('vopros4').style.display == "block"){
        document.getElementById('vopros4').style.display = "none";
        document.getElementById('vopros5').style.display = "block";
        document.getElementById('kn_sl').style.display = "none";
        document.getElementById('kn_pr').style.display = "block";
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
ball = 0;
document.getElementById('vopros5').style.display = "none";
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
vsego_zadach = 5;
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