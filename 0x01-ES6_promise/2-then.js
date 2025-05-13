export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      return ({ status: 200, body: 'success' })
      console.log('Got a response from the API')
    });
    .catch(() => {
      return (new Error())
    });
    .finally(() => {
      console.log('Got a response from the API');
    });
}
