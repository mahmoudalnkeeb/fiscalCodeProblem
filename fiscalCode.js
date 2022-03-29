// make class Test which contain method assertEquals that checks if the supplied 2 values are equal
class Test {
  assertEquals(answer, expected) {
    answer == expected
      ? console.log(
          `%cPASSED ✔`,
          'display: inline-block ; background-color: #27ae60 ; color: #ffffff ; font-weight: bold ; padding: 3px 7px 3px 7px ; border-radius: 3px 3px 3px 3px ;'
        )
      : console.log(
          `%cFAILED ✖`, //${expected} expected but got ${answer}
          'display: inline-block ; background-color: #EA2027 ; color: #ffffff ; font-weight: bold ; padding: 3px 7px 3px 7px ; border-radius: 3px 3px 3px 3px ;'
        );
  }
}

function fiscalCode(person) {
  const months = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
    5: 'E',
    6: 'H',
    7: 'L',
    8: 'M',
    9: 'P',
    10: 'R',
    11: 'S',
    12: 'T',
  };
  const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];

  // function global variables
  const perName = person.name,
    surname = person.surname,
    gender = person.gender,
    dob = person.dob;
  let newName = [];
  let nameV = [];
  let newSurname = [];
  let surnameV = [];

  // for loop to check if name letters is vowels and sperate thim in two arrays newName & nameV
  for (let i = 0; i < perName.length; i++) {
    if (!vowels.includes(perName[i])) {
      newName.push(perName[i]);
    } else {
      nameV.push(perName[i]);
    }
  }

  // build ID's second part according to problem instrucions
  let secPart =
    newName.join('').length < 3
      ? (newName.join('') + nameV[0]).toUpperCase().length < 3
        ? (newName.join('') + nameV[0]).toUpperCase() + 'X'
        : (newName.join('') + nameV[0]).toUpperCase()
      : newName.join('').toUpperCase();
  secPart = secPart.length > 3 ? secPart[0] + secPart[2] + secPart[3] : secPart;

  // for loop to check if surname letters is vowels and sperate thim in two arrays newSurname & surnameV
  for (let i = 0; i < surname.length; i++) {
    if (!vowels.includes(surname[i])) {
      newSurname.push(surname[i]);
    } else {
      surnameV.push(surname[i]);
    }
  }

  // build ID's first part according to problem instrucions
  let firstPart =
    newSurname.join('').length < 3
      ? (newSurname.join('') + surnameV[0]).toUpperCase().length < 3
        ? (newSurname.join('') + surnameV[0]).toUpperCase() + 'X'
        : (newSurname.join('') + surnameV[0]).toUpperCase()
      : newSurname.join('').toUpperCase();

  // get year from given date of birth
  let year = dob.split('/')[2];
  year = year[year.length - 2] + year[year.length - 1];

  // get month from given date of birth and replace it with specific letter
  let month = months[dob.split('/')[1]];

  // get day from given date of birth and change it according to gender
  let dayF = parseInt(dob.split('/')[0]);

  // if gender is female then add 40 to day else if less than 10 add 0 at beginning of day else return day
  let day = gender == 'F' ? dayF + 40 : dayF < 10 ? '0' + dayF : dayF;

  // build ID's third part using year , month and day
  let thirdPart = year + month + day;

  // all of parts comes together to build citizen id
  return firstPart + secPart + thirdPart;
}

Test.prototype.assertEquals(
  fiscalCode({
    name: 'Brendan',
    surname: 'Eich',
    gender: 'M',
    dob: '1/12/1961',
  }),
  'CHEBND61T01'
);
Test.prototype.assertEquals(
  fiscalCode({ name: 'Helen', surname: 'Yu', gender: 'F', dob: '1/12/1950' }),
  'YUXHLN50T41'
);
Test.prototype.assertEquals(
  fiscalCode({ name: 'Al', surname: 'Capone', gender: 'M', dob: '17/1/1899' }),
  'CPNLAX99A17'
);
Test.prototype.assertEquals(
  fiscalCode({
    name: 'Mickey',
    surname: 'Mouse',
    gender: 'M',
    dob: '16/1/1928',
  }),
  'MSOMKY28A16'
);
Test.prototype.assertEquals(
  fiscalCode({
    name: 'Marie',
    surname: 'Curie',
    gender: 'F',
    dob: '7/11/1867',
  }),
  'CRUMRA67S47'
);
