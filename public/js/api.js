const API = {
  async getLastTracker() {
    let res;
    try {
      res = await fetch("/api/tracker");
    } catch (err) {
      console.log(err)
    }

    const json = await res.json();
    return json[json.length - 1];
  },

  async addExercise(data) {
    const id = location.search.split("=")[1];
    const res = await fetch("/api/tracker/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();
    return json;
  },

  async createTracker(data = {}) {
    const res = await fetch("/api/tracker", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();
    return json;
  },

  async getTrackerInRange() {
    const res = await fetch(`/api/tracker/range`);
    const json = await res.json();
    return json;
  },
};