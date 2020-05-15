var element1 = document.getElementById("left-col")
var element2 = document.getElementById("center-col")
var element3 = document.getElementById("right-col")


function button1(){
   element1.style.display="block"
   element2.style.display="none"
   element3.style.display="none"
}
function button2() {
   element1.style.display="none"
   element2.style.display="block"
   element3.style.display="none"
}
function button3() {
   element1.style.display="none"
   element2.style.display="none"
   element3.style.display="block"
}

function dyna(){
   var d = document.getElementById('dynamic')
   var i = document.createElement('input')
   document.createElement('div')
   i.setAttribute("type","text")
   i.setAttribute('id',"itext")
    var l = document.createElement('label')
   l.setAttribute('for','itext')
   l.innerHTML = "Input Text for "
    d.append(l)
    d.append(i)
}
function demo1(){
   var virat = document.getElementById('dynamic1')
   var pri = document.createElement('input')
   pri.setAttribute("type","email")
   pri.setAttribute('id','itext2')
   var dhar = document.createElement('label')
   dhar.setAttribute('for','itext2')
   dhar.innerHTML = "email id"
   virat.append(dhar)
   virat.append(pri)
}
function demo2(){
   var virat1 = document.getElementById('dynamic2')
   var pri1 = document.createElement('input')
   pri1.setAttribute("type","password")
   pri1.setAttribute('id','itext3')
   var dhar1 = document.createElement('label')
   dhar1.setAttribute('for','itext3')
   dhar1.innerHTML = "password"
   virat1.append(dhar1)
   virat1.append(pri1)
}
function demo3(){
   var virat2 = document.getElementById('dynamic3')
   var pri2 = document.createElement('input')
   pri2.setAttribute("type","phoneno")
   pri2.setAttribute('id','itext4')
   var dhar2 = document.createElement('label')
   dhar2.setAttribute('for','itext4')
   dhar2.innerHTML = "phonenumber"
   virat2.append(dhar2)
   virat2.append(pri2)
}
function demo4(){
   var virat3 = document.getElementById('dynamic4')
   var pri3 = document.createElement('input')
   pri3.setAttribute("type","date")
   pri3.setAttribute('id','itext5')
   var dhar3 = document.createElement('label')
   dhar3.setAttribute('for','itext5')
   dhar3.innerHTML = "DOB"
   virat3.append(dhar3)
   virat3.append(pri3)
}
function demo5(){
   var virat4 = document.getElementById('dynamic5')
   var pri4 = document.createElement('input')
   pri4.setAttribute("type","checkbox1")
   var pri4 = document.createElement('input')
   pri4.setAttribute("type","checkbox2")
   pri4.setAttribute('id','itext6')
   var dhar4 = document.createElement('label')
   dhar4.setAttribute('for','itext6')
   dhar4.innerHTML= "dancing"
   dhar4.innerHTML= "playing"
   virat4.append(dhar4)
   virat4.append(pri4)
}
function demo6(){
   var virat5 = document.getElementById('dynamic6')
   var pri5 = document.createElement('input')
   pri5.setAttribute("type","checkbox")
   pri5.setAttribute('id','itext7')
   var dhar5 = document.createElement('label')
   dhar5.setAttribute('for','itext7')
   dhar5.innerHTML= "playing"
   virat5.append(dhar5)
   virat5.append(pri5)
}
document.getElementById('submit').onclick = function(){
   var  = document.createElement('input');
   checkbox.type = 'checkbox';
   checkbox.id = 'car';
   checkbox.name = 'interest';
   checkbox.value = 'car';
 
   var label = document.createElement('label')
   label.htmlFor = 'car';
   label.appendChild(document.createTextNode('Car'));
   
   var br = document.createElement('br');
 
   var container = document.getElementById('container');
   container.appendChild(checkbox);
   container.appendChild(label);
   container.appendChild(br);
 }




