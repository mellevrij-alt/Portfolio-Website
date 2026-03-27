// Smooth scroll (used by button)
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// Store projects in array
let projects = [];

// Generate portfolio (main button)
function generatePortfolio() {
  const name = document.getElementById("nameInput").value;
  const about = document.getElementById("aboutInput").value;
  const title = document.getElementById("projectTitle").value;
  const desc = document.getElementById("projectDesc").value;

  // Set name and about
  document.getElementById("outputName").innerText = name || "Your Name";
  document.getElementById("outputAbout").innerText = about || "Your description will appear here.";

  // Add project if filled
  if (title !== "" && desc !== "") {
    projects.push({
      title: title,
      desc: desc
    });
  }

  renderProjects();

  // Clear inputs (optional, feels nicer)
  document.getElementById("projectTitle").value = "";
  document.getElementById("projectDesc").value = "";
}

// Render all projects
function renderProjects() {
  const container = document.getElementById("outputProjects");
  container.innerHTML = "";

  projects.forEach((project, index) => {
    const div = document.createElement("div");
    div.classList.add("project-output");

    div.innerHTML = `
      <h4>${project.title}</h4>
      <p>${project.desc}</p>
      <button onclick="removeProject(${index})">Delete</button>
    `;

    container.appendChild(div);
  });
}

// Remove project
function removeProject(index) {
  projects.splice(index, 1);
  renderProjects();
}
// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// Store projects
let projects = [];

// Generate portfolio
function generatePortfolio() {
  const name = document.getElementById("nameInput").value;
  const about = document.getElementById("aboutInput").value;
  const title = document.getElementById("projectTitle").value;
  const desc = document.getElementById("projectDesc").value;

  // Set main info
  document.getElementById("previewName").innerText = name || "Your Name";
  document.getElementById("previewAbout").innerText = about || "Your description here.";

  // Add project
  if (title !== "" && desc !== "") {
    projects.push({ title, desc });
  }

  renderProjects();

  // Clear inputs
  document.getElementById("projectTitle").value = "";
  document.getElementById("projectDesc").value = "";
}

// Render projects in real layout
function renderProjects() {
  const container = document.getElementById("previewProjects");
  container.innerHTML = "";

  projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("portfolio-card");

    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.desc}</p>
    `;

    container.appendChild(card);
  });
}
