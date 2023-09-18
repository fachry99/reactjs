import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("your Full Name is required"),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(8).max(15).required(),
    confrimPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Full Name..."
        className="form-control"
        {...register("fullName")}
      />
      {errors.fullName && <p>{errors.fullName.message}</p>}
      <input
        type="email"
        placeholder="Email..."
        className="form-control"
        {...register("email")}
      />
      <input
        type="number"
        placeholder="Age..."
        className="form-control"
        {...register("age")}
      />
      <input
        type="password"
        placeholder="Password..."
        className="form-control"
        {...register("password")}
      />
      <input
        type="password"
        placeholder="Confirm Password..."
        className="form-control"
        {...register("confrimPassword")}
      />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
