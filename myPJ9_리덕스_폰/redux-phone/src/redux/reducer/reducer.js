let initialState = {
    contactList: [],
};

function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "add_contact":
            return {
                ...state,
                contactList: [
                    ...state.contactList,
                    {
                        userName: payload.userName,
                        userNum: payload.userNum,
                    },
                ],
            };
        default:
            return { ...state };
    }
}

export default reducer;
