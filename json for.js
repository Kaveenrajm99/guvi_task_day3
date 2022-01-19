//for loop condition
let alphanumeric=[{"a":"1","b":"2"},
                 {"a":"3","b":"4"}]
for(let i=0;i<alphanumeric.length;i++){
    console.log(alphanumeric[i])
}

//for in condition
let contract={"district":"erode","field":"turmeric","name":"kaveen"}
for (let i in contract){
    console.log(i,contract[i])
}

//for of condition
let dogs=[{"name":"golden","origin":"icerland"},{"name":"dobar","origin":"uk"}]
for (let i of dogs){
    console.log(i)
}

//for for each condition is for an array of json
let student=[
    {"name":"kaveen"},{"mark":"average"}]
student.forEach(i=> console.log(i));