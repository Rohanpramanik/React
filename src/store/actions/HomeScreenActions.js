export const test = 'test';
export function testfunc(data) {
    return dispatch =>
        dispatch({
            type: test,
            payload: data
        })
}
