let mySampleArray = ['Esmeralda', 'Kiko', 'Ruth', 'Lebron', 'Pedro', 'Maria', 'Lou', 'Fernando', 'Cesco', 'Bart', 'Annie'];

//your code here

var initialValue = mySampleArray.length -1;
var stopValue = mySampleArray.slice(-1)
var increasingValue = 1;
for(let i = mySampleArray.length -1;i >= 0; i = i -1) {
    console.log(mySampleArray[i]);
}
