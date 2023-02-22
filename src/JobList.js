import React from "react";
import JobItem from "./JobItem";

const JobList = ({ job, setJob }) => {
  const removeJob = (i) => {
    let temp = job.filter((v, index) => index != i);
    setJob(temp);
  };

  //*add function here to edit internship status
  const editJob = (i, intStatus) => {
    let temp = job.map((v, index) => {
      if (index === i) {
        return { ...v, intStatus: intStatus };
      }
      return v;
    });
    setJob(temp);
  };

  const sortByDate = (a, b) => {
    return a.date - b.date;
  };

  return (
    <div className="job-list">
      {job.sort(sortByDate).map((value, index) => (
        <JobItem
          key={index}
          job={value}
          index={index}
          removeJob={removeJob}
          editJob={editJob}
        />
      ))}
    </div>
  );
};

export default JobList;
