const Footer = () => {
  return (
    <footer className="bg-navy border-t border-navy-light py-8">
      <div className="max-w-6xl mx-auto px-6 text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} JSL Marketing & Web Design. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
