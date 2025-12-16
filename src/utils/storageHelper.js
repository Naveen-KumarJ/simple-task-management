export const setActiveUser = (user) =>
  localStorage.setItem("active user", JSON.stringify(user));

export const getActiveUser = () => {
  return JSON.parse(localStorage.getItem("active user"));
};

export const removeActiveUser = () => localStorage.removeItem("active user");

export const getTasksData = () => {
  return JSON.parse(localStorage.getItem("tasks")) || { users: [] };
};

export const setTasksData = (data) => {
  localStorage.setItem("tasks", JSON.stringify(data));
};
