function generatePortfolio() {
  const name = document.getElementById("nameInput").value;
  const about = document.getElementById("aboutInput").value;
  const projectTitle = document.getElementById("projectTitle").value;
  const projectDesc = document.getElementById("projectDesc").value;

  // Set name & about
  document.getElementById("outputName").innerText = name;
  document.getElementById("outputAbout").innerText = about;

  // Create project card
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project-output");

  projectDiv.innerHTML = `
    <h4>${projectTitle}</h4>
    <p>${projectDesc}</p>
  `;

  document.getElementById("outputProjects").appendChild(projectDiv);
}
