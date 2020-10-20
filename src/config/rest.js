const basePath = 'https://gorest.co.in/public-api/'

const methodGetFetch = async urlExtraPath => {
   const httpRequest = await fetch(`${basePath}${urlExtraPath}`)
   if (httpRequest.ok) {
     const { data } = await httpRequest.json()
     return data
   }
   throw new Error('Ha ocurrido un error con la petición')
}

export {
  methodGetFetch
}