const URL = process.env.REACT_APP_API_BASE_URL
const key = process.env.REACT_APP_API_KEY



export function getAllVideos (title) {
    return fetch(`${URL}?&maxResults=20&order=relevance&q=${title}&part=snippet&key=${key}`).then((res) => res.json());
}