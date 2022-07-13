import { User, USER_ROLES } from "../../src/model/User";

export const userMock = new User(
    "id_mock_admin",
    "astrodev",
    "astrodev@gmail.com",
    "astrodev123",
    USER_ROLES.ADMIN
)

export const userMock2 = new User(
    "id_mock_normal",
    "astrodev2",
    "astrodev2@gmail.com",
    "astrodev123",
    USER_ROLES.NORMAL
)