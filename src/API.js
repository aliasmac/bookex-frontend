class API {

    static baseUrl = 'https://still-plateau-95838.herokuapp.com'

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
      .catch(err => console.log('Error in update', err))
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
        }).catch(err => console.log('Error in login', err))
    }

    static logout() {
      const token = localStorage.getItem('authorization')
      return fetch(this.baseUrl + '/users/logout', {
        method: 'POST',
        headers: { 'authorization': token },
      }).catch(err => console.log('Error in logout', err))
    }

  }
  
  window.API = API
  
  export default API