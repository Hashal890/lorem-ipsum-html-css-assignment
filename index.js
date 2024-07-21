// "./assets/phoenix-logo.png"
// "./assets/heroimg.jpg"
// "./assets/rooms.jpg"
// "./assets/dining.jpg"
// "/assets/pool.jpg"

const addNavbarHeadings = () => {
  const navbarHeadings = [
    "Home",
    "Order",
    "Food",
    "Restaurant",
    "Testimonial",
    "Contact Us",
  ];
  const navbarHeadingsMain = document.getElementById("nav-headers");
  navbarHeadings.map((header) => {
    const newNavbarHeading = document.createElement("h3");
    newNavbarHeading.innerText = header;
    navbarHeadingsMain.appendChild(newNavbarHeading);
  });
};

window.addEventListener("load", () => {
  addNavbarHeadings();
});
