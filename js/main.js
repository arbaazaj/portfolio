document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("projectContainer");

  if (!container) {
    console.error("Project container not found");
    return;
  }

  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";

    let imagesHTML = "";

    if (project.screenshots && project.screenshots.length > 0) {
      imagesHTML = `
        <div class="carousel">
          <img src="${project.screenshots[0]}" class="carousel-img" />
        </div>
      `;
    }

    card.innerHTML = `
      ${imagesHTML}
      <h3>${project.title}</h3>
      <p>${project.description}</p>

      <div class="tags">
        ${project.tech.map(t => `<span>${t}</span>`).join("")}
      </div>

      <div class="links">
        ${
          project.github.startsWith("http")
            ? `<a href="${project.github}" target="_blank">GitHub</a>`
            : `<span class="private">${project.github}</span>`
        }
      </div>
    `;

    container.appendChild(card);
  });

});
