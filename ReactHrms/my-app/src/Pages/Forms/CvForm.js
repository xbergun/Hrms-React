import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { assertValidExecutionArguments } from "graphql/execution/execute";
import axios from "axios";
import { PostAdd } from "../../services/JobAdvertisementService";
import { PostCv } from "../../services/CvService";

export default function CvForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    PostCv(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <input {...register("id", { required: true })} placeholder="id" />

              <input
                {...register("firstName", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
                placeholder="First Name"
              />
              {errors?.firstName?.type === "required" && (
                <p>Bu Alan Zorunludur.</p>
              )}
              {errors?.firstName?.type === "pattern" && (
                <p>Sadece Alfabetik karakter Kullanınız</p>
              )}
            </Grid.Column>
            <Grid.Column width={8}>
              <input
                {...register("lastName", { required: true })}
                placeholder="Last Name"
              />
              {errors?.lastName?.type === "required" && (
                <p>Bu Alan Zorunludur.</p>
              )}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
              <input
                {...register("phoneNumber", { required: true })}
                placeholder="Phone Number"
              />
              {errors?.phoneNumber?.type === "required" && (
                <p>Bu Alan Zorunludur.</p>
              )}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={8}>
              <select {...register("empAddress", { required: true })}>
                <option value="">which you looking in city</option>
                <option value="Istanbul">İstanbul</option>
                <option value="Ankara">Ankara</option>
                <option value="Bursa">Bursa</option>
                <option value="İzmir">İzmir</option>
                <option value="Antalya">Antalya</option>
              </select>
              {errors?.empAddress?.type === "required" && (
                <p>Bu Alan Zorunludur.</p>
              )}
            </Grid.Column>
            <Grid.Column width={8}>
              <select {...register("school", { required: true })}>
                <option value="">Select work type</option>
                <option value="Homeoffice">Home Office</option>
                <option value="male">In Office</option>
              </select>
              {errors?.school?.type === "required" && (
                <p>Bu Alan Zorunludur.</p>
              )}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
              <select {...register("workExperience", { required: true })}>
                <option value="">Select Job</option>
                <option value="SoftwareDev">Software Developer</option>
                <option value="Game Dev">Game Developer</option>
                <option value="Front">Frontend Developer</option>
                <option value="Human">Human Management</option>
                <option value="House Keeper">House Keeper</option>
                <option value="Asistan">Asistant</option>
              </select>

              {errors?.workExperience?.type === "required" && (
                <p>Bu Alan Zorunludur.</p>
              )}
            </Grid.Column>
            <Grid.Column width={8}>
              <select {...register("coverLetter", { required: true })}>
                <option value="">Select Operation Time</option>
                <option value="Fulltime">Full Time</option>
                <option value="Parttime">Part Time</option>
                <option value="Parttime">Intern</option>
              </select>

              {errors?.coverLetter?.type === "required" && (
                <p>Bu Alan Zorunludur.</p>
              )}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <input
                {...register("github", { required: true, maxLength: 360 })}
                placeholder="Please tell us your experiences"
              />
              <input
                {...register("images", { required: true, maxLength: 360 })}
                placeholder="Please tell us your experiences"
              />
              {errors?.github?.type === "required" && (
                <p>Bu Alan Zorunludur.</p>
              )}

              {errors?.github?.type === "maxLength" && (
                <p>Maximum 360 karakter Kullanınız.</p>
              )}
              <input type="submit" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </form>
      {/* <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>qwdqdqwdq</Table.HeaderCell>
            <Table.HeaderCell>Header</Table.HeaderCell>
            <Table.HeaderCell>Header</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobEmployers.map((jobemployer) => (
            <Table.Row key={jobemployer.id}>
              <Table.Cell>{jobemployer.id}</Table.Cell>
              <Table.Cell>{jobemployer.user_companyName}</Table.Cell>
              <Table.Cell>{jobemployer.job_id}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table> */}
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
    </div>
  );
}
