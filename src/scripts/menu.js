const menu = document.querySelector(".menu");
      menu?.addEventListener("click", () => {
        const isExpand = menu.getAttribute("aria-expanded") === "true";
        menu.setAttribute("aria-expanded", `${!isExpand}`);
        console.log("clicked");
      });