import React, { useRef } from "react";
import Select from "react-select";

const JobForm = ({ job, setJob }) => {
  const coyName = useRef(null);
  const jobTitle = useRef(null);
  const skills = useRef(null);
  const platform = useRef(null);
  const date = useRef(null);
  const intStatus = useRef(null);

  const AddJob = (e) => {
    e.preventDefault();
    //Settling date
    let d = date.current.value.split("-");
    let newD = new Date(d[0], d[1], d[2]);
    //Return
    setJob([
      ...job, //Getting old jobs
      {
        //jobTitle: selectedJobTitle.current.label, //.label, not .value since we using react-select. Need to display the correct thing
        coyName: coyName.current.value,
        jobTitle: jobTitle.current.label,
        skills: skills.current.map((skills) => <p>{skills.label}</p>), //skills stored as an array of string object. need to map it out to display
        platform: platform.current.label,
        date: newD.getTime(),
        intStatus: intStatus.current.label,
      },
    ]);

    //Reset
    coyName.current.setValue(null);
    jobTitle.current.select.setValue(null); //.label, not .value since we using react-select. Need to display the correct thing
    skills.current.select.setValue(null);
    platform.current.select.setValue(null);
    date.current.select.setValue(null);
    intStatus.current.select.setValue(null);
  };

  //To handle change in drop-down selection
  const handleChange = (selectedOption, { name }) => {
    if (name === "jobTitle") {
      jobTitle.current = selectedOption;
    } else if (name === "skills") {
      skills.current = selectedOption;
    } else if (name === "platform") {
      platform.current = selectedOption;
    } else if (name === "intStatus") {
      intStatus.current = selectedOption;
    }
  };

  return (
    <form className="job-form" onSubmit={AddJob}>
      <div className="form-inner">
        <input
          //styles={companyStyles}
          type="coyNameHeader"
          name="coyName"
          id="coyName"
          placeholder="Company Name"
          ref={coyName}
        />
        <Select
          styles={{
            control: (styles) => ({
              ...styles,
              height: "85px",
              width: "250px",
              border: "none",
              borderRadius: 0,
            }),
            option: (styles, { data, isDisabled, isFocused, isSelected }) => {
              return { ...styles };
            },
          }}
          type="jobTitleHeader"
          options={sortedJobTitleOptions}
          onChange={handleChange}
          name="jobTitle"
          id="jobTitle"
          placeholder="Job Title"
          ref={jobTitle}
        />
        <Select
          styles={{
            control: (styles) => ({
              ...styles,
              height: "85px",
              width: "300px",
              border: "none",
              borderRadius: 0,
            }),
            option: (styles, { data, isDisabled, isFocused, isSelected }) => {
              return { ...styles };
            },
          }}
          type="skillsHeader"
          options={sortedSkillsOptions}
          onChange={handleChange}
          isMulti
          name="skills"
          id="skills"
          placeholder="Skills"
          ref={skills}
        />
        <Select
          styles={{
            control: (styles) => ({
              ...styles,
              height: "85px",
              width: "200px",
              border: "none",
              borderRadius: 0,
            }),
            option: (styles, { data, isDisabled, isFocused, isSelected }) => {
              return { ...styles };
            },
          }}
          type="platformHeader"
          options={sortedPlatformOptions}
          onChange={handleChange}
          name="platform"
          id="platform"
          placeholder="Platform"
          ref={platform}
        />
        <Select
          styles={{
            control: (styles) => ({
              ...styles,
              height: "85px",
              width: "200px",
              border: "none",
              borderRadius: 0,
            }),
            option: (styles, { data, isDisabled, isFocused, isSelected }) => {
              return { ...styles };
            },
          }}
          type="intStatusHeader"
          options={sortedStatusOptions}
          onChange={handleChange}
          name="intStatus"
          id="intStatus"
          placeholder="Status"
          ref={intStatus}
        />
        <input
          type="date"
          name="date"
          id="date"
          placeholder="Date applied"
          ref={date}
        />
        <input type="submit" value="Add Application" />
      </div>
    </form>
  );
};

export default JobForm;

