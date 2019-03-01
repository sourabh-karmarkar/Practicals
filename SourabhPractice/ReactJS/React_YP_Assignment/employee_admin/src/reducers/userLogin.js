const initialState = {
    loginRequested: false,
};

const userLogin = (state = initialState, action) => 
{
    switch (action.type)
    {
        case "LOGIN_REQUESTED":
            return { loginRequested: true };
        default:
            return state;
    }
};

export default userLogin;