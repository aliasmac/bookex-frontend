class API {
    static init () {
      this.baseUrl = 'https://still-plateau-95838.herokuapp.com'
      this.loginUrl = this.baseUrl + '/users/login'
    }

    static signup (username, password) {
      return fetch(this.baseUrl + '/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ 
          username,
          password
          })
      }).then(resp =>  {  
          let token = resp.headers.get("authorization")
          localStorage.setItem('authorization', token)
          return resp.json()
      })
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
    static validate () {
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


  }
  
  API.init()
  
  window.API = API
  
  export default API