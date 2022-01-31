import {
  Grid,
  Image,
  Divider,
  Segment,
  Header,
  Input,
} from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import JobAdvertisementService from "../services/JobAdvertisementService";
import { useDispatch } from "react-redux";
import { addToFavourites, removeFromFavourites } from "../store/actions/favouritesActions";

function HomeJobCard() {
  const [JobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertsService = new JobAdvertisementService();
    jobAdvertsService
      .getAdvertisement()
      .then((result) => setJobAdverts(result.data));
  }, []);

  


  return (
    <div>
      <Segment basic>
        <br />
        <Header color="violet" textAlign="center">
          <span className="headline-1">İlanlara Göz Atın</span>
        </Header>
        <br />
      </Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column width={18}>
            <div class="ui cards ui-cards centered aligned ">
                
              {JobAdverts.map((adv) => (
                 
                <div class="card " key={adv.id}>
                  <div class="content">
                    <div class="header center">{adv.employer}</div>
                    <div class="meta">{adv.city}</div>
                    <div class="description">{adv.jobPosition}</div>
                  </div>
                  <div class="extra content">
                    <div class="ui two buttons">
                      <Button
                        className="ui basic green button"
                        basic
                        color="pink"
                        as={NavLink}
                        to={`/JobAdverts/${adv.id}`}
                      >
                        GÖZ AT
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default HomeJobCard;
