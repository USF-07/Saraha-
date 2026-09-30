import CryptoJS from "crypto-js";
import { ENCRYPYION_KEY } from "../../config/config.js";

export function encryptValue({ data, key = ENCRYPYION_KEY }) {
  return CryptoJS.AES.encrypt(data, key).toString();
}

export function decryptValue({ cipherData, key = ENCRYPYION_KEY }) {
  const bytes = CryptoJS.AES.decrypt(cipherData, key);
  return bytes.toString(CryptoJS.enc.Utf8);
}
