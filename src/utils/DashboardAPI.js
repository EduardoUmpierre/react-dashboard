import axios from 'axios'

const API = 'http://dev.4all.com:3050'

const getURL = endpoint => API + endpoint
const getWidgets = () => axios.get(getURL('/widgets'))
const getPageViews = () => axios.get(getURL('/pageViews'))

export default { getWidgets, getPageViews }
