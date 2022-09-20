import userEvent from "@testing-library/user-event"
import axios from "axios"

export const photoService = {
    getPhotos
}



async function getPhotos(search) {
    const page = 1
    const URL = `https://api.unsplash.com/search/photos/?query=${search}&page=${page}&client_id=IhdI_isC6EIlhNjO6xlgDqlzPxnshsJO8jjnSbb-tJA`
    const images = await axios.get(URL)
    const imagesDisplay = images.data.results.map(i => ({
        urlFull: i.urls.full,
        urlSmall: i.urls.small,
        height: i.height, color: i.color,
        creatorUrl: i.user.links.html,
        creatorName: `${i.user.first_name} ${i.user.last_name}`
    }))
    return imagesDisplay
}