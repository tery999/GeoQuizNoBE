export const getEuroFlags = async () => {

    const localRoute = '/CountryData/FlagGuesser.Flags.json';
    const response = await fetch(localRoute, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
       });
    const allFlags = await response.json();
    return allFlags;
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
  return allFlags;
}