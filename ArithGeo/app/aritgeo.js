function aritGeo(arr) { 
var array=arr;
var ap = array[1] - array[0];
var gp = array[1] / array[0];

var arith = true;
var geo = true;
if (array.length===0){
return 0;
}else{
for(var i = 0; i < array.length - 1; i++)
{
    if( array[i + 1] - array[i] !== ap )
      arith = false;
    if(array[i + 1] / gp !== array[i])
      geo = false;
}

if(arith === true){
    return "Arithmetic";
}
else if(geo === true){
    return"Geometric";
}
else{
    return -1;
}
}
}
module.exports= aritGeo;