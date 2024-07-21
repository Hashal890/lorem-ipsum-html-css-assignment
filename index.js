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

const addLoremIpsumTextBelowDisplayImage = () => {
  const displayInformationLoremIpsumText =
    document.getElementById("display-info");
  const sampleLoremIpsumText =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente dolore accusamus id amet nobis molestias doloremque praesentium aperiam veniam officia, facere quis eveniet pariatur rem temporibus aliquam odio atque qui.";
  for (let i = 0; i < 3; i++) {
    const newDisplayInfoText = document.createElement("p");
    newDisplayInfoText.innerHTML = sampleLoremIpsumText;
    displayInformationLoremIpsumText.appendChild(newDisplayInfoText);
  }
};

window.addEventListener("load", () => {
  addNavbarHeadings();
  addLoremIpsumTextBelowDisplayImage();
});
