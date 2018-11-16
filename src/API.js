class API {

  static baseUrl = 'https://still-plateau-95838.herokuapp.com'

  // USER ROUTES
  static signup (userObj) {
    return fetch(this.baseUrl + '/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userObj)
    }).then(resp =>  {  
        let token = resp.headers.get("authorization")
        token && localStorage.setItem('authorization', token)
        return resp.json()
    }).catch(err => console.log('Error in signup', err))
  }

  static update (userObj) {
    const token = localStorage.getItem('authorization')
    return fetch(this.baseUrl + '/users/profile', {
      method: 'PATCH',
      headers: { 
        'Content-Type': 'application/json',
        'authorization': token
      },
      body: JSON.stringify(userObj)
    }).then(resp => resp.json())
  }

  // Will return a user object
  static getUser () {
    const token = localStorage.getItem('authorization')
    return fetch(this.baseUrl + '/users/profile', {
      headers: {'authorization': token}
    }).then(resp => resp.json())
  }

  // Will return a user object
  static login (username, password) {
    return fetch(this.baseUrl + '/users/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username,
        password
      })
    }).then(resp => {
      let token = resp.headers.get("authorization")
      localStorage.setItem('authorization', token)
      return resp.json()
      })
  }

  static logout() {
    const token = localStorage.getItem('authorization')
    return fetch(this.baseUrl + '/users/logout', {
      method: 'POST',
      headers: { 'authorization': token },
    })
  }

  // BOOK ROUTES
  static getBooks(query, resultsOffset=0) {
    return fetch(this.baseUrl +
         `/books?q=${query}&start=${resultsOffset}`)
      .then(resp => resp.json())
  }

  static getSuggestions() {
    return fetch(this.baseUrl + '/books/suggestions')
      .then(resp => resp.json())
  }

  // LOAN ROUTES
  static loan(book, id) {
    return fetch(this.baseUrl + '/loans', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: id,
        book: book
      })
    }).then(resp => {
      return resp.json()
    }).catch(err => console.log('Error in loaning', err))
  }

  static userLoans(id) {
    return fetch(this.baseUrl + `/loans/${id}`)
      .then(resp => resp.json())
  }

  static deleteFromLoans(loanId) {
    return fetch(this.baseUrl + `/loan/${loanId}`, {
      method: 'DELETE'
    })
  }

  static getAllLoanedBooks() {
    return fetch(this.baseUrl + '/loans')
      .then(resp => resp.json())
  }

}
  
export default API

