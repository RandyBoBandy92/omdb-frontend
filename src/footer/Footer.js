const Footer = () => {
  // i need the current year
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright Randy Gulak © {year}</p>
    </footer>
  );
};

export default Footer;
