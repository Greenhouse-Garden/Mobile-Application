import URLS from './urls'
import Storage from './storage'

class UserSession {
  static instance = new UserSession()
  //
  login = async body => {
      try {
      let request = await fetch(`${URLS.django_url}/users/login/`, {  //saves the API url in request
          method:'POST',
          headers:{ 
            'Content-Type':'application/json',
            Accept:'application/json'
          },
          body: JSON.stringify(body), //saves the body in a json
     })
      let response = await request.json()
      try { //tries to save the user token using username as identifier
          let key = `token-${response.user.username}` 
          await Storage.instance.store(key, response.token) //saves the key
          key = `id-${response.user.username}` //saves the id using username as identifier
          await Storage.instance.store(key, JSON.stringify(response.user)) //stores the data as a json
          return true
      } catch (error) {
          return response
      }
      } catch (error) {
      throw Error(error)
      }
  }
//Deletes sensitive data when you log out
  logout = async () => {
      try {
      const allkeys = await Storage.instance.getAllKeys()
      const tokens = allkeys.filter(key => key.includes('token-'))
      await Storage.instance.multiRemove(tokens)
      const ids = allkeys.filter(key => key.includes('id-'))
      await Storage.instance.multiRemove(ids)
      console.log(allkeys)
      return true
      } catch (error) {
      console.log('Logout error', error)
      return false
      }
  }
    
//Gets sensiititve user data and stores it in a json
  getUser = async () => {
    try {
      const allKeys = await Storage.instance.getAllKeys()
      const data = allKeys.filter(key => key.includes('id-'))
      const user = await Storage.instance.get(data.toString())
      return JSON.parse(user)
    } catch (error) {
      console.log("Get user id error", error)
    }
  }
//generates and stores user token using username as identifier
  getToken = async username => {
    try {
      const key = `token-${username}`
      return await Storage.instance.get(key)
      } catch (error) {
        console.log('getToken error', error)
      }
  }
  
//Receives and sends sensitive data to change the profile information
  editProfile = async (id, token, body) => {
     let uploadData = new FormData();
    uploadData.append('profile.profile_picture', {
      type: 'image/jpg',
      uri: body,
      name: 'profile.jpg'
    });
    //tries to request the patch method from the API and updates the changes to the user information 
    try{
        let request = await fetch (`${URLS.django_url}/profile/${id}/`, {
            method: 'PATCH',
            headers:{
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
              Authorization: `Token ${token}`,
            },
            body: uploadData,
        });
        let response = await request.json();
        return response;
    }catch(err){
        console.log('Edit profile error', err);
    }
  };
}
export default UserSession;