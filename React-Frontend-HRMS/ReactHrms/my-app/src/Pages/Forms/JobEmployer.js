import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import { useForm } from "react-hook-form";

export default function JobEmployer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div>
      <br />
      <Segment inverted color="purple">
        <form onSubmit={handleSubmit(onSubmit)} color="pink" method="POST">
          <Grid>
            <Grid.Row>
              <Grid.Column width={3}>
                <input
                  {...register("Id", {
                    required: true,
                    min: 0,
                    pattern: [1 - 10000],
                  })}
                  placeholder="Id"
                />
                {errors?.Id?.type === "required" && <p>Bu Alan Zorunludur.</p>}
                {errors?.Id?.type === "pattern" && (
                  <p>Sadece Rakam Kullanınız</p>
                )}
              </Grid.Column>
              <Grid.Column width={7}>
                <input
                  {...register("Employer", {
                    required: true,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                  placeholder="Company Name"
                />
                {errors?.CompanyName?.type === "required" && (
                  <p>Bu Alan Zorunludur.</p>
                )}
                {errors?.CompanyName?.type === "pattern" && (
                  <p>Sadece Alfabetik karakter Kullanınız</p>
                )}
              </Grid.Column>
              <Grid.Column width={6}>
                <input
                  {...register("JobPosition", { required: true })}
                  placeholder="Department Name"
                />
                {errors?.JobPosition?.type === "required" && (
                  <p>Bu Alan Zorunludur.</p>
                )}
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={8}>
                <input
                  {...register("Minsalary", {
                    required: true,
                    min: 0,
                    pattern: [1 - 100000],
                  })}
                  placeholder="Min Salary"
                />
                {errors?.Minsalary?.type === "required" && (
                  <p>Bu Alan Zorunludur.</p>
                )}
                {errors?.Minsalary?.type === "pattern" && (
                  <p>Sadece Rakam Kullanınız</p>
                )}
              </Grid.Column>
              <Grid.Column width={8}>
                <input
                  {...register("MaxSalary", { required: true, max: 50000 })}
                  placeholder="Max Salary"
                />
                {errors?.DepartmentName?.type === "required" && (
                  <p>Bu Alan Zorunludur.</p>
                )}
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={8}>
                <select {...register("City", { required: true })}>
                  <option value="">Select City</option>
                  <option value="Istanbul">İstanbul</option>
                  <option value="Ankara">Ankara</option>
                  <option value="Bursa">Bursa</option>
                  <option value="İzmir">İzmir</option>
                  <option value="Antalya">Antalya</option>
                </select>
                {errors?.City?.type === "required" && (
                  <p>Bu Alan Zorunludur.</p>
                )}
              </Grid.Column>
              <Grid.Column width={8}>
                <select {...register("WorkType", { required: true })}>
                  <option value="">Select work type</option>
                  <option value="Homeoffice">Home Office</option>
                  <option value="male">In Office</option>
                </select>
                {errors?.Worktype?.type === "required" && (
                  <p>Bu Alan Zorunludur.</p>
                )}
              </Grid.Column>
            </Grid.Row>
            <Grid.Column width={8}>
            <input
                  {...register("Email", { required: true })}
                  placeholder="Email"
                />
                {errors?.Email?.type === "required" && (
                  <p>Bu Alan Zorunludur.</p>
                )}
            </Grid.Column>
            <Grid.Column width={8}>
            <input
                  {...register("Phone", { required: true })}
                  placeholder="Phone"
                />
                {errors?.Phone?.type === "required" && (
                  <p>Bu Alan Zorunludur.</p>
                )}
            </Grid.Column>
            <Grid.Column width={16}>
              <input
                {...register("JobDescription", { required: true })}
                placeholder="Job Description"
              />
              {errors?.JobDescription?.type === "required" && (
                <p>Bu Alan Zorunludur.</p>
              )}
              <input type="submit" />
            </Grid.Column>
          </Grid>
        </form>
      </Segment>
    </div>
  );
}
