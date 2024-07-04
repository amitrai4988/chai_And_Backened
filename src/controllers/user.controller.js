import { asyncHandler } from '../utils/asyncHandler.js';
import {ApiError} from '../utils/apiError.js';
import {User} from '../models/user.model.js';
import uploadOnCloudinary from '../utils/cloudinary.js';
import { ApiResponse } from '../utils/apiResponse.js';
export const registerUser = asyncHandler(async (req, res) => {
     //get user details from frontend server
     //validation - not empty
     //check if user is already exits :username and email;
     //check images ,check for avatar
     //upload theem to cluoudinary
     //create user object - create entry in db
     //remove password and refresh token from response
     //check for the user creation
     //return response
     const {fullname, email,username ,password} = req.body;
     console.log("email: " + email);
     if(
       [email,username,password,fullname].some(()=>
        field?.trim()===""
    )
     ){
       throw new ApiError(400,"All fields are required")
     } 

    const existedUser = User.findOne({
        $or:[{username},{email}]
     })
     if(existedUser){
        throw new ApiError(409,"User already exists")
     }
    const avatarLocalPath =  req.files?avatar[0]?.path:null;
    const coverImagePath = req.files?coverImagePath?.path:null;
    if(!avatarLocalPath){
        throw new ApiError(400,"Avatar file is required")
    }
   const avatar = await uploadOnCloudinary(avatarLocalPath)
   const coverImage = await uploadOnCloudinary(coverImageLocalPath)
   if(!avatar){
    throw new ApiError(400,"Avatar file is required")
    }
   const user= User.create({
        fullname,
        avatar:avatar.url,
        coverImage:coverImage?.url || "",
        email,
        password,
        username:username.toLowerCase()
    })
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    if(!createdUser){
        throw new ApiError(500,"Something went wrong while registaring the user")
    }
    return res.status(201).json(
        new ApiResponse(200,createdUser,"User Registered succesfully")
    )
});


