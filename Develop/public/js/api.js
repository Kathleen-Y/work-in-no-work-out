const API = {
  async getLastBudget() {
    let res;
    try {
      res = await fetch("/api/budgets");
    } catch (err) {
      console.log(err)
    }

    const json = await res.json();
    return json[json.length - 1];
  },

  async addExercise(data) {
    const id = location.search.split("=")[1];
    const res = await fetch("/api/budgets/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();
    return json;
  },

  async createBudget(data = {}) {
    const res = await fetch("/api/budgets", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();
    return json;
  },

  async getBudgetsInRange() {
    const res = await fetch(`/api/budgets/range`);
    const json = await res.json();
    return json;
  },
};