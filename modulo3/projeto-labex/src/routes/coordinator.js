export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToAdmin = (navigate) => {
    navigate("/admin/trips/list")
}

export const goToApplication = (navigate) => {
    navigate("/trips/application")
}

export const goToCreateTrip = (navigate) => {
    navigate("/admin/trips/create")
}

export const goToListTrip = (navigate) => {
    navigate("/trips/list")
}

export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToTripDetails = (navigate) => {
    navigate("/admin/trips/:id")
}

export const goBack = (navigate) => {
    navigate(-1)
}