export const fetchBeers = async (search: string) => {
  let searchParam
  search ? searchParam = `?beer_name=${search}` : searchParam = ''

  try {
    const response = await fetch(`https://api.punkapi.com/v2/beers${searchParam}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    return response.json()
  } catch (error) {
    return error
  }
}
