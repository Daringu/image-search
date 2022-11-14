import cardTemplate from "./cardTemplate"

export default (array)=>{
    return array.map(cardTemplate).join('')
}
