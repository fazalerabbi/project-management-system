const getAllProjects = () => {
  return {
      type: "GET_PROJECTS"
  };
}

const getSingleProject = (projectId) => {
    return {
        type: "GET_SINGLE_PROJECT",
        payload: projectId,
    };
}

const createProject  = (project) => {
    return {
        type: "CREATE_PROJECT",
        payload: project
    };
}

const updateProject  = (project) => {
    return {
        type: "UPDATE_PROJECT",
        payload: project
    };
}

const projectActions = {
    getAllProjects,
    getSingleProject,
    createProject,
    updateProject
}

export default projectActions;