const Footer = () => {
  return (
    <footer className="footer">
      <p className="copyright">
        Copyright &copy; Safemain Intergrated Services
        <span id="date"> {new Date().getFullYear()}</span>. All Rights Reserved
      </p>
    </footer>
  );
};
export default Footer;
