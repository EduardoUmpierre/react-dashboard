import axios from 'axios'

const API = 'http://dev.4all.com:3050'

const getURL = endpoint => API + endpoint
const getWidgets = () => axios.get(getURL('/widgets'))
const getPageViews = () => axios.get(getURL('/pageViews'))
const getMessages = () => axios.get(getURL('/messages'))

const postMessage = data => axios.post(getURL('/messages'), data)

export default { getWidgets, getPageViews, getMessages, postMessage }
