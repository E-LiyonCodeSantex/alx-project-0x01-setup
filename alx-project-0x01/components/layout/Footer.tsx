const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 text-center text-sm py-2 mt-auto">
      <p>&copy; {new Date().getFullYear()} Daily Contents. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
