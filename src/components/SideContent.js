const SideContent = ({ title, description }) => {
  return (
    <div className="sideContent">
      <h3>{title}</h3>
      <div className="img"></div>
      <p>{description}</p>
    </div>
  );
};

export default SideContent;
