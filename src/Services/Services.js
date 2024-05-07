//Getting countries proper
export const getEuroFlags = async () => {

    const localRoute = '/CountryData/FlagGuesser.Flags.json';
    const response = await fetch(localRoute, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
       });
       debugger;
    const allFlags = await response.json();
    const flagsProper = allFlags.filter( (country)=> {
      return country.Plus === false
    })
    return flagsProper;
}

export const getAsiaFlags = async () => {
  const localRoute = '/CountryData/FlagGuesser.Asia.json';
  const response = await fetch(localRoute, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
     });
  const allFlags = await response.json();
  const flagsProper = allFlags.filter( (country)=> {
    return country.Plus === false
  })
  return flagsProper;
}

export const getAmericaFlags = async () => {
  const localRoute = '/CountryData/FlagGuesser.America.json';
  const response = await fetch(localRoute, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
     });
  const allFlags = await response.json();
  const flagsProper = allFlags.filter( (country)=> {
    return country.Plus === false
  })
  return flagsProper;
}

export const getAfricaFlags = async () => {
  const localRoute = '/CountryData/FlagGuesser.Africa.json';
  const response = await fetch(localRoute, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
     });
  const allFlags = await response.json();
  const flagsProper = allFlags.filter( (country)=> {
    return country.Plus === false
  })
  return flagsProper;
}

//getting countries PLUS
// unrecognised, partially recognised, defacto countries, famous autonomies