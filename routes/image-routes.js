const express = require("express")
const authMiddleware = require("../middleware/auth-middleware")
const adminMiddleware = require('../middleware/admin-middleware')
const uploadMiddleware = require("../middleware/upload-middleware")

const {
    uploadImageController, 
    fetchImagesController, 
    deleteImageController
} = require('../controllers/image-controller')

const router = express.Router()

//upload the Image
router.post(
    '/upload', 
    authMiddleware, 
    adminMiddleware, 
    uploadMiddleware.single('image'), 
    uploadImageController
)

//to get all the images
router.get(
    '/get',
    authMiddleware,
    fetchImagesController
)

//delete image route
router.delete('/:id', authMiddleware, adminMiddleware, deleteImageController)


module.exports = router

/* {
    "success": true,
    "messgae": "Image uploaded successfully",
    "image": {
        "url": "https://res.cloudinary.com/zdnkynkk/image/upload/v1789443749/crzzqjgawi3vvhcnod9q.png",
        "publicId": "crzzqjgawi3vvhcnod9q",
        "uploadedBy": "6aa8bcfeaca7cb42031ff49a",
        "_id": "6aa8bea588d81831ccfaf457",
        "createdAt": "2026-09-15T03:42:29.857Z",
        "updatedAt": "2026-09-15T03:42:29.857Z",
        "__v": 0
    }
} */