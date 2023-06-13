export default putPattern;

function putPattern(input){
    const inputType = input.target.name;
    const reg = regex[inputType];
    input.target.setAttribute("pattern", reg)
}


const regex = {
    name: "^[s\\S ][^<>$?{}]{0,50}",

    email: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}",

    subject: "^[s\\S ][^<>${}]{0,50}",

    message: "[s\\S]{0,300}",
}