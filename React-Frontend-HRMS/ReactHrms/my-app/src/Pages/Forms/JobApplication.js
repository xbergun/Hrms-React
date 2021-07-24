import React from "react";
import { Grid } from "semantic-ui-react";
import { useForm } from "react-hook-form";
export default function JobApplication() {
  
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data),
  window.alert("İşleminiz Personel tarafından onaylandıktan sonra yayına geçecektir.")
  );

 

 
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <input
                {...register("FirstName", { required: true , pattern: /^[A-Za-z]+$/i})}
                placeholder="First Name"
              />
              {errors?.FirstName?.type === "required" && (
                <p>Bu Alan Zorunludur.</p>
              )}
              {errors?.FirstName?.type === "pattern" && (
        <p>Sadece Alfabetik karakter Kullanınız</p>
      )}
            </Grid.Column>
            <Grid.Column width={8}>
              <input
                {...register("LastName", { required: true })}
                placeholder="Last Name"
              />
              {errors?.LastName?.type === "required" && (
                <p>Bu Alan Zorunludur.</p>
              )}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
              <input
                {...register("BirthDate", {
                  required: true,
                  min: 0,
                  pattern: [1 - 9],
                })}
                placeholder="Birth Date"
              />
              {errors?.BirthDate?.type === "required" && (
                <p>Bu Alan Zorunludur.</p>
              )}
              {errors?.BirthDate?.type === "pattern" && (
                <p>Sadece Rakam Kullanınız</p>
              )}
            </Grid.Column>
            <Grid.Column width={8}>
              <input
                {...register("PhoneNumber", { required: true })}
                placeholder="Phone Number"
              />
              {errors?.PhoneNumber?.type === "required" && (
                <p>Bu Alan Zorunludur.</p>
              )}
            </Grid.Column>
          </Grid.Row>
         
          <Grid.Row>
            <Grid.Column width={8}>
              <select {...register("City", { required: true })}>
                <option value="">which you looking in city</option>
                <option value="Istanbul">İstanbul</option>
                <option value="Ankara">Ankara</option>
                <option value="Bursa">Bursa</option>
                <option value="İzmir">İzmir</option>
                <option value="Antalya">Antalya</option>
              </select>
              {errors?.City?.type === "required" && <p>Bu Alan Zorunludur.</p>}
            </Grid.Column>
            <Grid.Column width={8}>
              <select {...register("Worktype", { required: true })}>
                <option value="">Select work type</option>
                <option value="Homeoffice">Home Office</option>
                <option value="male">In Office</option>
              </select>
              {errors?.Worktype?.type === "required" && (
                <p>Bu Alan Zorunludur.</p>
              )}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
              <select {...register("Job", { required: true })}>
                <option value="">Select Job</option>
                <option value="SoftwareDev">Software Developer</option>
                <option value="Game Dev">Game Developer</option>
                <option value="Front">Frontend Developer</option>
                <option value="Human">Human Management</option>
                <option value="House Keeper">House Keeper</option>
                <option value="Asistan">Asistant</option>
              </select>
              
              {errors?.Job?.type === "required" && (
                <p>Bu Alan Zorunludur.</p>
              )}
            </Grid.Column>
            <Grid.Column width={8}>
              <select {...register("OperationTime", { required: true })}>
                <option value="">Select Operation Time</option>
                <option value="Fulltime">Full Time</option>
                <option value="Parttime">Part Time</option>
                <option value="Parttime">Intern</option>
              </select>
              
              {errors?.OperationTime?.type === "required" && (
                <p>Bu Alan Zorunludur.</p>
              )}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
            <input
                {...register("WorkExperience", { required: true , maxLength:360})}
                placeholder="Please tell us your experiences"
              />
              {errors?.Description?.type === "required" && (
                <p>Bu Alan Zorunludur.</p>
              )}
              
              {errors?.Description?.type === "maxLength" && (
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
