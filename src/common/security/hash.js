import {hash,compare} from "bcrypt";
import { SALT_ROUND } from "../../config/config.js";

export async function hashValue({value,salt = SALT_ROUND}){
    return await hash(value,salt)
}

export async function compareHashedValue({value,encValue}){
    return await compare(value,encValue)
}