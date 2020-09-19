export function list(state = [], action) {
    switch (action.type) {
        case "LIST_FETCH_DATA_SUCCESS":
            return action.list;
        default:
            return state;

    }
}