const SideContent = (props) => {
  return (
    <div className="sideContent">
      <h3>{props.title}</h3>
      <div className="img"></div>
      <p>{props.description}</p>
    </div>
  );
};

export default SideContent;
