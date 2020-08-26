const User =require( './signin/models/user');
const jwt =require( 'jsonwebtoken');
const bcrypt =require( 'bcryptjs');
const promisify =require( 'util');
​
const signinToken= params=>{
    return jwt.sign(params,'jsonWebToken_Password_Webtoken_Secret',{
        expiresIn:'60d'
});
};
​

​
exports.login=async(req,res)=>{
          //const {email,password}=req.body;
          const email =req.body.email;
          const password = req.body.password;
             if(!email || !password){
                return res.status(400).send({message:"Please input password or email"});
             }
              const user=await User.findOne({email}).select('+password');          
            
              if(!user || !bcrypt.compareSync(password, user.password)){
                  return res.status(400).send({
                      message:"Password OR username is invalid!"
                    });
                  };
          //sending token
        const token=signinToken({ id: user._id, email: user.email});
          res.status(201).json({
            status:'success',
            message:'The email and password valid,Logged In',
            token,
        })
}
​
exports.protect=async (req,res,next)=>{
    // Getting token and check if is there
     let token;
     if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
                 token=req.headers.authorization.split(' ')[1];
        }
        
             if(!token){
                res.status(401).json({
                    status:'fail',
                    message:'You are not logged in! please log in to get access'
                })
             }
            //verification token
            let decoded;
            try{
           decoded=await promisify(jwt.verify)(token,'jsonWebToken_Password_Webtoken_Secret')
           }
           catch(err){
            res.status(401).json({
                status:'fail',
                message:'invalid token,login to get one'
            })
           }
            //check if user still  exist
           const frestUser= await User.findById(decoded.id);
           if(!frestUser){
            res.status(401).json({
                status:'fail',
                message:'token is no long accepted'
            })
           }
            next();
        }
        /*
        // Verify Token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
​
}
*/