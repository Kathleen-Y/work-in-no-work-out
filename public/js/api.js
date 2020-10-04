const API = {
  async getLastTracker() {
    let res;
    try {
      res = await fetch("/api/trackers");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();
    return json[json.length - 1];
  },
  async addExercise(data) {
    const id = location.search.split("=")[1];

    const res = await fetch("/api/trackers/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();
    return json;
  },
  async createTracker(data = {}) {
    const res = await fetch("/api/trackers", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();
    return json;
  },

  async getTrackersInRange() {
    const res = await fetch(`/api/trackers/range`);
    const json = await res.json();
    return json;


    
  },
};