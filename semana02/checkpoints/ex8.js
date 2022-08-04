const users = [
  {
    name: "Joao",
    skills: ["Javascript", "ReactJS", "Redux"],
  },
  {
    name: "Pedro",
    skills: ["VueJS", "Ruby on Rails", "Elixir"],
  },
];

function getSkills(user) {
  user.skills.forEach((skill) => {
    console.log(skill);
  });
}

users.forEach((user) => {
  console.log(`Skills from ${user.name}:`);
  getSkills(user);
});
