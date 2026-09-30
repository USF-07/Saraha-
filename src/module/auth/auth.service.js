import {
  BadReqException,
  ConflictException,
  NotFoundException,
} from "../../common/exceptions/app.exceptions.js";
import { decryptValue, encryptValue } from "../../common/security/encryption.js";
import { compareHashedValue, hashValue } from "../../common/security/hash.js";
import { createNewDoc, findOneDoc } from "../../DB/model/db.repo.js";
import { userModel } from "../../DB/model/user.model.js";

export async function signup(userData) {
  const { email } = userData;
  const existingEmail = await findOneDoc({
    model: userModel,
    filter: { email },
  });
  if (existingEmail) {
    throw ConflictException();
  }
  userData.password = await hashValue({ value: userData.password });
  if(userData.phone){
    userData.phone = encryptValue({data: userData.phone , key: "secret key 123"});
  }
  return createNewDoc({ model: userModel, data: userData });
}

export async function signin({ email, password }) {
  const user = await findOneDoc({ model: userModel, filter: { email } });
  if (!user) {
    throw NotFoundException({ errMsg: "INVALID EMAIL OR PASSWORD" });
  }
  const isPasswordMatch = await compareHashedValue({
    value: password,
    encValue: user.password,
  });
  if (!isPasswordMatch) {
    throw NotFoundException({ errMsg: "INVALID EMAIL OR PASSWORD" });
  }
  if(user.phone){
    user.phone = decryptValue({cipherData: user.phone, key: "secret key 123"})
  }
  return user;
}
