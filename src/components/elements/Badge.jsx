import PropTypes from 'prop-types';

function Badge({ className = '', title = '' }) {
  return <div className={className}>{title}</div>;
}

Badge.propTypes = {
  className: PropTypes.string,
  title: PropTypes.node.isRequired,
};

export default Badge;
