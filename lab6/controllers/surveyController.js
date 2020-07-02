// required packages
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var fs = require('fs');
var path=require('path');

// read the data file
function readData(fileName){
    let dataRead = fs.readFileSync('./data/' + fileName + '.json');
    let infoRead = JSON.parse(dataRead);
    return infoRead;
}

// read the data file
function writeData(info, fileName){
    data = JSON.stringify(info);
    fs.writeFileSync('./data/' + fileName + '.json', data);
}

// update the data file, I use "name" to be equal to fruit, or animal or color
// to match with the file names
// I assume we always just add 1 to a single item
function combineCounts(name, value){
    // console.log(value);
    info = readData(name);
     // will be useful for text entry, since the item typed in might not be in the list
    var found = 0;
    for (var i=0; i<info.length; i++){
        if (info[i][name] === value){
            info[i].count = parseInt(info[i].count) + 1;
            found = 1;
        }
    }
    if (found === 0){
        info.push({[name] : value, count: 1});
    }
    writeData(info, name);
}

module.exports=function(app){

    app.get('/analysis',function(req,res){
        
        var fname = readData("fname");
        var lname= readData("lname");
        var email= readData("eemail");
        var gender= readData("gender");
        var q1= readData("q1");
        var q2= readData("q2");
        var q3= readData("q3");
        var q6= readData("q6");
        var message= readData("message");
        var scale= readData("scale");
        var visited_before= readData("visited_before");
        var before= readData("before");
        var q5=readData("q5");

        res.render('mySurvey', {results:[fname, lname, email, gender,q1, q2,q3,q6,message, scale, visited_before, before, q5]});
        console.log([fname, lname, email, gender, q1, q2,q3,q6,message, scale, visited_before, before, q5]);

    });

    app.get('/niceSurvey',function(req,res){
        res.sendFile(path.join(__dirname, '../views', 'niceSurvey.html'));
        // res.render('niceSurvey');
    });

    app.post('/niceSurvey',urlencodedParser,function(req,res){
        console.log(req.body);
        var json = req.body;
        for (var key in json){
            console.log(key + ": " + json[key]);
            // in the case of checkboxes, the user might check more than one
            if ((key === "q2") && (json[key].length === 2)){
                for (var item in json[key]){
                    combineCounts(key, json[key][item]);
                }
            }
            else {
                combineCounts(key, json[key]);
            }
        }
        // mystery line... (if I take it out, the SUBMIT button does change)
        // if anyone can figure this out, let me know!
        res.sendFile(path.join(__dirname, '../views', 'niceSurvey.html'));
    });

};