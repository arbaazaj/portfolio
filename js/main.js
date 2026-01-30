const container = document.getElementById("projectContainer");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";

  let imagesHTML = "";

  if (project.images.length > 0) {
    imagesHTML = `
      <div class="carousel">
        <img src="${project.images[0]}" />
        <div class="dots">
          ${project.images.map((_, i) =>
            `<span data-i="${i}"></span>`
          ).join("")}
        </div>
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
