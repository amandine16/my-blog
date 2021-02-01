const MainContent = (props) => {
  return (
    <div className="box">
      <div className="title">
        <h3>{props.title}</h3>
        <p>{props.titleDescription}</p>
      </div>
      <div className="img"></div>
      <div className="description">{props.description}</div>
    </div>
  );
};

export default MainContent;
