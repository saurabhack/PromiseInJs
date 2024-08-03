const wakeUp=()=>{
    console.log("wake up")
}
const takeShower=()=>{
    console.log("take a shower")
}
const breakFast=()=>{
    console.log("eat break fast")
}
const readNews=()=>{
    console.log("read a news paper")
}

const first=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        wakeUp()
        resolve()
    },2000)
})

const second=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        takeShower()
        resolve()
    },1000)
})
const third=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        breakFast()
        resolve()
    },3000)
})
const fourth=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        readNews()
        resolve()
    },2000)
})

Promise.all([first,second,third,fourth]).then((msg)=>{
    console.log(msg)
})