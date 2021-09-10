function setup(){
 img = document.getElementById("image");
 classifier = ml5.imageClassifier('MobileNet', modelLoaded);
}
function modelLoaded(){
    console.log('Model Loaded!');
}
function draw(){
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    } else{
        console.log(results);
        document.getElementById("googlelens_object").innerHTML = "Water Bottle";
        document.getElementById("mobilenet_object").innerHTML = results[0].label;
        document.getElementById("result").innerHTML = "google lens is more accurate than MobileNet";
}