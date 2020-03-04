title = "dr";
name = "Mateusz";
surname = 'Kubicki';
street = 'Długa 15';
city = 'Kraków';
zip = '30-781';
country = 'Poland';


/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/

address = title + " " + name + " " + surname + "\nul. " + street + "\n" + zip + " " + city + "\n" + country
console.log(address)

console.log()

address = `${title} ${name} ${surname}\nul ${street}\n${zip} ${city}\n${country}`
console.log(address)

