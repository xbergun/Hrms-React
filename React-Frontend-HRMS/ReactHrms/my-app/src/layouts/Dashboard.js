import React from "react";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router-dom";
import EmployeersList from "../Pages/EmployeersList";
import CvList from "../Pages/CvList";
import EmployersList from "../Pages/EmployersList";
import JobSeekersList from "../Pages/JobSeekersList";
import UsersList from "../Pages/UsersList";
import List from "./List";
import Login from "./Login/Login";
import JobApplication from "../Pages/Forms/JobApplication";
import JobAdvertsList from "../Pages/JobAdvertsList";
import JobEmployer from "../Pages/Forms/JobEmployer";
import JobAdvertsDetail from "../Pages/Detail/JobAdvertsDetail";
import CvDetails from "../Pages/Detail/CvDetails";
import JobEmployersDetail from "../Pages/Detail/JobEmployersDetail";
import UserDetail from "../Pages/Detail/UserDetail";
import Favourities from "./Favourities";
import { ToastContainer } from "react-toastify";
import HighlightedContent from "./HighlightedContent";
import HomeJobCard from "./HomeJobCard";
import CvForm from "../Pages/Forms/CvForm";

export default function Dashboard() {
  return (
    <div>
       <ToastContainer position="bottom-right"/>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={16}>
            <Route exact path="/" component={HighlightedContent} />
            <Route exact path="/" component={List} />
            <Route exact path="/" component={HomeJobCard} />

            <Route path="/Login" component={Login} />
            <Route exact path="/Employeers" component={EmployeersList} />
            <Route exact path="/Cv" component={CvList} />
            <Route exact path="/Employers" component={EmployersList} />
            <Route exact path="/JobSeekers" component={JobSeekersList} />
            <Route exact path="/Users" component={UsersList} />
            <Route exact path="/List" component={List} />
            <Route exact path="/JobAdverts" component={JobAdvertsList} />
            <Route exact path="/JobEmployer" component={JobEmployer} />
            <Route
              exact
              path="/JobAdverts/:id"
              component={JobAdvertsDetail}
            />
            <Route exact path="/Cv/:id" component={CvDetails} />
            <Route exact path="/Employers/:id" component={JobEmployersDetail} />

            <Route exact path="/JobApplication" component={JobApplication} />
            <Route exact path="/CvForm" component={CvForm} />

            <Route exact path="/Users/:id" component={UserDetail} />
            <Route exact path="/favourities" component={Favourities} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
