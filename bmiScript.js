function $id(id) {
    return document.getElementById(id);
}
function fetchBmi() {
    let w = $id('weight').value;
    let wu = $id('unitw').value;
    let h = $id('height').value;
    let wh = $id('unith').value;
    let bmi = (w * wu) / ((h * h) * wh * wh);
    // console.log(h);
    // console.log(w);
    // console.log(bmi);
    if (bmi > 18.5 && bmi < 25) {
        $id('activeBar').style.backgroundColor = "green";
    }
    else if (bmi < 18.5)
        $id('activeBar').style.backgroundColor = "cornflowerblue";
    else if (bmi >= 25 && bmi <= 29.9)
        $id('activeBar').style.backgroundColor = "yellow";
    else if (bmi >= 30)
        $id('activeBar').style.backgroundColor = "orange";
    $id('bmiValue').innerHTML = bmi.toPrecision(4) + "  kg/m<sup>2</sup>";
}

