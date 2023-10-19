function EducationCard(props) {
  const data = props.data;
  return (
    <div className="glass w-[40vw] bg-base-100 p-4 rounded-xl text-base-100">
      <h1 className="text-base-50">{data?.heading}</h1>
      <div className="flex gap-4">
        <div className="h-72 w-50 object-contain">
          <img src={data?.img} alt="" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="font-bold text-base-50">{data?.eventDate}</p>
          <p>
            Organized by:{" "}
            <strong className="text-base-50">{data?.organisedBy}</strong>
          </p>
          <p>
            Venue: <strong className="text-base-50">{data?.venue}</strong>
          </p>
          <p>
            Deadline: <strong className="text-base-50">{data?.deadline}</strong>
          </p>
          <p>{data.description}</p>
          <a href={data.link}>Read More</a>
        </div>
      </div>
    </div>
  );
}

export default EducationCard;
