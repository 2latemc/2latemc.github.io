document.addEventListener("DOMContentLoaded", () => {
    const descriptions = [
      { title: "ArtStation", text: "Explore my 3D environments and artwork." , imgPath:"assets/artstationthumbnail.jpg" },
      { title: "LinkedIn", text: "Connect with me on LinkedIn." , imgPath:"" },
      { title: "YouTube", text: "Watch my YouTube Unreal Engine related Tutorials", imgPath:"assets/ytThumbnail.jpg"  },
      { title: "itch.io", text: "Play my indie games." , imgPath:"assets/itchthumbnail.png" },
      { title: "GitHub", text: "View my coding projects." , imgPath:"" },
      { title: "Discord", text: "Join my community server." , imgPath:"" },
      { title: "Email", text: "Contact me directly via email.", imgPath:"" }
    ];
  
    const iconsChildWrapper = document.querySelector(".iconsChildWrapper");
    const iconDescription = iconsChildWrapper.querySelector(".iconDescription");
    const titleEl = iconDescription.querySelector("h3");
    const textEl = iconDescription.querySelector("p");
    const previewThumbnail = iconDescription.querySelector("img");
    const links = iconsChildWrapper.querySelectorAll("a");
  
    links.forEach((link, idx) => {
      link.addEventListener("mouseenter", () => {
        const { title, text } = descriptions[idx];
        titleEl.textContent = title;
        textEl.textContent = text;

        previewThumbnail.src = descriptions[idx].imgPath;

        // Add the relevant animation class based on icon index (mod length)
        iconDescription.classList.add("fadeInBox");

  
        // Show the infobox with animation
        iconDescription.classList.add("show");
      });
  
      link.addEventListener("mouseleave", () => {
        // Hide infobox and remove animations
        iconDescription.classList.remove("show");
        infoboxAnimations.forEach(anim => iconDescription.classList.remove(anim));
  
        // Clear text
        titleEl.textContent = "";
        textEl.textContent = "";
      });
    });
  });
  