import { useState, useEffect } from "react";
import JobCard from "../components/JobCard";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function fetchJobs() {
      try {
        const response = await fetch(
          "https://www.arbeitnow.com/api/job-board-api",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }

        const data = await response.json();

        if (!cancelled) {
          setJobs(data.data.slice(0, 12));
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchJobs();

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) return <p>Loading jobs...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Available Jobs</h1>

      {jobs.map((job) => (
        <JobCard
          key={job.slug}
          title={job.title}
          company={job.company_name}
          location={job.location}
          url={job.url}
        />
      ))}

      <p>
        Job data provided by <a href="https://www.arbeitnow.com/">Arbeitnow</a>.
      </p>
    </div>
  );
}

export default Jobs;
