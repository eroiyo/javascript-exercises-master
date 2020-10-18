const fibonacci = function(number) {
    if(typeof number == String){
    times=number.parseInt();
    }
    else{
        times=number;
    }
    if(number<0)
    {
        return "OOPS";
    }
    var array= [1];
    let point=1;
    let before=0;
    let menber=0;
    while(menber+1!=times)
    {
        array.push(point+before);
        before=point;
        point=array[array.length-1];
        menber++;
    }
    return point;

}

module.exports = fibonacci
