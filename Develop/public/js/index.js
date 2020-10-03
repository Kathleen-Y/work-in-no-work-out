init();

async function init() {
  if (location.search.split("=")[1] === undefined) {
    const budget = await API.getLastBudget();
    if (budget) {
      location.search = "?id=" + budget._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}
