export const server_dispatch = action => {

    console.log("in dispatcher")
    const call_server = (url) =>
        fetch(url)
            .then(res => res.ok ? res.json() : Promise.reject(res.status))

    switch (action.type) {
        case 'warnings': {
            const warnings = call_server('http://localhost:8080/warnings')
            return {...action, warnings}
        }
        default:
            return action
    }
}