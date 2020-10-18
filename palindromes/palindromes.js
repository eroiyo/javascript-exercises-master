const palindromes = function(ostring) {
ostring= ostring.toLowerCase();
ostring= ostring.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
length=ostring.length;
for(i=0;i<length/2; i++)
{
    if(ostring[i]!=ostring[length-1-i])
    {
        return false;
    }
    return true;
}

if (ostring==changed){return true;}else{return false;}

}

module.exports = palindromes
