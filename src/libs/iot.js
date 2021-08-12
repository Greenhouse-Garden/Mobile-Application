import URLS from './urls'

class Iot {
  static instance = new Iot()

  get = async (by, IdArduino) => {
      try {
          let request = await fetch(`${URLS.arduino_url}/${by}:${IdArduino}/`)
          let response = await request.json()
          return response
      } catch (error) {
          console.log('HTTP get method error', error)
          throw Error(error)
      }
  }

  post = async body => {
      try {
          let request = await fetch(`${URLS.arduino_url}/createGreenhouse/`,{
              method:'POST',
              headers:{
                  'Content-Type':'application/json',
                  Accept:'application/json',
              },
              body:JSON.stringify(body)
            })
            let response = await request.json()    
            return response

      } catch (error) {
          console.log('HTTP post method error', error)
          throw Error(error)
      }
  }
}

export default Iot;

