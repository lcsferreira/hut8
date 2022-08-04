let user = {
  name: "Juca",
  projects: [
    { name: "Projeto 1", start: "01/02/2021", active: true },
    { name: "Projeto 2", start: "03/03/2021", active: false },
    { name: "Projeto 3", start: "10/08/2021", active: true },
    { name: "Projeto 4", start: "20/08/2021", active: false },
    { name: "Projeto 5", start: "18/10/2021", active: true },
  ],
};

function getActiveProjects(projects) {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].active) {
      console.log(projects[i].name);
    }
  }
}

getActiveProjects(user.projects);
