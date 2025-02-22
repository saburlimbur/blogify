/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import Button from '../components/elements/Button';
import Fields from '../components/fragments/InputFields';
import SectionTitle from '../components/fragments/SectionTitle';
import { useFormik } from 'formik';
import { signInSchema } from '../schema/authSchema';
import { useState } from 'react';
import Loader from '../components/elements/Loader';
import { useLoginUser } from '../hooks/Users/useLoginUser';

function SignIn() {
  const { loginUser, isError, isSuccess, error, isLoading } = useLoginUser();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
    onSubmit: async (values) => {
      const payloaded = {
        username: values.username,
        email: values.email,
        password: values.password,
      };

      loginUser(payloaded);
    },
  });

  return (
    <div className="text-white flex justify-center items-center min-h-[70vh]">
      <div className="w-[450px] p-8 rounded-lg shadow-md min-h-[200px]">
        <SectionTitle>
          <h2 className="text-2xl font-semibold mb-6">Sign In</h2>
        </SectionTitle>

        <form className="space-y-4 w-full" onSubmit={formik.handleSubmit}>
          <div>
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
              className="shadow appearance-none rounded-lg w-full py-4 px-3 mb-1 leading-tight focus:outline-none bg-[#0C0C0D] border border-[#434347] "
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

          <div className="flex items-center justify-center">
            <Button
              className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-4 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
              type="submit"
              disabled={loading}
            >
              {loading ? <Loader /> : 'Sign In'}
            </Button>
          </div>

          <div>
            <p className="text-center text-sm flex gap-2 justify-center">
              Do you have an account?
              <span>
                <Link to="/signup" className="hover:underline">
                  Sign Up
                </Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
