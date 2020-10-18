var findTheOldest = function(array){
    age=0;
    today=2020;
    oldest=0;
    for(i=0; i<array.legth; i++)
    {
        if(array[i].yearOfDeath != undefined)
        {
            temp_age=array[i].yearOfDeath-array[i].yearOfBirth;
        }else
        {
            temp_age=today-array[i].yearOfBirth;
        }
        if(temp_age>age)
        {
            age=temp_age
            oldest=array[i];
        }
    }
    return oldest;

}

