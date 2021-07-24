import React from "react";
import { useSelector } from "react-redux";
import { Grid ,Card,Icon,Button} from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { removeFromFavourites } from "../store/actions/favouritesActions";
import { toast } from "react-toastify";

function Favourites() {
  const { favItems } = useSelector((state) => state.favourites);
 
  const dispatch = useDispatch();
 
  const handleRemoveTheFav=(favItem) =>{
    dispatch(removeFromFavourites(favItem))
    toast.error(`${favItem.advert.employer} Sepetten Silindi!`)

  }

  return (
    <div className="favs">
      <h2 className="yourf">Your Favourites</h2>
      <Grid>
      <Grid.Row>
        
        {favItems.map((favItem) => (
          
            <Grid.Column width={4}>
              <Card  color='red'>
                <Card.Content header={favItem.advert.employer} />
                <Card.Content description={favItem.advert.job_position} />
                <Card.Content description={favItem.advert.city} />
                <Card.Content extra>
                  <Icon name="angle down" /><Button color="red" as={NavLink} to={`/JobAdverts/${favItem.advert.id}`}>See Detail</Button>
                </Card.Content>
                <Card.Content extra>
                <Button color="grey" onClick={()=>handleRemoveTheFav(favItem)}>Remove From Favourites</Button>
                </Card.Content>
              </Card>
              <br></br>
            </Grid.Column>
            
        ))}
        </Grid.Row>
      </Grid>

      {/* <List bulleted>
        {favItems.map((favItem) => (
          <List.Item key={favItem.advert.id}> {favItem.advert.id}  </List.Item>
          
        ))}
      </List> */}
    </div>
  );
}

export default Favourites;
