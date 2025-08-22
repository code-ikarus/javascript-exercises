const getAge = (person) =>{
  if(person.yearOfDeath){
    return person.yearOfDeath - person.yearOfBirth
  }
  const currentYear = new Date().getFullYear();
  return currentYear - person.yearOfBirth;
}

const findTheOldest = function(people) {
  return people.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest);
    const currentAge = getAge(currentPerson);

    if (currentAge > oldestAge){
      return currentPerson;
    }else{
      return oldest
    }
  })
};

// Do not edit below this line
module.exports = findTheOldest;
