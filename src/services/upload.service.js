import { json } from "react-router-dom";

export const uploadService = {
  uploadImg
}
async function uploadImg(ev) {
  const CLOUD_NAME = "dcwibf9o5"
  const UPLOAD_PRESET = "vt0iqgff"
  const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

  const formData = new FormData();
  formData.append('upload_preset', UPLOAD_PRESET);
  formData.append('file', ev.target.files[0])
  try {
    const res = await fetch(UPLOAD_URL, {
      method: 'POST',
      body: formData
    })
    // const elImg = document.createElement('img')
    const { url } = await res.json()
    // document.body.append(elImg)
    // elImg.src = url
    // console.log('res:', res)
    return url
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
