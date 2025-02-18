import PropTypes from 'prop-types';

const CardProps = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

function Card({ className = '', children }) {
  return <article className={className}>{children}</article>;
}

function Header({ className = '', children }) {
  return <div className={className}>{children}</div>;
}

function Body({ className = '', children }) {
  return <div className={className}>{children}</div>;
}
function Badge({ className = '', children }) {
  return <div className={className}>{children}</div>;
}

function Footer({ className = '', children }) {
  return <footer className={className}>{children}</footer>;
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
Header.propTypes = CardProps;
Body.propTypes = CardProps;
Badge.propTypes = CardProps;
Footer.propTypes = CardProps;

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
Card.Badge = Badge;

export default Card;
