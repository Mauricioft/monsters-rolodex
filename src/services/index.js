const baseUrl = 'https://jsonplaceholder.typicode.com/users'

export default {
  async getList() {
    const response = await fetch(baseUrl)
    const data = await response.json()
    return data
  }
}