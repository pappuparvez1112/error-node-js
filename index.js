const express=require("express");
const app=express();
const fs=require('fs');

//*synchronous error handling

// app.get('/',(req,res)=>{
//     res.send(a);

// });
// //***** error 404


// app.use((req,res,next)=>{
//     // res.send("Request url was not found");
//     next("Request url was not found");
// })
// app.use((err,req,res,next)=>{
//     // console.log(err);
//     // res.send('there was an error');
//     if(err.message){
//         res.send(err.message);
//     }else{
//         res.send('there was an error');
//     }

// });

//** asynchronous error handling*/

//** built in asynchronous handling*/

// app.get('/',(req,res,next)=>{
//     fs.readFile('/file-does-not-exist',(err,data)=>{
//        if(err){
//         next(err);
//        }else{
//         res.send(data);
//        } 

//     });
  

// });
// app.use((req,res,next)=>{
//     console.log("i am not called");
//     next();
// })

// app.use((err,req,res,next)=>{
//     if(res.headerSent){
//         next("there was a problem");
//     }else
//         if(err.message){
//             res.send(err.message);
//         }else{
//             res.send('there was an error');
    
//         }
// });


//** customize asynchronous error handling */


app.get('/',(req,res,next)=>{
    setTimeout(function(){
       try{
        console.log(a);
        
       }catch(err){
        next(err);
       } 

    },100);
  

});
app.use((req,res,next)=>{
    console.log("i am not called");
    next();
})

app.use((err,req,res,next)=>{
    if(res.headerSent){
        next("there was a problem");
    }else
        if(err.message){
            res.send(err.message);
        }else{
            res.send('there was an error');
    
        }
});

    



app.listen(3000,()=>{
    console.log("app listening to port at 3000");
});