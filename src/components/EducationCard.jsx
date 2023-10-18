function EducationCard(props) {
  const data = props.data;
  return (
    <div className="glass bg-base-100">
      <h2>{data.Heading} </h2>
    </div>
  );
}

export default EducationCard;
