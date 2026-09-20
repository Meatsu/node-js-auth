const cloudinary = require("../config/cloudinary");

const uploadToCloudinary = async(filePath) => {
    try{
        const result = await cloudinary.uploader.upload(filePath)

        return {
            url : result.secure_url,
            publicId : result.public_id
        }
    }catch(e){
        console.error('Error while uploading to cloudinary', e)
        throw new Error('Image upload failed')
    }
}

module.exports = {
    uploadToCloudinary
}