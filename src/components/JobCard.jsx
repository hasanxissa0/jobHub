function JobCard({ title, company, location, url }) {
  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p>Company: {company}</p>
      <p>Location: {location}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        View Job
      </a>
    </div>
  );
}

export default JobCard;
