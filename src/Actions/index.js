import connectAxios from "../Api/connectAxios";
export const signUpAction = formValues => async dispatch => {
  try {
    const response = await connectAxios.post("http://localhost:3002/user", {
      ...formValues
    });
    console.log(response.data);
    dispatch({
      type: "SIGN_UP",
      payload: response.data
    });
  } catch (exception) {
    console.log(exception);
  }
};
