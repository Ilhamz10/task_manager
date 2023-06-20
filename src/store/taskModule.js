const taskModule = {
  namespaced: true,
  state: () => ({
    tasks: [],
    isTaskLoading: false,
    selectedSort: "",
    searchQuery: "",
    options: [
      { name: "Sort by name", value: "title" },
      { name: "Sort by value", value: "body" },
    ],
  }),

  getters: {
    sortedTasks(state) {
      return [...state.tasks].sort((task1, task2) => {
        return task1[state.selectedSort]?.localeCompare(
          task2[state.selectedSort]
        );
      });
    },
    sortedAndSearchedTasks(state, getters) {
      return getters.sortedTasks.filter((task) =>
        task.title.includes(state.searchQuery)
      );
    },
  },

  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    setIsTaskLoading(state, loading) {
      state.isTaskLoading = loading;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setSearchQuery(state, search) {
      state.searchQuery = search;
    },
  },

  actions: {
    fetchTasks({ state, commit }) {
      try {
        commit("setIsTaskLoading", true);
        if(!JSON.parse(localStorage.getItem('tasks'))){
            localStorage.setItem('tasks', JSON.stringify([]))
        }
        const response = JSON.parse(localStorage.getItem('tasks'))
        state.tasks = response;
      } catch (e) {
        alert("404");
      } finally {
        commit("setIsTaskLoading", false);
      }
    },
  },
};

export default taskModule