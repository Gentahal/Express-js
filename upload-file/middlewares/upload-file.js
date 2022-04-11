require('dotenv').config();
const path = require('path');
const multer = require('multer')

//!konfigurasi storage multer
const storage = multer.diskStorage({
    destination: (req, file,cb) => {
        cb(null, path.resolve(process.env.PUBLIC_DIR, process.env.UPLOAD_DIR))
    },
    filename:(req, file, cb)=> [
        cb(null, `${Date.now()}-${file.originalname}`)
    ]
});

//!Inisiasi multerInstace storage
const multerInstace = multer({storage})

//!upload single image
const uploadSingleImage = (req, res, next) => {
    const upload = multerInstace.single('image');

    //response error dengan error heandling

    upload(req, res, (err) => {
        if (err) {
            return next(err)
        }
        return next();
    })
}

//!upload multi file
const uploadMultiImage = (req, res, next) => {
    const upload = multerInstace.array('image', 5); // 5 disini adalah batas pengiriman filenya

    //response error dengan error heandling

    upload(req, res, (err) => {
        if (err) {
            return next(err)
        }
        return next();
    })
}

//!Upload single with data
const uploadSingleImageData = (req, res, next) => {
    const upload = multerInstace.single('image');

    //response error dengan error heandling

    upload(req, res, (err) => {
        
        const {name, email} = req.body
        console.log(name, email);

        if (err) {
            return next(err)
        }
        return next();
    })
};

module.exports = {
    uploadSingleImage,
    uploadMultiImage,
    uploadSingleImageData
}