class User {
  #password
  constructor(username, password) {
    this.username = username
    this.#password = password
  }
  checkPassword(pwd) {
    return this.#password === pwd
  }
}
const u = new User("admin", "1234")
console.log(u.checkPassword("1234"))
