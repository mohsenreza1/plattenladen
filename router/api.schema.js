
import Ajv from "ajv";

const ajv = new Ajv({allError: true, allowUnionType: true});

import addFormats from "ajv-formats"
addFormats(ajv)


export const getSchema = {
    type: "object",
    additionalProperties: false,
    properties: {
        title: {type: "string"},
        artist: {type: "string"},
        date: {type: "date"},
        photo: {type: "string"},
        price: {type: "number"}
    }
}


const body = {
    title: "hallo Edwin",
    artist: "Edwin Wagner",
    date: "14.02.2023",
    photo: "https://storage.highresaudio.com/web/imgcache/3720203f43e8d48b3aff5a248f326292/mtmurp-wagnerbyar-preview-m3_550x550.jpg",
    price: 500


}

const validate = ajv.compile(getSchema)
const valid = validate(body)
if(!valid) console.log(validate.errors)
console.log(valid)


