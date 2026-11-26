document.addEventListener("DOMContentLoaded", () => {
    const activeLab = document.body.dataset.lab || "1";

    const labs = [
        { id: "1", title: "Лабораторна<br>робота №1", href: "index.html" },
        { id: "2", title: "Лабораторна<br>робота №2", href: "lab2.html" },
        { id: "3", title: "Лабораторна<br>робота №3", href: "lab3.html" },
        { id: "4", title: "Лабораторна<br>робота №4", href: "lab4.html" },
        { id: "5", title: "Лабораторна<br>робота №5", href: "lab5.html" },
        { id: "6", title: "Лабораторна<br>робота №6", href: "#", disabled: true },
        { id: "7", title: "Лабораторна<br>робота №7", href: "#", disabled: true },
        { id: "8", title: "Лабораторна<br>робота №8", href: "#", disabled: true },
        { id: "9", title: "Лабораторна<br>робота №9", href: "#", disabled: true },
    ];

    // 1. Шапка
    const headerEl = document.getElementById("report-header");
    if (headerEl) {
        headerEl.className = "report-header";
        headerEl.innerHTML = `
            <div class="header-text">
                <h1>З ДИСЦИПЛІНИ «WEB-ОРІЄНТОВАНІ ТЕХНОЛОГІЇ. FRONTEND РОЗРОБКИ»</h1>
                <p><strong>Виконавець:</strong> студент групи ІО-45 Унятицький Антон</p>
            </div>
            <div class="photo-box">
                <img src="img/student.jpg" alt="Фото студента">
            </div>
        `;
    }

    // 2. Горизонтальне меню лабораторних
    const navEl = document.getElementById("labs-nav");
    if (navEl) {
        navEl.className = "labs-nav";
        navEl.innerHTML = labs.map((lab) => {
            const isActive = lab.id === activeLab;
            const classes = [
                isActive ? "active" : "",
                lab.disabled ? "disabled" : "",
            ].filter(Boolean).join(" ");

            const ariaCurrent = isActive ? ' aria-current="page"' : "";
            const ariaDisabled = lab.disabled ? ' aria-disabled="true" tabindex="-1"' : "";

            return `<a href="${lab.href}" class="${classes}"${ariaCurrent}${ariaDisabled}>${lab.title}</a>`;
        }).join("");
    }

    // 3. Автоматичний сайдбар з назв section[id]
    const sidebarEl = document.getElementById("sidebar");
    const sections = document.querySelectorAll("main section[id]");
    if (sidebarEl && sections.length > 0) {
        sidebarEl.innerHTML = Array.from(sections).map((sec) => {
            const label = sec.dataset.nav || sec.querySelector("h3")?.textContent.trim() || sec.id;
            return `<a href="#${sec.id}">${label}</a>`;
        }).join("");
    }

    // 4. Підвал
    const footerEl = document.getElementById("report-footer");
    if (footerEl) {
        footerEl.className = "report-footer";
        footerEl.innerHTML = `<p>&copy; 2026 Звітний документ з WEB-розробки. Виконав студент групи ІО-45 Унятицький Антон</p>`;
    }
});