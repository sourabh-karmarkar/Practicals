const addemployee = () => {
    return (dispatch) => {
        dispatch({ type: "ADD_EMPLOYEE" });
    }
};

export default addemployee;