import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Card, Image,Icon } from "semantic-ui-react";

function UsersLink() {
  return (
    <div>
      <Card>
        <Card.Content>
          <Image
            className="images"
            src="http://simpleicon.com/wp-content/uploads/users.png"
          />
        
          <Card.Header> <Icon name="angle double right"></Icon>User List</Card.Header>
          <Card.Meta>Berkay Ergün</Card.Meta>
          <Card.Description>
          <strong>User</strong> Listesini görmek için butona tıklayınız.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button as={NavLink} to="/users" color="red">
            
            See Users List
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
}

export default UsersLink;
