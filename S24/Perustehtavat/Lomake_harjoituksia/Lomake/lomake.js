function tarkista(){
    let enimi = document.getElementById("enimi").value;
    let snimi = document.getElementById("snimi").value;
    let osote = document.getElementById("osote").value;
    let postnro = document.getElementById("postnro").value;
    let ptp = document.getElementById("ptp").value;
    let puh = document.getElementById("puh").value;
    if(enimi === ""){
        alert ("Antaisitko ystävällisesti vielä etunimesi!");
    }
    else if(snimi === ""){
        alert ("Antaisitko ystävällisesti vielä sukunimesi!");
    }
    else if(osote === ""){
        alert ("Antaisitko ystävällisesti vielä osoitteesi");
    }
    else if(postnro === ""){
        alert ("Antaisitko ystävällisesti vielä postinumerosi!");
    }
    else if(ptp === ""){
        alert ("Antaisitko ystävällisesti vielä postitoimipaikkasi!");
    }
    else if(puh === ""){
        alert ("Antaisitko ystävällisesti vielä puhelinnumerosi!");
    }
    else{
        alert ("Kiitos antamistasi tiedoista!");
    }
    event.defaultPrevented;
}
