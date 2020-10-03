async function initTracker() {
  const lastTracker = await API.getLastTracker();
  console.log("Last Tracker:", lastTracker);
  if (lastTracker) {
    document
      .querySelector("a[href='/exercise?']")
      .setAttribute("href", `/exercise?id=${lastTracker._id}`);

    const trackerSummary = {
      date: formatDate(lastTracker.day),
      totalDuration: lastTracker.totalDuration,
      numExercises: lastTracker.exercises.length,
      ...tallyExercises(lastTracker.exercises)
    };

    renderTrackerSummary(trackerSummary);
  } else {
    renderNoTrackerText()
  }
}

function tallyExercises(exercises) {
  const tallied = exercises.reduce((acc, curr) => {
    if (curr.type === "resistance") {
      acc.totalWeight = (acc.totalWeight || 0) + curr.weight;
      acc.totalSets = (acc.totalSets || 0) + curr.sets;
      acc.totalReps = (acc.totalReps || 0) + curr.reps;
    } else if (curr.type === "cardio") {
      acc.totalDistance = (acc.totalDistance || 0) + curr.distance;
    }
    return acc;
  }, {});
  return tallied;
}

function formatDate(date) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return new Date(date).toLocaleDateString(options);
}

function renderTrackerSummary(summary) {
  const container = document.querySelector(".tracker-stats");
  const trackerKeyMap = {
    date: "Date",
    totalDuration: "Total Tracker Duration",
    numExercises: "Exercises Performed",
    totalWeight: "Total Weight Lifted",
    totalSets: "Total Sets Performed",
    totalReps: "Total Reps Performed",
    totalDistance: "Total Distance Covered"
  };

  Object.keys(summary).forEach(key => {
    const p = document.createElement("p");
    const strong = document.createElement("strong");

    strong.textContent = trackerKeyMap[key];
    const textNode = document.createTextNode(`: ${summary[key]}`);

    p.appendChild(strong);
    p.appendChild(textNode);

    container.appendChild(p);
  });
}

function renderNoTrackerText() {
  const container = document.querySelector(".tracker-stats");
  const p = document.createElement("p");
  const strong = document.createElement("strong");
  strong.textContent = "You have not created a tracker yet!"

  p.appendChild(strong);
  container.appendChild(p);
}

initTracker();