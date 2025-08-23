

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import bgImage from '../assets/cake.jpg'

const schema = Yup.object().shape({
name: Yup.string().required("Name is required"),
email: Yup.string()
.required("Email is required")
.matches(/^[a-zA-Z0-9._%+-]+@gmail.com$/, "Enter a valid Gmail address"),
password: Yup.string().min(6, "Password must be at least 6 characters").required("Password required"),
number: Yup.number().typeError("Number required").required("Number required"),
checkbox: Yup.boolean().oneOf([true], "Accept terms is required"),
color: Yup.string().required("Pick a color"),
date: Yup.string().required("Select a date"),
datetime: Yup.string().required("Select date & time"),
file: Yup.mixed()
  .test("required", "Upload a file", value => value && value.length > 0),
month: Yup.string().required("Select a month"),
gender: Yup.string().required("Choose an option"),
range: Yup.string().required("Pick a range"),
search: Yup.string().required("Search required"),
tel: Yup.string()
  .required("Enter phone number")
  .matches(/^\+?\d{10,14}$/, "Enter a valid phone number"),
time: Yup.string().required("Pick time"),
url: Yup.string().url("Enter valid URL").required("Enter URL"),
week: Yup.string().required("Pick a week"),
});

export default function Contact() {
const { register, handleSubmit, reset, formState: { errors }, watch } = useForm({
resolver: yupResolver(schema),
});

const rangeValue = watch("range",0); 
const onSubmit = (data) => {
console.log(data);
console.log(data.file[0]);
alert("Form submitted successfully!");
reset();
};

return (

<div className="font-bold  text-xl min-h-screen flex items-center z-50 justify-center   p-4"  style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
   
  }}>  
<form     
onSubmit={handleSubmit(onSubmit)}     
className="w-full max-w-lg   p-6 rounded-lg  space-y-4"    
>  
<h2 className="text-4xl font-bold text-center mb-4 underline underline-offset-9 decoration-4 decoration-pink-600">Contact Form:</h2>  <div>    
      <label className="block mb-1 font-medium">Name</label>    
      <input type="text" {...register("name")} placeholder="Enter your full name" className="border p-2 w-full rounded" />    
      {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}    
    </div>    <div>    
  <label className="block mb-1 font-medium">Email</label>    
  <input type="email" {...register("email")} placeholder="example@gmail.com" className="border p-2 w-full rounded" />    
  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}    
</div>    

<div>    
  <label className="block mb-1 font-medium">Password</label>    
  <input type="password" {...register("password")} placeholder="Enter password" className="border p-2 w-full rounded" />    
  {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}    
</div>    

    
  

<div>    
  <label className="block mb-1 font-medium">Date</label>    
  <input type="date" {...register("date")} className="border p-2 w-full rounded" />    
  {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}    
</div>    

<div>    
  <label className="block mb-1 font-medium">Date & Time</label>    
  <input type="datetime-local" {...register("datetime")} className="border p-2 w-full rounded" />    
  {errors.datetime && <p className="text-red-500 text-sm">{errors.datetime.message}</p>}    
</div>    

<div>    
  <label className="block mb-1 font-medium">File</label>    
  <input type="file" {...register("file")} className="border p-1 w-full rounded" />    
  {errors.file && <p className="text-red-500 text-sm">{errors.file.message}</p>}    
</div>    



<div>    
  <label className="block mb-1 font-medium">Phone</label>    
  <input type="tel" {...register("tel")} placeholder="Enter phone number" className="border p-2 w-full rounded" />    
  {errors.tel && <p className="text-red-500 text-sm">{errors.tel.message}</p>}    
</div>    

<div>    
  <label className="block mb-1 font-medium">Time</label>    
  <input type="time" {...register("time")} className="border p-2 w-full rounded" />    
  {errors.time && <p className="text-red-500 text-sm">{errors.time.message}</p>}    
</div>    



<div>    
  <label className="block mb-1 font-medium">Gender</label>    
  <div className="flex space-x-4">    
    <label><input type="radio" value="Male" {...register("gender")} /> Male</label>    
    <label><input type="radio" value="Female" {...register("gender")} /> Female</label>    
  </div>    
  {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}    
</div>

<div className="flex items-center space-x-2">
  <input type="checkbox" {...register("checkbox")} id="terms" className="h-4 w-4" />
  <label htmlFor="terms" className="font-medium">Accept Terms & Conditions</label>
</div>  
{errors.checkbox && <p className="text-red-500 text-sm">{errors.checkbox.message}</p>}    


<button type="submit" className="w-full bg-pink-800 text-white py-2 rounded hover:bg-blue-600">    
  Submit    
</button>

  </form>        
</div>  );
}
