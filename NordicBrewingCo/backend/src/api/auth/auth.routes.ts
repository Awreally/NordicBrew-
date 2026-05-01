import { Router } from "express";
import { validateBody } from "../../middleware/validateBody";
import { verifyToken } from "../../middleware/verifyToken";
import {
  RegisterSchema,
  LoginSchema,
  UpdateUserSchema,
  UpdatePasswordSchema,
} from "./auth.validation";
import {
  registerUserHandler,
  loginUserHandler,
  updateUserHandler,
  updateUserPasswordHandler,
} from "./auth.controller";

const authRouter = Router();

authRouter.post("/register", validateBody(RegisterSchema), registerUserHandler);
authRouter.post("/login", validateBody(LoginSchema), loginUserHandler);
authRouter.patch(
  "/update",
  verifyToken,
  validateBody(UpdateUserSchema),
  updateUserHandler,
);
authRouter.patch(
  "/password",
  verifyToken,
  validateBody(UpdatePasswordSchema),
  updateUserPasswordHandler,
);

export default authRouter;
