import Link from 'next/link'
export default function Login() {
  return (
      <>
          <div className="flex justify-center items-center min-h-screen py-8 bg-stone-300">
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