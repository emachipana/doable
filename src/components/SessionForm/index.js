import { Formik } from "formik";
import { Button, Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import { useAuth } from "../../context/auth-context";

function SessionForm({ location }) {
  const { login, signup } = useAuth();

  function validate(values) {
    const errors = {};

    const { email, password } = values;

    if(email === "") {
      errors.email = "This field is required";
    }else if(!/.+@.+\.[A-Za-z]+$/.test(values.email)) {
      errors.email = "Email is invalid";
    }

    if(password === "") {
      errors.password = "This field is required";
    }else if(password.length <= 6) {
      errors.password = "At least 6 characters long";
    }

    return errors;
  }

  const initialValues = { email: "", password: "" };

  function handleSubmit(values) {
    if(location === "/login"){
      login(values);
    }else {
      signup(values);
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validate}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid
      }) => (
        <>
        
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email"
                type="email"
                name="email"
                placeholder="example@mail.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                invalid={errors.email && touched.email}
                valid={!errors.email && touched.email}
              />
              { errors.email && touched.email && (
                <FormFeedback>{ errors.email }</FormFeedback>
              ) }
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password"
                type="password"
                name="password"
                placeholder="************"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                invalid={errors.password && touched.password}
                valid={!errors.password && touched.password}
              />
              { errors.password && touched.password && (
                <FormFeedback>{ errors.password }</FormFeedback>
              ) }
            </FormGroup>
            <Button
              color="primary"
              block
              disabled={!isValid}
              type="submit"
            >
              {location === "/login" ? "Login" : "Signup"}
            </Button>
          </Form>
        </>
      )}
    </Formik>
  );
}

export default SessionForm;
