const form = document.getElementById("myForm");


form.addEventListener('submit', function(e){
    e.preventDefault()
    const country = document.getElementById("country").value;
    const url = "https://api.covid19api.com/total/dayone/country/"+country;
    covidResult(url);
    })


async function covidResult(url){
    try{
        const response = await fetch(url);
        if(response.ok === false){
            throw "Country not found";
        }
        const covidData = await response.json();
        const length = covidData.length;
        const index = length - 1;

        const confirmed = document.getElementById("confirmedCases");
        const recovered = document.getElementById("recoveredCases");
        const deaths = document.getElementById("deathCases");

        confirmed.innerHTML = "";
        recovered.innerHTML = ""; 
        deaths.innerHTML = "";        

        confirmed.append(covidData[index].Confirmed);
        recovered.append(covidData[index].Recovered);
        deaths.append(covidData[index].Deaths);

    }
    catch(err){
        alert(err);
    }
}


