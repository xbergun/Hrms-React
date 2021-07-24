import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";
function Login() {

  function submit(params) {
    window.alert("Kayıt Olundu")
  }
  return (
    <div>
      <Segment color="red">
        <Form color="red">
          <Form.Group widths="equal">
            <Form.Input fluid label="First name" placeholder="First name" />
            <Form.Input fluid label="Last name" placeholder="Last name" />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input fluid label="E-Mail" placeholder="Email" />
            <Form.Input  fluid label="E-Mail Again" placeholder="E-Mail Again" />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input type="password" fluid label="Password" placeholder="Password" />
            <Form.Input type="password" fluid label="Password Again" placeholder="Password Again" />
          </Form.Group>
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Button onClick={submit} type="submit">Submit</Button>
        </Form>
      </Segment>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br>
    </div>
  );
}

export default Login;
