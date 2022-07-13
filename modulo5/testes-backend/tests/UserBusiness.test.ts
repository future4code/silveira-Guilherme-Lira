import { UserBusiness } from "../src/business/UserBusiness";
import { USER_ROLES } from "../src/model/User";
import { HashGeneratorMock } from "./mocks/hashGeneratorMock";
import { IdGeneratorMock } from "./mocks/idGeneratorMock";
import { TokenGeneratorMock } from "./mocks/tokenGeneratorMock";
import { UserDatabaseMock } from "./mocks/UserDatabaseMock";

const userBusinessMock = new UserBusiness(
    new IdGeneratorMock(),
    new HashGeneratorMock(),
    new TokenGeneratorMock(),
    new UserDatabaseMock() as any
)

// EXERCÍCIO 2

describe("getUserById", () => {
    // (a)
    test("Should catch error when id is not registered", async () => {
        expect.assertions(2)

        try {
            await userBusinessMock.getUserById("abc")
        } catch (error: any) {
            expect(error.statusCode).toBe(404)
            expect(error.message).toBe("User not found")
        }
    })

    // (b)
    test("Should return respective user when id is registered", async () => {
        expect.assertions(0)

        try {
            const getUserById = jest.fn(
                (id: string) => userBusinessMock.getUserById(id)
            )

            const result = await getUserById("id_mock_admin")

            expect(getUserById).toHaveBeenCalledWith("id_mock_admin")
            expect(result).toEqual({
                id: "id_mock_admin",
                name: "astrodev",
                email: "astrodev@gmail.com",
                role: "ADMIN",
            })
        } catch (error: any) {
            console.log(error.message)
        }
    })

    // EXERCÍCIO 4

    describe("getAllUsers", () => {
        // a
        test("Should catch error when role is not ADMIN", async () => {
            expect.assertions(2)

            try {
                await userBusinessMock.getAllUsers(USER_ROLES.NORMAL)
            } catch (error: any) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("You must be an admin to access this endpoint")
            }
        })

        // b
        test("Should return all users when authorized", async () => {
            expect.assertions(2)

            try {
                const getAllUsers = jest.fn(
                    (role: USER_ROLES) => userBusinessMock.getAllUsers(role)
                )

                const result = await getAllUsers(USER_ROLES.ADMIN)

                expect(getAllUsers).toHaveBeenCalledWith(USER_ROLES.ADMIN)
                expect(result).toContainEqual(
                    [{
                    id: "id_mock_admin",
                    name: "astrodev",
                    email: "astrodev@gmail.com",
                    role: "ADMIN"
                },{
                    id: "id_mock_normal",
                    name: "astrodev2",
                    email: "astrodev2@gmail.com",
                    role: "NORMAL",
                }])
            } catch (error: any) {
                console.log(error.message)
            }
        })
    })
})