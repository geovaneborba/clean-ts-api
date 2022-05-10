import { SignUpController } from "./signup"

describe('SignUp Controller', () => {
  it('should return 400 if no name is provided', () => {
    // sistem under test (sut)
    const sut = new SignUpController()

    const httpRequest = {
      body: {
        email: 'johndoe@example.com',
        password: '123456',
        passwordConfirmation: '123456'
      }
    }

    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
  })
})
