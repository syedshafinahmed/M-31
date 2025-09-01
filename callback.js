function pakhiBhai(callMe, patro, patri) {
    console.log("Callme back parameter", callMe);
    console.log("value of patro", patro);
    if (patri) {
        // console.log(callMe);
        callMe(patro);
    }
    else{
        console.log("Tor kopale biya nai");
    }
}
pakhiBhai(callSomeOne, "Shafin", "Nijhum");
function callSomeOne(person){
    console.log("Calling someone");
}
callSomeOne("Jaaadu");