
let tbl=document.querySelector("table")
console.log(tbl);
let tr1=document.createElement("tr")
tbl.appendChild(tr1)
let td1=document.createElement("td")
td1.textContent="A"
td1.style.backgroundColor="crimson"
tr1.appendChild(td1)

console.log(tr1);
let td2=document.createElement("td")
td2.textContent="B"
td2.style.backgroundColor="crimson"

tr1.appendChild(td2)

let td3=document.createElement("td")
td3.textContent="C"
td3.style.backgroundColor="crimson"

tr1.appendChild(td3)

// second row

let tr2=document.createElement("tr")
tbl.appendChild(tr2)
td21=document.createElement('td')
td21.textContent="D"
tr2.style.backgroundColor="coral"

tr2.append(td21)

td22=document.createElement('td')
td22.textContent="E"
tr2.append(td22)

td23=document.createElement('td')
td23.textContent="F"
tr2.append(td23)

// third row

let tr3=document.createElement("tr")
tr3.style.backgroundColor='violet'
tbl.append(tr3)
td31=document.createElement('td')
td31.textContent="G"
tr3.append(td31)

td32=document.createElement('td')
td32.textContent="H"
tr3.append(td32)

td33=document.createElement('td')
td33.textContent="I"
tr3.append(td33)
tbl.style.height="200px"
tbl.style.width="200px "

tr1.style.textAlign="center"
tr2.style.textAlign="center"
tr3.style.textAlign="center"

