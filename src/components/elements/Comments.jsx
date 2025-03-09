import Button from './Button';
import { ArrowRight, AlertCircle } from 'lucide-react';
import Input from './Input';
import * as yup from 'yup';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';

const commentSchema = yup.object().shape({
  content: yup
    .string()
    .required('Comment is required')
    .min(5, 'Content must be at least 5 characters'),
});

function Comments() {
  const formik = useFormik({
    initialValues: {
      content: '',
    },
    validationSchema: commentSchema,
    onSubmit: async (values) => {
      const payload = {
        content: values.content,
      };

      console.log('Comment Submitted:', payload);
      toast.success('Create comment succesfully!');

      formik.resetForm();
    },
  });

  const randomId = Math.floor(Math.random() * 99) + 1;

  return (
    <div className="py-4 flex justify-center items-center">
      <form className="w-full max-w-2xl" onSubmit={formik.handleSubmit}>
        <div className="flex items-center rounded-full bg-[#202020] p-2">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
            <img
              src={`https://randomuser.me/api/portraits/men/${randomId}.jpg`}
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
          <div className="w-full">
            <Input
              type="text"
              placeholder="Write your comments here..."
              autoComplete="off"
              className={`flex-grow bg-[#202020] text-white text-sm focus:outline-none placeholder-gray-400 w-full transition-all duration-300 py-2`}
              {...formik.getFieldProps('content')}
            />
            {formik.errors.content && formik.touched.content && (
              <div className="mt-1 flex items-center transition-opacity duration-300">
                <AlertCircle className="w-4 h-4 mr-1 text-red-500" />
                <small className="text-red-500 text-xs">
                  {formik.errors.content}
                </small>
              </div>
            )}
          </div>
          <Button
            type="submit"
            className="ml-2 bg-purple-600 rounded-full p-2 disabled:opacity-50"
            disabled={!(formik.isValid && formik.dirty)}
          >
            <ArrowRight />
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Comments;
