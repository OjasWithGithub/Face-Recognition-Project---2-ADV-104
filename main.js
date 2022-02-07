Webcam.set({

    width: 350,
    height: 270,
    image_format: 'png',
    png_quality: 90,

})

camera = document.getElementById("camera") // Defines camera to identify people

Webcam.attach('#camera')

function takeSnapshot() {

    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "image" src = "'+data_uri+'"></img>'; // Takes snapshot
    });

}

console.log('ml5 version', ml5.version)  // Consoles Ml5 version

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/CPPdd9a0J/model.json',modelLoaded);

function modelLoaded() {
    console.log('modelLoaded');
}
 