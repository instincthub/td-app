
export const fetAPI = (session, api, reqOptions) =>{
    let status = null
    fetch(api, reqOptions)
    .then(res => {
        status=res.status; 
        return res.json()
    })
    .then(
        (result) => {
            session.setState({
                items: result,
                status: status
            })
            console.log(result)
            console.log(status)
        },
        (error) => {
            console.log(error.status)
            session.setState({
                error: error
            })
            return error.message
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

export const spinBtn = (form, display, status) =>{
    form.querySelector('button').disabled = status; // this disable the button
    form.disabled = status; // This disables the whole form via the fieldset
    form.querySelector('button .bt-spinner').style.display = display;
}