function EducationCard(props) {
  const data = props.data;
  return (
    <div className="glass w-96 lg:w-[50vw] bg-base-100 p-4 rounded-xl text-base-100">
      <h1 className="text-egg-100">{data?.heading}</h1>
      <div className="flex max-md:flex-col gap-4">
        <div className="h-72 w-50 object-contain">
          <img src={data?.img} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="text-salmon-100">
          <h2 className="font-bold text-egg-100">{data?.eventDate}</h2>
          {data.organisedBy && (
            <p>
              Organized by:{" "}
              <strong className="text-egg-100">{data?.organisedBy}</strong>
            </p>
          )}
          {data.venue && (
            <p>
              Venue: <strong className="text-egg-100">{data?.venue}</strong>
            </p>
          )}
          {data.deadline && (
            <p>
              Deadline:{" "}
              <strong className="text-egg-100">{data?.deadline}</strong>
            </p>
          )}
          {data.description && <p className="w-full">{data.description}</p>}
          <a className="underline" href={data.link}>
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default EducationCard;
