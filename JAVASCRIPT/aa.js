function c() {
    setTimeout(() => {console.log(`c`);},1000)
    return
}

function b() {
    console.log(`b`);
    return c()
} 

function a() {
    b()
    console.log(__filename);
    return
}

a()