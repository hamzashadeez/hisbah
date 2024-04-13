import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  // const [session, setSession] = useState(null)
  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setSession(session);
     
  //   });
  // }, []);

  const [formData, setFormData] = useState({
    email: "admin@hisbah.com",
    password: "12345678",
  });
  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string()
      .required("Please enter your password")
      .min(5, "Password must be at least 5 characters"),
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      // Simulate login logic (replace with your authentication method)
      console.log("Login successful!", formData);
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: "https://example.com/welcome",
        },
      });
      if (error) {
        alert("Invalid Credentials");
        return;
      }
      console.log(data);
      navigate("/dashboard")
      setFormData({ email: "", password: "" }); // Clear form after successful login
      setErrors({}); // Clear any previous errors
    } catch (error) {
      console.log(error)
      // const validationErrors = {};
      // error?.inner.forEach((err) => {
      //   validationErrors[err.path] = err.message;
      // });
      // setErrors(validationErrors);
    }
  };

// if(session){
//   navigate("/dashboard")
//   return
// }

  return (
    <div className='min-h-screen bg-teal-200 flex items-center justify-center'>
      <div className='p-4 bg-white rounded-lg shadow-md w-4/5 mx-auto md:w-2/5'>
        <div className='mb-5'>
          <p className='text-brand text-[10px] md:text-sm font-semibold'>
            Hisbah Katsina
          </p>
          <h2 className='text-black font-bold text-sm md:text-lg'>
            Login to Your Account
          </h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 gap-4'>
            <div className='flex flex-col gap-1'>
              <label className='text-[11px] font-semibold '>
                Email Address
              </label>
              <input
                placeholder='Enter Email'
                className={`bg-gray-50 shadow-sm px-3 py-2 outline-teal-600 ${
                  errors.email ? "border-red-500" : ""
                }`}
                value={formData.email}
                onChange={handleChange}
                name='email'
              />
              {errors.email && (
                <p className='text-red-500 text-xs'>{errors.email}</p>
              )}
            </div>
            <div className='flex flex-col gap-1'>
              <label className='text-[11px] font-semibold '>Password</label>
              <input
                type='password'
                placeholder='Enter Password'
                className={`bg-gray-50 px-3 shadow-sm py-2 outline-teal-600 ${
                  errors.password ? "border-red-500" : ""
                }`}
                value={formData.password}
                onChange={handleChange}
                name='password'
              />
              {errors.password && (
                <p className='text-red-500 text-xs'>{errors.password}</p>
              )}
            </div>
          </div>
          <div className='flex justify-end mt-4'>
            <a href='#' className='text-teal-600 text-sm font-semibold'>
              Forgot Password?
            </a>
          </div>
          <button
            type='submit'
            className='bg-teal-600 text-white px-4 py-2 rounded-md mt-4'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
