async function initBudget() {
  const lastBudget = await API.getLastBudget();
  console.log("Last budget:", lastBudget);
  if (lastBudget) {
    document
      .querySelector("a[href='/exercise?']")
      .setAttribute("href", `/exercise?id=${lastBudget._id}`);

    const budgetSummary = {
      date: formatDate(lastBudget.day),
      totalDuration: lastBudget.totalDuration,
      numExercises: lastBudget.exercises.length,
      ...tallyExercises(lastBudget.exercises)
    };

    renderBudgetSummary(budgetSummary);
  } else {
    renderNoBudgetText()
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

function renderBudgetSummary(summary) {
  const container = document.querySelector(".budget-stats");
  const budgetKeyMap = {
    date: "Date",
    totalDuration: "Total Budget Duration",
    numExercises: "Exercises Performed",
    totalWeight: "Total Weight Lifted",
    totalSets: "Total Sets Performed",
    totalReps: "Total Reps Performed",
    totalDistance: "Total Distance Covered"
  };

  Object.keys(summary).forEach(key => {
    const p = document.createElement("p");
    const strong = document.createElement("strong");

    strong.textContent = budgetKeyMap[key];
    const textNode = document.createTextNode(`: ${summary[key]}`);

    p.appendChild(strong);
    p.appendChild(textNode);

    container.appendChild(p);
  });
}

function renderNoBudgetText() {
  const container = document.querySelector(".budget-stats");
  const p = document.createElement("p");
  const strong = document.createElement("strong");
  strong.textContent = "You have not created a budget yet!"

  p.appendChild(strong);
  container.appendChild(p);
}

initBudget();