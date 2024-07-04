import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:CLOUDINARY_API_KEY,
    api_secret:CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (loaclFilePath)=>{
    try{
       if(!loaclFilePath) return null;
       //upload the file on cloudinary
       cloudinary.uploader.upload(loaclFilePath,{
        resource_type:"auto"
       })
       //file has been uploaded successfully
       console.log("file is upoaded on cloudinary",response.url);
       return response;
    }catch(error){
        fs.unlinkSync(loaclFilePath)
        //remove the loacally temporary file as the upload operation got failed
    }
}

export default uploadOnCloudinary;