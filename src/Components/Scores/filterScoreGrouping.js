export default function filterScoreGrouping(scores, includesWord) {
    const objToArr = Object.entries(scores);
    const filtered = objToArr.filter( item=> item[0].includes(includesWord));
    return filtered;
}