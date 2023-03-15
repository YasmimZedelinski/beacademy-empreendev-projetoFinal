export default async function callApi(apiRoute) {
  try {
    const apiCall = await fetch(apiRoute)
    const reqBody = await apiCall.json()
    return reqBody
  } catch (e) {
    return false
  }
}
