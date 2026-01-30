const container = document.getElementById("projectContainer");

function createCarousel(images) {
  if (!images || images.length === 0) return "";

  return `
    <div class="carousel">
      <img src="${images[0]}" class="carousel-img"/>

      <button class="nav prev">‹</button>
      <button class="nav next">›</button>

      <div class="indicators">
        ${images.map((_, i) =>
          `<span class="${i === 0 ? "active" : ""}"></span>`
        ).join("")}
      </div>
    </div>
  `;
}

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    ${createCarousel(project.screenshots)}
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

document.addEventListener("click", e => {
  if (!e.target.classList.contains("nav")) return;

  const carousel = e.target.closest(".carousel");
  const img = carousel.querySelector(".carousel-img");
  const images = [...carousel.dataset.images];
});
