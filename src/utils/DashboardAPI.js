import axios from 'axios'

const API = 'http://dev.4all.com:3050'

const getURL = endpoint => API + endpoint
const getWidgets = () => axios.get(getURL('/widgets'))

export default { getWidgets }
