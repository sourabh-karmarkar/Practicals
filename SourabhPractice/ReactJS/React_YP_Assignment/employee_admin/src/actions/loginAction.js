const login = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: "LOGIN_REQUESTED" });
        if(email === "admin" && password === "admin")
        {
            console.log(email, password)
            
        }
        else
        {
            console.log("Invalid Credentials. Please Login Again")
        }
    }
};

export default login;