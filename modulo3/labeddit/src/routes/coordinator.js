export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToSignUp = (navigate) => {
    navigate("/signup")
}

export const goToPost = (navigate, id) => {
    navigate(`/post/${id}`)
}

export const goToFeed = (navigate) => {
    navigate("/feed")
}

export const goBack = (navigate) => {
    navigate(-1)
} 