// extScript.js
let extProjects = [];

function generateExtendedPortfolio() {
  const name = document.getElementById("extName").value;
  const about = document.getElementById("extAbout").value;
  const title = document.getElementById("extProjectTitle").value;
  const desc = document.getElementById("extProjectDesc").value;

  document.getElementById("extPreviewName").innerText = name || "Your Name";
  document.getElementById("extPreviewAbout").innerText = about || "Your description here.";

  if(title !== "" && desc !== "") {
    extProjects.push({ title, desc });
  }

  renderExtendedProjects();

  document.getElementById("extProjectTitle").value = "";
  document.getElementById("extProjectDesc").value = "";
}

function renderExtendedProjects() {
  const container = document.getElementById("extPreviewProjects");
  container.innerHTML = "";

  extProjects.forEach((proj, index) => {
    const div = document.createElement("div");
    div.classList.add("portfolio-card");
    div.innerHTML = `
      <h3>${proj.title}</h3>
      <p>${proj.desc}</p>
      <button onclick="removeExtendedProject(${index})">Delete</button>
    `;
    container.appendChild(div);
  });
}

function removeExtendedProject(index) {
  extProjects.splice(index, 1);
  renderExtendedProjects();
}
