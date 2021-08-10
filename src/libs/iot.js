import URLS from './urls'

class iot {
  static instance = new iot()

  get = async IdArduino => {
      try {
          let request = await fetch(`${URLS.arduino_url}/_id:${IdArduino}/`)
          let response = await request.json()
          return response
      } catch (error) {
          console.log('HTTP get method error', err)
          throw Error(error)
      }
  }
  post = async sensor => {
      try {
          let request = await fetch(`${URLS.arduino_url}/new/`,{
              method:'POST',
              body:JSON.stringify(sensor),
          })
          let response = await request.json()
          return response
      } catch (err) {
          console.log('HTTP post method error', err)
          throw Error(err)
      }
  }
}

export default iot;