//React-Select for Job-Title
const jobTitleOptions = [
  { value: "software_developer", label: "Software Developer" },
  { value: "web_developer", label: "Web Developer" },
  { value: "mobile_developer", label: "Mobile Developer" },
  { value: "full_stack_developer", label: "Full-stack Developer" },
  { value: "devops_engineer", label: "DevOps Engineer" },
  { value: "data_scientist", label: "Data Scientist" },
  { value: "data_analyst", label: "Data Analyst" },
  { value: "data_engineer", label: "Data Engineer" },
  { value: "database_administrator", label: "Database Administrator" },
  { value: "network_administrator", label: "Network Administrator" },
  { value: "cloud_architect", label: "Cloud Architect" },
  { value: "cybersecurity_analyst", label: "Cybersecurity Analyst" },
  { value: "it_manager", label: "Information Technology (IT) Manager" },
  { value: "technical_support", label: "Technical Support" },
  { value: "qa_analyst", label: "Quality Assurance (QA) Analyst" },
  { value: "technical_writer", label: "Technical Writer" },
  { value: "ux_designer", label: "User Experience (UX) Designer" },
  { value: "business_analyst", label: "Business Analyst" },
  { value: "project_manager", label: "Project Manager" },
  { value: "product_manager", label: "Product Manager" },
  { value: "ai_engineer", label: "Artificial Intelligence (AI) Engineer" },
  { value: "ml_engineer", label: "Machine Learning Engineer" },
  { value: "dl_engineer", label: "Deep Learning Engineer" },
  { value: "cv_engineer", label: "Computer Vision Engineer" },
  {
    value: "nlp_engineer",
    label: "Natural Language Processing (NLP) Engineer",
  },
  { value: "robotics_engineer", label: "Robotics Engineer" },
  { value: "systems_administrator", label: "Systems Administrator" },
  { value: "network_engineer", label: "Network Engineer" },
  { value: "cloud_engineer", label: "Cloud Engineer" },
  { value: "cloud_solutions_architect", label: "Cloud Solutions Architect" },
  { value: "cloud_security_engineer", label: "Cloud Security Engineer" },
  { value: "cloud_devops_engineer", label: "Cloud DevOps Engineer" },
  { value: "cloud_data_engineer", label: "Cloud Data Engineer" },
  {
    value: "cloud_database_administrator",
    label: "Cloud Database Administrator",
  },
  {
    value: "cloud_network_administrator",
    label: "Cloud Network Administrator",
  },
  { value: "iot_engineer", label: "Internet of Things (IoT) Engineer" },
  { value: "blockchain_engineer", label: "Blockchain Engineer" },
  { value: "cybersecurity_engineer", label: "Cybersecurity Engineer" },
  {
    value: "information_security_analyst",
    label: "Information Security Analyst",
  },
  { value: "penetration_tester", label: "Penetration Tester" },
  { value: "security_architect", label: "Security Architect" },
  {
    value: "security_operations_analyst",
    label: "Security Operations Analyst",
  },
  { value: "technical_sales_engineer", label: "Technical Sales Engineer" },
  { value: "technical_recruiter", label: "Technical Recruiter" },
  { value: "technical_trainer", label: "Technical Trainer" },
  { value: "technical_account_manager", label: "Technical Account Manager" },
  { value: "technical_consultant", label: "Technical Consultant" },
  { value: "technical_product_manager", label: "Technical Product Manager" },
  {
    value: "technical_marketing_engineer",
    label: "Technical Marketing Engineer",
  },
  { value: "technical_support_engineer", label: "Technical Support Engineer" },
  { value: "backend_developer", label: "Backend Developer" },
].sort();
//Sorting Job Title
const sortedJobTitleOptions = jobTitleOptions.sort((a, b) =>
  a.label.localeCompare(b.label)
);

