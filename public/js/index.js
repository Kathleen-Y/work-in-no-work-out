init();

async function init() {
  if (location.search.split("=")[1] === undefined) {
    const Tracker = await API.getLastTracker();
    if (tracker) {
      location.search = "?id=" + tracker._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}
