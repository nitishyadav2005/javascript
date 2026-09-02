function f1(){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
        console.log("hi");
        resolve();
    }, 4000);
    })
}

function f2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log(("Abes"))
        resolve();
    }, 10000);
    })
}

f1().then(f2)
.catch(() => {
    console.log("ERROR", err);
})