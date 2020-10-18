function findTheOldest(people){
    var age=0;
    today=2020;
   var person ={};
    while(Object.entries(people).length >0)
    {
          person =people.shift();
        if(person.yearOfDeath < 3000)
        {
            temp_age=(person.yearOfDeath)- (person.yearOfBirth);
        }else
        {
            temp_age=today-(person.yearOfBirth);
        }
        if(temp_age>age)
        {
            age=temp_age
            oldest=person;
        }
    }
    return oldest;
}
module.exports = findTheOldest;
