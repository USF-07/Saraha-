import { Router } from "express";
import { signin, signup } from "./auth.service.js";
import { successResponse } from "../../common/response/success.response.js";

const authRouter = Router();

authRouter.post("/signup", async (req, res) => {
  const user = await signup(req.body);
  successResponse({
    res,
    status: 201,
    msg: "User created successfully",
    data: user,
  });
});

authRouter.post("/signin", async (req, res) => {
  const user = await signin(req.body);
  successResponse({ 
    res,
    msg: "Data Retrieved",
    data: user
   });
});

export default authRouter;
