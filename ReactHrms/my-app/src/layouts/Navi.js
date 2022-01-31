import React, { useState } from "react";
import { Container, Menu, Label } from "semantic-ui-react";
import SignIn from "./Login/SignIn";
import SignOut from "./Login/SignOut";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
function Navi() {
  const { favItems } = useSelector((state) => state.favourites);
  const [isAuthenticated, setisAuthenticated] = useState(true);
  const history = useHistory();

  function handlerSignOut() {
    setisAuthenticated(false);
    history.push("/");
  }
  function handlerSignIn() {
    setisAuthenticated(true);
  }

  return (
    <div>
      <Menu color="purple" inverted fixed="top" size="large">
        <Container>
          <Menu.Item as={NavLink} to="/" name="Anasayfa" />
          <Menu.Item as={NavLink} to="/JobEmployer" name="İş İlani Ver" />
          <Menu.Item
            as={NavLink}
            to="/JobApplication"
            name="İş Başvurusu Yap"
          />
          <Menu.Item
            as={NavLink}
            to="/CvForm"
            name="Cv"
          />

          <Menu.Menu position="right">
            <Menu.Item
              as={NavLink}
              to="/favourities"
              position="right"
              name={"Favoriler" + (favItems.length >0 ? favItems.length : "")}
            />
            {isAuthenticated ? (
              <SignIn signout={handlerSignOut} />
            ) : (
              <SignOut SignIn={handlerSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}

export default Navi;
