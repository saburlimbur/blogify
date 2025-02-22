import PropTypes from 'prop-types';

function ContainerGrid({ className, children }) {
  return (
    <div className={className}>
      <hr className="w-full text-gray-500 py-2" />
      {children}
    </div>
  );
}

ContainerGrid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ContainerGrid;
