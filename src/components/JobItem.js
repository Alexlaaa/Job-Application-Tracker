import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Select from "react-select";
import SkillsTab from "./SkillsTab";

const JobItem = ({ job, index, removeJob, editJob }) => {
  //*edit this parameter to edit internship status
  let date = new Date(job.date);
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  const removeHandle = (i) => {
    removeJob(i);
  };

  //*add handler to edit internship status
  const options = [
    { value: "Accepted", label: "Accepted" },
    { value: "Interviewing", label: "Interviewing" },
    { value: "Rejected", label: "Rejected" },
    { value: "Waiting", label: "Waiting" },
  ];
  const [selectedOption, setSelectedOption] = useState(
    options.find(({ value }) => value === job.intStatus)
  );
  const [showSelect, setShowSelect] = useState(false);
  const toggleSelect = () => {
    setShowSelect(!showSelect);
  };

  const editHandle = (i) => {
    //*prompt user for new internship status
    toggleSelect();
    if (!selectedOption) {
      alert("Please select an option before submitting.");
      return;
    }
    editJob(i, selectedOption.value);
  };

  return (
    <div className="job-item">
      <button className="remove-item" onClick={() => removeHandle(index)}>
        <DeleteIcon />
      </button>
      <button className="edit-item" onClick={() => editHandle(index)}>
        <EditIcon />
      </button>
      {showSelect && (
        <Select
          options={options}
          value={selectedOption}
          onChange={setSelectedOption}
          styles={{
            control: (base) => ({
              ...base,
              width: "200px",
              marginLeft: "auto",
              borderRadius: 0,
              position: "relative",
              left: "20px",
            }),
          }}
        />
      )}
      <div className="coyName">{job.coyName}</div>
      <div className="jobTitle">{job.jobTitle}</div>
      <div className="skills">
        <SkillsTab skills={job.skills} />
      </div>
      <div className="platform">{job.platform}</div>
      <div className="date">{day + "/" + month + "/" + year}</div>
      <div className="intStatus">{job.intStatus}</div>
    </div>
  );
};

export default JobItem;
