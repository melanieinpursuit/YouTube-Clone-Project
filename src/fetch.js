const URL = process.env.REACT_APP_API_BASE_URL
const key = process.env.REACT_APP_API_KEY
const key2 = process.env.REACT_APP_API_KEY_2



export function getAllVideos (title) {
    return fetch(`${URL}?&maxResults=20&order=relevance&q=${title}&part=snippet&key=${key2}`).then((res) => res.json());
}