export const goToLogin = (navigate) => {
    navigate('/login')
}

export const goBack = (navigate) => {
    navigate(-1)
}

export const goToFeed = (navigate) => {
    navigate('/')
}

export const goToSignUp = (navigate) => {
    navigate('/signup')
}

export const goToSignUpAddress = (navigate) => {
    navigate('/signup/address')
}

export const goToRestaurant = (navigate, id) => {
    navigate(`/feed/${id}`)
}
