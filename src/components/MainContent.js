const MainContent = ({ title, titleDescription, description }) => {
  return (
    <div className="box">
      <div className="title">
        <h3>{title}</h3>
        <p>{titleDescription}</p>
      </div>
      <div className="img"></div>
      <div className="description">{description}</div>
    </div>
  );
};

export default MainContent;
