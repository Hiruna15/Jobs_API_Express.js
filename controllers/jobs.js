const getAllJobs = async (req, res) => {
  res.send("all jobs");
};

const getJob = async (req, res) => {
  res.send("get job");
};

const createJob = async (req, res) => {
  res.send("create Job");
};

const updateJob = async (req, res) => {
  res.send("Update Job");
};

const deleteJob = async (req, res) => {
  res.send("delete job");
};

export { getAllJobs, getJob, createJob, updateJob, deleteJob };
