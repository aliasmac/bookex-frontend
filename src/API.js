class API {
    static init () {
      this.baseUrl = 'https://still-plateau-95838.herokuapp.com'
      this.loginUrl = this.baseUrl + '/users/login'
    }

    static signup (username, password) {
        return fetch('https://still-plateau-95838.herokuapp.com/users', {
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


    static login (username, password) {
      return fetch('https://still-plateau-95838.herokuapp.com/users/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          username,
          password
        })
      }).then(resp => resp.json())
    }
  
  
    


  }
  
  API.init()
  
  window.API = API
  
  export default API