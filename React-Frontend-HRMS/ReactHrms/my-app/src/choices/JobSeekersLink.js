import React from "react";
import { Button, Card, Image,Icon} from "semantic-ui-react";
import { NavLink } from "react-router-dom";

function JobSeekersLink() {
  return (
    <div>
      <Card>
        <Card.Content>
          <Image
            className="images"
            src="https://icon-library.com/images/job-seeker-icon/job-seeker-icon-16.jpg"
          />
          
          <Card.Header> <Icon name="angle double right"></Icon>JobSeeker List</Card.Header>
          <Card.Meta>Berkay ERGÜN</Card.Meta>
          <Card.Description>
          <strong>JobSeeker</strong> Listesini görmek için butona tıklayınız.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button as={NavLink} to="/JobSeekers" color="red">
            See JobSeekers List
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
}

export default JobSeekersLink;
