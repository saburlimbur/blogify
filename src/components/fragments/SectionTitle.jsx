import PropTypes from 'prop-types';

function SectionTitle({ className, children }) {
  return (
    <section className={className}>
      <div className={className}>{children}</div>
    </section>
  );
}

SectionTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default SectionTitle;
