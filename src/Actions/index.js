import connectAxios from "../Api/connectAxios";
export const signUpAction = formValues => async dispatch => {
  try {
    console.log(formValues);
    const response = await connectAxios.post("http://localhost:3002/user", {
      ...formValues
    });
    dispatch({
      type: "SIGN_UP",
      payload: response.data
    });
  } catch (exception) {
    console.log(exception);
  }
};
