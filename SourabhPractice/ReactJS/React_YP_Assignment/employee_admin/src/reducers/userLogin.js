const initialState = {
    loginRequested: false,
    employeeAddFlag : false
};

const userLogin = (state = initialState, action) => 
{
    switch (action.type)
    {
        case "LOGIN_REQUESTED":
            return { loginRequested: true };
        case "ADD_EMPLOYEE":
            return { employeeAddFlag: true };
        default:
            return state;
    }
};

export default userLogin;