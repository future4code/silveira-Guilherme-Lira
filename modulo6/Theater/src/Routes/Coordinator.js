export const goToHome = (navigate) => {
    navigate(`/home`)
}

export const goToMovieDetails = (navigate, id) => {
    navigate(`/movie/${id}`) 
}

export const goBack = (navigate) => {
    navigate(-1)
}
