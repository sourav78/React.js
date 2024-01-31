import { compose } from "redux";

function removeWhiteSpace(str){
    return str.split(" ").join("")
}

function repeateString(str){
    return str.repeat(2)
}

function upperCaseString(str){
    return str.toUpperCase()
}

const composeAllFunctions = compose(removeWhiteSpace, repeateString, upperCaseString)

console.log(composeAllFunctions("hy iam julu"));