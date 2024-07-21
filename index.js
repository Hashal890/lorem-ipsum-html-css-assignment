window.addEventListener("load", () => {
  const sampleLoremIpsumText =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente dolore accusamus id amet nobis molestias doloremque praesentium aperiam veniam officia.";

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
    for (let i = 0; i < 3; i++) {
      const newDisplayInfoText = document.createElement("p");
      newDisplayInfoText.innerHTML = sampleLoremIpsumText;
      displayInformationLoremIpsumText.appendChild(newDisplayInfoText);
    }
  };

  const addHotelInfoCards = () => {
    const hotelInfoData = [
      {
        title: "ROOMS",
        imageSrc: "./assets/rooms.jpg",
      },
      {
        title: "DINING",
        imageSrc: "./assets/dining.jpg",
      },
      {
        title: "POOL",
        imageSrc: "./assets/pool.jpg",
      },
    ];
    const hotelInfoCards = document.getElementById("info-cards");
    hotelInfoData.map((infoCard) => {
      const { title, imageSrc } = infoCard;
      const createTitle = document.createElement("h4");
      createTitle.innerText = title;
      const createImage = document.createElement("img");
      createImage.src = imageSrc;
      createImage.alt = title.toLocaleLowerCase();
      const createDescription = document.createElement("p");
      createDescription.innerText = sampleLoremIpsumText;
      const createLearnMoreButton = document.createElement("button");
      createLearnMoreButton.innerText = "Learn More";
      const createCardForInfo = document.createElement("div");
      createCardForInfo.className = title.toLocaleLowerCase();
      createCardForInfo.append(
        createImage,
        createTitle,
        createDescription,
        createLearnMoreButton
      );
      hotelInfoCards.append(createCardForInfo);
    });
  };

  addNavbarHeadings();
  addLoremIpsumTextBelowDisplayImage();
  addHotelInfoCards();
});
