export const INFO_FETCHED = 'INFO_FETCHED'
export const NEW_INFO = 'NEW_INFO'

export function fetchInfo() {
  return (dispatch) => {
    // this is for fetching json from a url
    fetch('http://www.json-generator.com/api/json/get/coOfPEdCGa?indent=2', {
      method: 'GET'
    })
    // this will get the response from json file url
    .then(response => response.json())
    // this will print json in console.
    .then(json => {
      console.log('json json json', json)
      dispatch(loadInfo(json))
    })
    // if there are any errors .catch will through an error on console and json will not printed there untill the error is removed
    .catch(error => {
      console.log('error error error', error)
    })
  }
}

export function loadInfo(results) {
  return {
    type : INFO_FETCHED,
    payload : results
  }
}
