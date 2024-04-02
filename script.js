
//Get all the countries from Asia continent /region using Filter function

fetch("https://restcountries.com/v3.1/all")
.then((response) => response.json())
.then((data)=>
{
    const asiaCountry =  data.filter(country =>country.region==='Asia').map(country =>country.name.official)
     
     console.log(asiaCountry)
     
})

//2 Get all the countries with a population of less than 2 lakhs using Filter function

 population()
async function population()
{
    try{
        const response = await fetch("https://restcountries.com/v3.1/all")
        if(! response.ok)
        {
            throw new error ("couldnt fetch the data ")
        }
         const  data = await response.json()
         const result = data.filter((input) =>
         {
            if(input.population<200000)
            {
                return input.population
             }
        }). map((input)=>{return input.name.common})
        console.log(result)
    }
    catch(error)
    {
        console.log(error);
    }
}

//3.Print the following details name, capital, flag, using forEach function

fetch("https://restcountries.com/v3.1/all")
.then(response => response.json())
.then(data => 
    {
        data.forEach(country =>
            {
                console.log('name:',country.name.official),// getting the country name

                // condition if the country captial is available means we are printing the captial array fist index 
                console.log('capital',country.captial ? country.captial[0]: 'not mentioned')
                console.log('flag',country.flags?country.flags : 'not menttioned')
               console.log('***********************************************')

            })

    })
.catch(error =>console.log(error))




//4 Print the total population of countries using reduce function

//OUTPUT:7777721563
totalPopulation()
    async function totalPopulation()
{
    try{
        const response =await fetch("https://restcountries.com/v3.1/all")// fetching the data from the api as the fetch method return promise 
                                                                        //we have used await keyword to get the response
        if(! response.ok)
        {
            throw new error("couldnt fetch")
        }

        const data = await response.json() // converting the promise obj  into json obj
        const result =data.reduce((accumulator,country)=>// using reduce function 
        {
            accumulator = accumulator+country.population;
            return accumulator
        },0)
        console.log(result)
    }
    catch(error)
    {
        console.log(error)
    }
}

//5. Print the country that uses US dollars as currency
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Filter countries that use US dollars as currency
    const countriesWithUSD = data.filter(country => country.currencies && country.currencies.USD ? true : false);

    // Print the names of countries
    if (countriesWithUSD.length > 0) {
      console.log('Countries that use US dollars as currency:');
      countriesWithUSD.forEach(country => {
        console.log(country.name.common);
      });
    } else {
      console.log('No country found that uses US dollars as currency.');
    }
  })
  .catch(error => console.error('Error fetching data:', error));



