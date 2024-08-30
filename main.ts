#!/use/bin/env node
import inquirer from "inquirer";


let answer = await inquirer.prompt([{
    message: "Enter your firstnumber",
    name:"firstnumber",
    type:"number",
},{
    message:"Enter your secondnumber",
   name:"secondnumber",
   type:"number",
},{
    message:"enter your calculator number",
    name:"operator",
    type:"list",
    choices:["subtraction","Addition","Division","multiplation"]
}
])

if(answer.operator === "subtraction"){
    console.log(answer.firstnumber - answer.secondnumber)


}else if(answer.operator ==="Addition"){
  console.log(answer.firstnumber + answer.secondnumber)
}else if(answer.operator === "Division"){
    console.log(answer.firstnumber * answer.secondnumber)
}else if(answer.operator === "multiplation"){
  console.log(answer.firstnumber / answer.secondnumber)
}else if(answer.operator === "subtraction"){
   console.log(answer.firstnumber - answer.secondnumber)
}else {
    console.log("invalid   number")
}