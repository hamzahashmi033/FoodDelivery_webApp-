import axios from "axios"

export const loadUser = () =>async(dispatch)=>{
    try {
        dispatch({
            type:"loadUserRequest"
        })
        const {data} = await axios.get("http://localhost:4000/api/v1/me",{
            withCredentials: true,
        })
        dispatch({
            type:"loadUserSuccess",
            payload:data.user
        })
    } catch (error) {
        dispatch({
            type:"loadUserFail",
            payload:error.response.data.message
        })
    }
}
export const logoutUser = () =>async(dispatch)=>{
    try {
        dispatch({
            type:"logOutUserRequest"
        })
         await axios.get("http://localhost:4000/api/v1/logout",{
            withCredentials: true,
        })
        dispatch({
            type:"logOutUserSuccess",
        })
    } catch (error) {
        dispatch({
            type:"logOutUserFail",
            payload:error.response.data.message
        })
    }
}