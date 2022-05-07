let arrNames=[];
let names;
let names2;
async function req(INDEX){
    res1 = await fetch('https://swapi.dev/api/films/'+INDEX)
    info1 = await res1.json();
    info1 = JSON.stringify(info1);
    info1 = JSON.parse(info1);
    adress = info1["starships"];
    for(i = 0 ; i<adress.length ; i++){
        names = await fetch(adress[i]);
        names = await names.json();
        names = JSON.stringify(names);
        names = JSON.parse(names);
        arrNames.push(names["name"]);
    }

    document.getElementById("box").style.display = "none";
    document.getElementById("new1").style.display = "flex";

    const list = document.getElementById("starsNames");
    for(let j = 0 ; j<arrNames.length ; j++){
        let newli = document.createElement('li')
        const link = document.createElement('a')

        link.appendChild(document.createTextNode(arrNames[j]))

        link.href  = "#"

        newli.appendChild(link)

        newli.addEventListener('click', function(){
            hassan(j);
        });
 
        list.appendChild(newli)
    }
}
async function hassan(j){
    names2 =await fetch(adress[[j]])
    names2 = await names2.json()
    names2 = JSON.stringify(names2)
    var secData =JSON.parse(names2)
    var shipModel=secData["model"];
    var creater =secData["manufacturer"];
    var crew =secData["crew"];
    var passengers =secData["passengers"];
    console.log(passengers);
    console.log(shipModel);
    console.log(creater);
    console.log(crew);
     document.getElementById('information_star').innerText='"Model":\n  '+ shipModel + 
     "\n" +'"Manufacturer":\n  '+ creater +"\n"+'"Crew":\n  ' +crew +"\n" +'"Passengers":\n  '+passengers
     array2 = []
    }