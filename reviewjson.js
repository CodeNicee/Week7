let obj = {
    FirstName: "Nice",
    LastName: "Kung",
    Age: 20
};

let myJSON = '{"FirstName": "Nice","LastName": "Kung","Age": 20}';
console.log("myJSON", typeof (myJSON));

let myOBJ = JSON.parse(myJSON);
console.log("myJSON", typeof (myOBJ));