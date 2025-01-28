const ListItem = ({ children, className = '' }) => {
  return (
    <li
      className={`before:content-['▹'] flex before:mr-3 before:text-accent before:block ${className}`}
    >
      {children}
    </li>
  );
};

export default ListItem;
