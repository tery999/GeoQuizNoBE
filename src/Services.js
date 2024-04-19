export const getAllFlags = async () => {
    const localRoute = 'CountryData/FlagGuesser.Flags.json';
    const response = await fetch(localRoute);
    const allFlags = await response.json();
    return allFlags;
}