document.addEventListener("DOMContentLoaded", () => {
    const descriptions = [
      { title: "ArtStation", text: "Explore my 3D environments and artwork." },
      { title: "LinkedIn", text: "Connect with me professionally." },
      { title: "YouTube", text: "Find the games I programmed." },
      { title: "itch.io", text: "Play my indie games." },
      { title: "GitHub", text: "View my coding projects." },
      { title: "Discord", text: "Join my community server." },
      { title: "Email", text: "Contact me directly via email." }
    ];
  
    const iconsChildWrapper = document.querySelector(".iconsChildWrapper");
    const iconDescription = iconsChildWrapper.querySelector(".iconDescription");
    const titleEl = iconDescription.querySelector("h3");
    const textEl = iconDescription.querySelector("p");
    const links = iconsChildWrapper.querySelectorAll("a");
  
    // Animation classes to cycle through
    const animationClasses = ["fadeScale", "fadeSlideLeft", "fadeSlideRight"];
  
    links.forEach((link, idx) => {
      link.addEventListener("mouseenter", () => {
        // Update infobox content
        const { title, text } = descriptions[idx];
        titleEl.textContent = title;
        textEl.textContent = text;
  
        // Show infobox with animation class
        iconDescription.classList.add("show");
  
        // Remove any previous animation classes from all icons
        links.forEach(l => {
          l.firstElementChild.classList.remove(...animationClasses);
        });
  
        // Add a different animation class to hovered icon
        const animClass = animationClasses[idx % animationClasses.length];
        link.firstElementChild.classList.add(animClass);
      });
  
      link.addEventListener("mouseleave", () => {
        // Hide infobox
        iconDescription.classList.remove("show");
        titleEl.textContent = "";
        textEl.textContent = "";
  
        // Remove animation classes from all icons
        links.forEach(l => {
          l.firstElementChild.classList.remove(...animationClasses);
        });
      });
    });
  });
  