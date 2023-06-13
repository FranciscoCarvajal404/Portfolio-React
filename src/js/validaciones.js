import putPattern from "./pattern";

export const validacion = (input) =>{
    
    putPattern(input)
    input.target.setAttribute('required', 'required')
    const valid = input.target.validity

    console.log(valid.valid);
    
}