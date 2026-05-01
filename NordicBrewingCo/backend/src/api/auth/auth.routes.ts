import { Router } from "express";
import { verifyToken } from "../../middleware/verifyToken";
import {
  registerUserHandler,
  loginUserHandler,
  updateUserHandler,
  updateUserPasswordHandler,
} from "./auth.controller";

const authRouter = Router();

authRouter.post("/register", registerUserHandler);
authRouter.post("/login", loginUserHandler);
authRouter.patch("/update", verifyToken, updateUserHandler);
authRouter.patch("/password", verifyToken, updateUserPasswordHandler);

export default authRouter;
