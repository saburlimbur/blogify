/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import Button from '../components/elements/Button';
import Fields from '../components/fragments/InputFields';
import SectionTitle from '../components/fragments/SectionTitle';
import { useState } from 'react';
import { useFormik } from 'formik';
import { signUpSchema } from '../schema/authSchema';
import Loader from '../components/elements/Loader';
import { useCreateUser } from '../hooks/Users/useCreateUser';

function SignUp() {
  const { createUser, isError, isSuccess, error, isLoading } = useCreateUser();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      phone_number: '',
      password: '',
      position: '',
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      const payload = {
        username: values.username,
        email: values.email,
        phone_number: values.phone_number,
        password: values.password,
        position: values.position,
      };

      createUser(payload);
    },
  });

  return (
    <div className="text-white flex justify-center items-center min-h-[70vh]">
      <div className="w-[450px] p-8 rounded-lg shadow-md min-h-[200px]">
        <SectionTitle>
          <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
        </SectionTitle>

        <form className="space-y-4 w-full" onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1">
              <Fields
                label="Username"
                htmlFor="username"
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow appearance-none rounded-lg w-full py-4 px-3 mb-1 leading-tight focus:outline-none bg-[#0C0C0D] border border-[#434347]"
              />
              {formik.errors.username && formik.touched.username && (
                <small className="text-red-500 text-xs">
                  {formik.errors.username}
                </small>
              )}
            </div>

            <div className="col-span-2 sm:col-span-1">
              <Fields
                label="Phone Number"
                htmlFor="phone_number"
                type="text"
                name="phone_number"
                id="phone_number"
                placeholder="Phone Number"
                value={formik.values.phone_number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow appearance-none rounded-lg w-full py-4 px-3 mb-1 leading-tight focus:outline-none bg-[#0C0C0D] border border-[#434347]"
              />
              {formik.errors.phone_number && formik.touched.phone_number && (
                <small className="text-red-500 text-xs">
                  {formik.errors.phone_number}
                </small>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <Fields
                label="Email"
                htmlFor="email"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow appearance-none rounded-lg w-full py-4 px-3 mb-1 leading-tight focus:outline-none bg-[#0C0C0D] border border-[#434347]"
              />
              {formik.errors.email && formik.touched.email && (
                <small className="text-red-500 text-xs">
                  {formik.errors.email}
                </small>
              )}
            </div>

            <div>
              <Fields
                label="Password"
                htmlFor="password"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow appearance-none rounded-lg w-full py-4 px-3 mb-1 leading-tight focus:outline-none bg-[#0C0C0D] border border-[#434347]"
              />
              {formik.errors.password && formik.touched.password && (
                <small className="text-red-500 text-xs">
                  {formik.errors.password}
                </small>
              )}
            </div>

            <div>
              <Fields
                label="Position"
                htmlFor="position"
                type="text"
                name="position"
                id="position"
                placeholder="Position"
                value={formik.values.position}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow appearance-none rounded-lg w-full py-4 px-3 mb-1 leading-tight focus:outline-none bg-[#0C0C0D] border border-[#434347]"
              />
              {formik.errors.position && formik.touched.position && (
                <small className="text-red-500 text-xs">
                  {formik.errors.position}
                </small>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center">
            <Button
              className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-4 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
              type="submit"
              disabled={loading}
            >
              {loading ? <Loader /> : 'Sign Up'}
            </Button>
          </div>

          {/* Link to Sign In */}
          <div>
            <p className="text-center text-sm flex gap-2 justify-center">
              You have an account?
              <span>
                <Link to="/signin" className="hover:underline">
                  Sign In
                </Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