//React-Select for Skills
const skillsOptions = [
  { value: "c++", label: "C++" },
  { value: "java", label: "Java" },
  { value: "python", label: "Python" },
  { value: "javascript", label: "JavaScript" },
  { value: "sql", label: "SQL" },
  { value: "git", label: "Git" },
  { value: "agile", label: "Agile" },
  { value: "linux", label: "Linux" },
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "css", label: "CSS" },
  { value: "c#", label: "C#" },
  { value: "oop", label: "OOP" },
  { value: "aws", label: "AWS" },
  { value: "azure", label: "Azure" },
  { value: "reactjs", label: "ReactJS" },
  { value: "nodejs", label: "NodeJS" },
  { value: "docker", label: "Docker" },
  { value: "kubernetes", label: "Kubernetes" },
  { value: "microservices", label: "Microservices" },
  { value: "restful_api", label: "Restful API" },
  { value: "typescript", label: "TypeScript" },
  { value: "mongodb", label: "MongoDB" },
  { value: "redis", label: "Redis" },
  { value: "elasticsearch", label: "Elasticsearch" },
  { value: "kafka", label: "Kafka" },
  { value: "cassandra", label: "Cassandra" },
  { value: "aws_lambda", label: "AWS Lambda" },
  { value: "firebase", label: "Firebase" },
  { value: "graphql", label: "GraphQL" },
  { value: "vuejs", label: "VueJS" },
  { value: "angularjs", label: "AngularJS" },
  { value: "selenium", label: "Selenium" },
  { value: "jenkins", label: "Jenkins" },
  { value: "ansible", label: "Ansible" },
  { value: "puppet", label: "Puppet" },
  { value: "chef", label: "Chef" },
  { value: "gitlab", label: "GitLab" },
  { value: "jira", label: "Jira" },
  { value: "bitbucket", label: "Bitbucket" },
  { value: "webpack", label: "Webpack" },
  { value: "grunt", label: "Grunt" },
  { value: "gulp", label: "Gulp" },
  { value: "bower", label: "Bower" },
  { value: "less", label: "LESS" },
  { value: "sass", label: "SASS" },
  { value: "stylus", label: "Stylus" },
];
//Sorting Skills
const sortedSkillsOptions = skillsOptions.sort((a, b) =>
  a.label.localeCompare(b.label)
);

//React-Select for Platform
const platformOptions = [
  { value: "linkedin", label: "LinkedIn" },
  { value: "jobscentral", label: "JobsCentral" },
  { value: "jobstreet", label: "JobStreet" },
  { value: "mycareersfuture", label: "MyCareersFuture" },
  { value: "glassdoor", label: "Glassdoor" },
  { value: "indeed", label: "Indeed" },
  { value: "monster", label: "Monster" },
  { value: "careerbuilder", label: "CareerBuilder" },
  { value: "jobsdb", label: "JobsDB" },
  { value: "stjobs", label: "STJobs" },
  { value: "sgrecruiters", label: "SGRecruiters" },
  { value: "jobadvisor", label: "JobAdvisor" },
  { value: "adzuna", label: "Adzuna" },
  { value: "jobnimbus", label: "JobNimbus" },
  { value: "jobtopia", label: "Jobtopia" },
  { value: "recruit.net", label: "Recruit.net" },
  { value: "jobable", label: "Jobable" },
  { value: "theedge", label: "The Edge Singapore" },
  { value: "simplyhired", label: "SimplyHired" },
  { value: "jobswype", label: "JobSwype" },
  { value: "schoolportals", label: "School portals" },
  { value: "careerfairs", label: "Career Fairs" },
];
//Sorting Platform
const sortedPlatformOptions = platformOptions.sort((a, b) =>
  a.label.localeCompare(b.label)
);

//React-Select for Status
const statusOptions = [
  { value: "accepted", label: "Accepted" },
  { value: "rejected", label: "Rejected" },
  { value: "waiting", label: "Waiting" },
  { value: "interviewing", label: "Interviewing" },
];
//Sorting Status
const sortedStatusOptions = statusOptions.sort((a, b) =>
  a.label.localeCompare(b.label)
);

//React-Select for Interview Rounds
const intRoundOptions = [
  { value: "zero", label: "0" },
  { value: "one", label: "1" },
  { value: "two", label: "2" },
  { value: "three", label: "3" },
  { value: "four", label: "4" },
  { value: "five", label: "5" },
];
