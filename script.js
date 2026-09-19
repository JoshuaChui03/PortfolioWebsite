import { projects } from "./data/projects.js";
import { experiences } from "./data/experience.js";
import { skills } from "./data/skills.js";

// ----------------------------------------
// Projects
// ----------------------------------------
function renderProjects() {
    const projectGrid = document.querySelector("#project-grid");

    if (!projectGrid) {
        return;
    }

    projects.forEach((project) => {
        const card = document.createElement("article");
        card.className = `project-card accent-${project.accent}`;

        const technologies = project.technologies
            .map((technology) => `<span>${technology}</span>`)
            .join("");

        card.innerHTML = `
            <div class="project-meta">
                <span>${String(project.id).padStart(2, "0")}</span>
                <span>${project.year}</span>
            </div>
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <div class="tags">${technologies}</div>
            <div class="project-links">
                <a href="${project.projectPage}">view project →</a>
                <a href="${project.liveUrl}" target="_blank" rel="noreferrer">${project.liveLabel} ↗</a>
            </div>
        `;

        projectGrid.appendChild(card);
    });
}

// ----------------------------------------
// Experience
// ----------------------------------------
function renderExperience() {
    const experienceList = document.querySelector("#experience-list");

    if (!experienceList) {
        return;
    }

    experiences.forEach((experience) => {
        const row = document.createElement("article");
        row.className = "experience-row";

        const technologies = experience.technologies
            .map((technology) => `<span>${technology}</span>`)
            .join("");

        row.innerHTML = `
            <div class="experience-date">
                <strong>${experience.dates}</strong>
                <span>${experience.company}</span>
            </div>
            <div>
                <h2>${experience.role}</h2>
                <p>${experience.description}</p>
                <div class="tags">${technologies}</div>
            </div>
        `;

        experienceList.appendChild(row);
    });
}

// ----------------------------------------
// Skills
// ----------------------------------------
function renderSkills() {
    const skillsGrid = document.querySelector("#skills-grid");

    if (!skillsGrid) {
        return;
    }

    skills.forEach((skillGroup) => {
        const column = document.createElement("div");

        const skillItems = skillGroup.items
            .map((skill) => `<p>${skill}</p>`)
            .join("");

        column.innerHTML = `
            <h3>${skillGroup.category}</h3>
            ${skillItems}
        `;

        skillsGrid.appendChild(column);
    });
}

// ----------------------------------------
// Mobile navigation
// ----------------------------------------
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const open = navLinks.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(open));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

// ----------------------------------------
// Build page
// ----------------------------------------
renderProjects();
renderExperience();
renderSkills();
