import { UserResponse, IUser } from "./auth.types";

export const toUserResponse = (user: IUser): UserResponse => ({
    id: user._id.toString(),
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt.toISOString(),
    updatedAt: user.updatedAt.toISOString(),
});

export const toUserResponseList = (users: IUser[]): UserResponse[] =>
    users.map(toUserResponse);