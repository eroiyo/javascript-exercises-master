const caesar = function(ori_string,encript) {
    
    String.prototype.replaceAt = function(index, replacement) {
        return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    }

    length=ori_string.length;
    for(i=0;i<length; i++)
    {
        letter= ori_string.charCodeAt(i);
        if(letter>=65 && letter<=90){
            if(letter+encript>90)
            {
                temp_encript=(letter+encript)-90;
                letter=64;
                substitute= String.fromCharCode(letter+temp_encript);
            }else if(letter+encript<65)
            {
                letter=91;
            }else{
            substitute= String.fromCharCode(letter+encript);}
    }else if(letter>=97 && letter<=122)
    {
        if(letter+encript>122)
        {
            temp_encript=(letter+encript)-122;
            letter=96;
            substitute= String.fromCharCode(letter+temp_encript);
        }else if(letter+encript<97)
        {letter=123;
        }else
        {
        substitute= String.fromCharCode(letter+encript);}
    }else{substitute= String.fromCharCode(letter);}
    
        ori_string=ori_string.replaceAt(i,substitute)
    }
    return ori_string;
}
    
module.exports = caesar
