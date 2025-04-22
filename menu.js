document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll("[data-bs-toggle='collapse']");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("data-target"));
            
            // Cierra todos los otros submenús
            document.querySelectorAll(".submenu").forEach(menu => {
                if (menu !== target) {
                    let collapse = bootstrap.Collapse.getInstance(menu);
                    if (!collapse) {
                        collapse = new bootstrap.Collapse(menu, { toggle: false });
                    }
                    collapse.hide();
                }
            });

            // Alterna el submenú actual
            let current = bootstrap.Collapse.getInstance(target);
            if (!current) {
                current = new bootstrap.Collapse(target, { toggle: true });
            } else {
                current.toggle();
            }

            e.preventDefault();
        });
    });
});
