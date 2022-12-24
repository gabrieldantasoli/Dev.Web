
try {
    var x = 10;
    throw new Error("Not yetyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy")
} catch (e) {
    console.log("MSG DE ERRO : " + e.message)
} finally {
    console.log("ok")
}