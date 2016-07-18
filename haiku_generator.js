var haiku = require('./haiku');
var fs = require('fs');
var cmudictFile = readCmudictFile('./cmudict.txt');
var sylArray = syllableCount(cmudictFile);
// var sylArray = [[],["Box","Melts","Pan","Hot","Crust","Cheese","Pie","Round","Slice","Thin","Flavor","Plain","Fresh","Coal"],["Garlicky","Greasy","Basil","Savory","pizza","pizzas","Bubbling","Stretchy","Brooklyn","Topping","Doughy","Garlic","Saucy"],["Italian","Coal fired","Forever","Triangle","Tomato"],["Pizzamilad","Mozzarella","Margarita","Pizzeria","Delivery","Pepperoni"],["Neopolitan"]]

function readCmudictFile(file){
    return fs.readFileSync(file).toString();
}

function formatData(data){
    var list = [];
    var lines = data.toString().split('\n'),
    lineSplit;
    lines.forEach(function(line){
        list.push(lineSplit = line.split("  "));
    });
    return list;
}


function syllableCount(data){
    var list = formatData(data);
    var syllableList = [];
    list.forEach(function(item){
        var sylArray = item[1].match(/(\d)/g);
        if(!sylArray){
           var sylLength = [0];
        } else{
            var sylLength = [sylArray.length];
        }
        if(!syllableList[sylLength]){
            syllableList[sylLength] = [];
            syllableList[sylLength].push(item[0]);
        } else{
            syllableList[sylLength].push(item[0]);
        }

    });
    return syllableList;
}

console.log(haiku.createHaiku([[2,2,1],[4,3,1],[1,4]],sylArray));
