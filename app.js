
var o = { 
    name:"o",
    
};

var p = {
    name:'p'
}

o.p=p;
p.o=o;

function removeCircularReferences(x,arr) {
    arr.push(x);
    //console.log(x);
    for (var i in x) {
       // func.apply(this,[i,x[i]]);
       //console.log(x[i]);
        if (x[i] !== null && typeof(x[i])=="object") {
            //going one step down in the object tree!!
            if(arr.indexOf(x[i]) == -1)  {
                removeCircularReferences(x[i],arr);
            }
            else {
                console.log('Cycle detected @  and removing it ' + x[i]);
                x[i]='circular-reference';
               
            }
        }
    }
}

function removeJsonCirularReferences(jsonObject){
    var a=[];
    removeCircularReferences(jsonObject,a);
}

//that's all... no magic, no bloated framework

console.log(o);
removeJsonCirularReferences(o);

console.log(o);
