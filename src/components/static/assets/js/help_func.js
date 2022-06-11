
export const fetAPI = (session, api) =>{
    fetch(api)
    .then(res => res.json())
    .then(
        (result) => {
            session.setState({
                items: result
            })
        },
        (error) => {
            console.log(error.message)
            return error
        }
    )
}

export const checkEnv = ()=> {
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.hostname === "192.168.0.174" || window.location.hostname === "") {
        return "local"
    }
    else{
        return "production"
    }
}