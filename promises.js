const first=new Promise((resolve,reject)=>{
    const age=19
    if(age>18){
        resolve("you are eligible for voting")
    }else{
        reject("you are not eligible for voting")
    }
}).then((msg)=>{
    console.log(msg)
}).catch((error)=>{
    console.log(error)
})