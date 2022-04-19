
export const GETmovieS = (data) => {
    return (
        { type: "GET_MOVIES", data: data }
    )
}

export const FetchMovie = () => {
    return (dispatch) => {
        // dispatch(GETmovieS([]))
        fetch('http://192.168.0.12:3001/api')
            .then(response => response.json())
            .then(data => dispatch(GETmovieS(data.movies)));
    }
}






