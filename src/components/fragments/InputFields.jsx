/* eslint-disable no-unused-vars */
import { PropTypes } from 'prop-types';
import Input from '../elements/Input';
import Label from '../elements/Label';

function Fields(props) {
  const {
    label,
    htmlFor,
    type,
    name,
    id,
    value,
    onChange,
    onBlur,
    placeholder,
    className,
    autoComplete,
    children,
    icons,
  } = props;

  return (
    <div className="">
      <Label htmlFor={htmlFor} className="block mb-2 text-base text-white">
        {label}
      </Label>
      <Input
        icons={icons}
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={className}
        autoComplete={autoComplete}
      />
    </div>
  );
}

Fields.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  autoComplete: PropTypes.string,
  icons: PropTypes.node,
  children: PropTypes.node,
};

export default Fields;
