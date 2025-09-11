const BASE_TRAILER_URL = "https://www.youtube.com/embed"

export default function findTrailer(videos){
    const trailer = videos.find(video => video.type === "Trailer");
    const url = `${BASE_TRAILER_URL}/${trailer.key}`
    return url;
}