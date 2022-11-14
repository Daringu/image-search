import axios from "axios";
const url='https://pixabay.com/api/'
export default async (name,page)=>{
    const params={
        key:'31309905-aa9b8c7eab9a4332c4f40b0ee',
        q:name,
        image_type:'photo',
        orientation:'horizontal',
        safesearch:true,
        page:page,
        per_page:40
    }
    const data= await axios.get(url,{params})
    const images=await data.data.hits
    return images
}