const fs = require('fs');

var path = require('path');
var basePath = path.basename('./.otterdb');

//create new colloction
exports.createColloection = async (colloectionName) => {
  try {

    if (!fs.existsSync( basePath +"/")){
      fs.mkdirSync('.otterdb', { recursive: true });}

      if (!fs.existsSync( basePath +"/" + colloectionName + '.json', '[]')){
      
       fs.appendFileSync( basePath +"/" + colloectionName + '.json', '[]');

       return   colloectionName + ' colloection created successfully'

      } 
      else  return  colloectionName + ' colloection Allredy exitst';

  } catch (error) {
    console.log(error.message);
  }
};

//delete colloction
exports.deleteColloection = async (colloectionName) => {
  try {

    if (!fs.existsSync(basePath +"/" + colloectionName + '.json'))
    
    return  colloectionName +  ' colloection not exitst';
    else{
     

    fs.unlinkSync(basePath +"/" + colloectionName + '.json');
    return colloectionName + ' colloection deleted successfully';
    }

   
  } catch (error) {
    return error.message;
  }
};

//show colloctions 👍
exports.showColloctions = async () => {
  try {
    return (files = fs.readdirSync( basePath +"/" + colloectionName + '.json',));
  } catch (error) {
    return error.message;
  }
};




//save data into colloction
exports.push = async (colloectionName, obj) => {
 
  try {
    const data = fs.readFileSync(basePath +"/" + colloectionName + '.json');

    const array = JSON.parse(data);

    const _id = { _id: new Date().getTime().toString() };

    array.push({ ..._id, ...obj });

    const s = fs.writeFileSync(
      basePath +"/" + colloectionName + '.json',
      JSON.stringify(array)
    );
    return 'push done';
  } catch (error) {
    return error.message;
  }
};

//find data into colloction
exports.find = async (dbname, obj) => {
  try {
    const data = fs.readFileSync(basePath +"/" + dbname + '.json');

    const array = JSON.parse(data);
    const key = Object.keys(obj);
    const values = Object.values(obj);

    return JSON.stringify(array.filter((e) => e[key[0]] === values[0]));
  } catch (error) {
    return error.message;
  }
};

//find all into colloction
exports.findAll = async (dbname) => {
  try {
    data = fs.readFileSync(basePath +"/" + dbname + '.json');
    const array = JSON.parse(data);
    return JSON.stringify(array);
  } catch (error) {}
};

//find by id into colloction 👍
exports.findById = async (colloectionName, id) => {
  try {
    const data = fs.readFileSync(basePath +"/" + colloectionName + '.json');

    const array = JSON.parse(data);

    return JSON.stringify(array.filter((e) => e._id === id));
  } catch (error) {
    return error.message;
  }
};





//pop  👍
exports.pop = async (colloectionName, obj) => {
  try {
    const data = fs.readFileSync(basePath +"/" + colloectionName + '.json');

    const array = JSON.parse(data);
    const key = Object.keys(obj);
    const values = Object.values(obj);

    filterArray= JSON.stringify(array.filter((e) => e[key[0]] != values[0]));

  //push new array
    const s = fs.writeFileSync(
      basePath +"/" + colloectionName + '.json',
      filterArray
   );
    return 'pop done';
  } catch (error) {
    return error.message;
  }
};

//pop by id 👍
exports.popById = async (colloectionName, id) => {
  try {
    const data = fs.readFileSync(basePath +"/" + colloectionName + '.json');

    const array = JSON.parse(data);


    filterArray= JSON.stringify(array.filter((e) => e._id != id));

  //push new array
      fs.writeFileSync(
      basePath +"/" + colloectionName + '.json',
      filterArray
   );
    return 'pop done';
  } catch (error) {
    return error.message;
  }
};

