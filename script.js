function storage() {
    (result);

    const inputQty = document.querySelector('.qty');
    const qy = Number(inputQty.value);
    const inputWatts =document.querySelector('.watts');
    const wt = Number(inputWatts.value);
    const inputHrs_day =document.querySelector('.hrs_day');
    const hrdy = Number(inputHrs_day.value);

    watthrs_day =(qy)*(wt)*(hrdy);
    
    let store = watthrs_day + result; 
    
    localStorage.setItem('store', JSON.stringify(store));
    result = parseInt(localStorage.getItem('store'));

    document.querySelector('.wattsHrs').innerHTML = result;

    document.querySelector('.watthours').innerHTML =(result);
    inputQty.value = '';
    inputWatts.value = '';
    inputHrs_day.value = '';

    if (result === 0) {
        message = "Calculate for more loads."
        document.querySelector('#message').innerHTML =(message);
    }
    else if (result != 0) {
        message = "Click 2<sup>nd</sup> button to calculate for other loads."
        document.querySelector('#message').innerHTML =(message);
    }
    else {
        message = "Try again. Can't find your input values."
        document.querySelector('#message').innerHTML =(message);
    }
}

function calcWatthrs() {
    const inputQty = document.querySelector('.qty');
    const qy = Number(inputQty.value);
    const inputWatts =document.querySelector('.watts');
    const wt = Number(inputWatts.value);
    const inputHrs_day =document.querySelector('.hrs_day');
    const hrdy = Number(inputHrs_day.value);

    watthrs_day =(qy)*(wt)*(hrdy);
console.log(watthrs_day);

    document.querySelector('#watts_hrs').innerHTML = watthrs_day;
    inputQty.value = '';
    inputWatts.value = '';
    inputHrs_day.value = '';

    var answer = watthrs_day;

    localStorage.setItem('answer', JSON.stringify(answer));
    result = parseInt(localStorage.getItem('answer'));

    if (result === 0) {
        message = "Input values for calculation."
        document.querySelector('#message').innerHTML =(message);
    }
    else if (result != 0) {
        message = "Click 2<sup>nd</sup> button to calculate for other loads."
        document.querySelector('#message').innerHTML =(message);
    }
}

/*function clear() {
    parseInt(localStorage.removeItem('store'));
}

function handleWatthrsKeydown(event) {
    if (event.key === 'Enter') {
        calcWatthrs();
    }
}*/

function calcAmphrs() {
    (result);
    
    const inputInverterVoltage = document.querySelector('#inverter');
    const iV = Number(inputInverterVoltage.value);
    Ahday  = ((result)*1.15)/(iV);

    document.querySelector('.amps').innerHTML =(Ahday);       
    
    inputInverterVoltage.value = '';

    localStorage.setItem('iV', JSON.stringify(iV));
    localStorage.setItem('Ahday', JSON.stringify(Ahday));

    Ahday1 = parseInt(localStorage.getItem('Ahday'));
    voltss = parseInt(localStorage.getItem('iV'));

    document.querySelector('#amps1').innerHTML =(Ahday1); 
    document.querySelector('#inverterVolt').innerHTML =voltss;
}

function calcArrayAmps() {
    (Ahday1);
    let inputSHrs = document.getElementById('sunhours');
    let sh = (Number(inputSHrs.value));

    solarArrayAmps  = (Ahday1/sh);
    document.querySelector('#amps2').innerHTML =(solarArrayAmps);    

    localStorage.setItem('solarArrayAmps', JSON.stringify(solarArrayAmps));
    solarArrayAmps1 = parseInt(localStorage.getItem('solarArrayAmps'));

    document.querySelector('#rating').innerHTML =solarArrayAmps1;
}

function calcPrlModules() {
    (solarArrayAmps1);
    const inputPkAmps = document.getElementById('peakAmps');
    const pk = (Number(inputPkAmps.value));
    parallelModules = (solarArrayAmps1/pk);

    document.querySelector('#parallel').innerHTML =(parallelModules);
}

function calcModules() {
    const inputplMod = document.getElementById('plModules');
    const plM = (Number(inputplMod.value));

    document.querySelector('#parallelModules').innerHTML =plM;

    modulesString = plM/2;
    document.querySelector('#stringModules').innerHTML =modulesString;
    
    numbStrings = modulesString/20
    document.querySelector('#strings').innerHTML =numbStrings;
}

function calcInverter() {
    (solarArrayAmps1);
    (voltss);
    const inputEfficiency = document.getElementById('efficiency');
    const effect = ((Number(inputEfficiency.value))/100);
    
    arrayPower = (solarArrayAmps1)*(voltss);
    
    document.querySelector('#watts').innerHTML =arrayPower;

    inverterPower = (arrayPower)/(effect);
    ip = (parseFloat(inverterPower.toFixed(4)));

    document.querySelector('#invertersize').innerHTML =ip;
    
    x = (inverterPower/1000);
    y = (parseFloat(x.toFixed(2)));

    document.querySelector('#kilowatts').innerHTML = y;
}
