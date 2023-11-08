function calculate() {
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value

    let bmi = ((weight / (height*height))*10000)

    document.getElementById('bmi-output').innerHTML = bmi.toFixed(1)

    if (bmi < 18.5) {
        document.getElementById('result').innerHTML = 'Kekurangan berat badan'
    } else if (bmi >= 18.5 && bmi < 25) {
        document.getElementById('result').innerHTML = 'Normal (ideal)'
    } else if (bmi >= 25 && bmi <= 29.9) {
        document.getElementById('result').innerHTML = 'Kelebihan berat badan'
    } else {
        document.getElementById('result').innerHTML = 'Kegemukan (obesitas)'
    }

}

function reload() {
    window.location.reload()
}