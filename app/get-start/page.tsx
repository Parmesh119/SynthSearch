import Link from 'next/link'
export default function Login() {
  return (
      <>
          <div className="flex justify-center items-center min-h-screen mt-4">
              <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
                  <h2 className="text-3xl font-bold mb-6 text-center text-white">
                      <span className="bg-gradient-to-r text-transparent from-blue-500 to-purple-500 bg-clip-text">
                          SignUp to Start
                      </span>
                  </h2>
                  <form>
                      <div className="mb-6">
                          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                              <i className="fas fa-envelope mr-2"></i>Email
                          </label>
                          <div>
                              <input id="email" type="email" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email" />
                          </div>
                      </div>
                      <div className="mb-6">
                          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                              <i className="fas fa-envelope mr-2"></i>Username
                          </label>
                          <div>
                              <input id="email" type="text" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email" />
                          </div>
                      </div>
                      <div className="mb-6">
                          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                              <i className="fas fa-envelope mr-2"></i>First Name
                          </label>
                          <div>
                              <input id="email" type="text" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email" />
                          </div>
                      </div>
                      <div className="mb-6">
                          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                              <i className="fas fa-envelope mr-2"></i>Last Name
                          </label>
                          <div>
                              <input id="email" type="text" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email" />
                          </div>
                      </div>
                      <div className="mb-6">
                          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                              <i className="fas fa-lock mr-2"></i>Password
                          </label>
                          <div>
                              <input id="password" type="password" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your password" />
                          </div>
                      </div>
                      <div className="flex items-center justify-center">
                          <button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                              SignUp
                          </button>
                      </div>
                      <div className="text-center mt-4">
                          <a href="#" className="text-gray-600 hover:underline">Forgot password?</a>
                      </div>
                  </form>
                  <p className="text-center text-gray-600 mt-6">Already have an account? <Link href="/login" className="text-sky-900"><u>LogIn</u></Link></p>
                  <div className="mt-4">
                      <p className="text-center text-gray-600">Or SignUp with:</p>
                      <div className="flex justify-center mt-2">
                          <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full py-2 px-4 mx-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                              </svg>
                          </a>
                          <a href="#" className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full mx-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                              </svg>
                          </a>
                          <a href="#" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mx-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                  <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                              </svg>
                          </a>
                      </div>
                  </div>
              </div>
          </div>

      </>
  )
}