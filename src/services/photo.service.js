import axios from "axios"

export const photoService = {
    getPhotos
}



async function getPhotos(search='background'){
    const URL = `https://api.unsplash.com/search/photos/?query=${search}&client_id=IhdI_isC6EIlhNjO6xlgDqlzPxnshsJO8jjnSbb-tJA`
    const images = await axios.get(URL)
    console.log(images.data)
}