export const getAllFlags = async () => {
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