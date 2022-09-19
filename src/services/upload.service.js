import { json } from "react-router-dom"

export const uploadService = {
  uploadImg
}
async function uploadImg(ev) {
  const CLOUD_NAME = "dcwibf9o5"
  const UPLOAD_PRESET = "vt0iqgff"
  const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

  const formData = new FormData()
  formData.append('upload_preset', UPLOAD_PRESET)
  formData.append('file', ev.target.files[0])


  try {
    const res = await fetch(UPLOAD_URL, {
      method: 'POST',
      body: formData
    })

    const resData = await res.json()
    // const url = resData.url

    // console.log('ev.target.files[0]:', ev.target.files[0])
    // console.log('resData:', resData)
    return {
      url: resData.url,
      name: resData.original_filename,
      height: resData.height,
      width: resData.width
    }
  } catch (err) {
    console.error(err)
  }
  // return fetch(UPLOAD_URL, {
  //   method: 'POST',
  //   body: formData
  // })
  //   .then(res => res.json())
  //   .then(res => {
  //     return res
  //   })
  //   .catch(err => console.error(err))
}

export function imgFromLink(img) {
  const image = new Image()
  image.onload = () => {
    // console.log('width!' ,image.width)
    // console.log('height',image.height)
  }
  image.src = img
  return {
    url: image.src,
    height: image.height,
    width: image.height
  }
}

