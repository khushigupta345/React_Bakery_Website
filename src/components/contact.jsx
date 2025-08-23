import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import bgImage from "../assets/cake.jpg";

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .matches(/^[a-zA-Z0-9._%+-]+@gmail.com$/, "Enter a valid Gmail address"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password required"),
  tel: Yup.string()
    .required("Enter phone number")
    .matches(/^\+?\d{10,14}$/, "Enter a valid phone number"),
  datetime: Yup.string().required("Select date & time"),
  file: Yup.mixed().test("required", "Upload a file", (value) => {
    return value && value.length > 0;
  }),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    console.log("Uploaded File:", data.file[0]);
    alert("Form submitted successfully!");
    reset();
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl space-y-5"
      >
        <h2 className="text-3xl font-bold text-center mb-6 underline decoration-4 decoration-pink-600">
          Contact Form
        </h2>

        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            {...register("name")}
            placeholder="Enter your full name"
            className="border p-2 w-full rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            {...register("email")}
            placeholder="example@gmail.com"
            className="border p-2 w-full rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            {...register("password")}
            placeholder="Enter password"
            className="border p-2 w-full rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Date & Time</label>
          <input
            type="datetime-local"
            {...register("datetime")}
            className="border p-2 w-full rounded"
          />
          {errors.datetime && (
            <p className="text-red-500 text-sm">{errors.datetime.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">File</label>
          <input
            type="file"
            {...register("file")}
            className="border p-1 w-full rounded"
          />
          {errors.file && (
            <p className="text-red-500 text-sm">{errors.file.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone</label>
          <input
            type="tel"
            {...register("tel")}
            placeholder="+911234567890"
            className="border p-2 w-full rounded"
          />
          {errors.tel && (
            <p className="text-red-500 text-sm">{errors.tel.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
          }
