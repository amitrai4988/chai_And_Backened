const asyncHandler =(requestHandler)=>{
    return   (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>{
            next(err);
        })
    }
}


export { asyncHandler}

// const asyncHandler=()=>{}
// const asyncHandler=(func)=>()=>{}
// const asyncHandler=(func)=>async()=>{}
  //this is try catch code
// const asyncHandler=(fn)=>async(req,res,next)=>{
//     try{
//       await fn(req,res,next);
//     }
//     catch(err){
//         res.status(err.code ||500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }
  //now we write the premises wala code
