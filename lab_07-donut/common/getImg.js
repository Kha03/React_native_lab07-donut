const getLocalImage = (img) => {
  switch (img) {
    case "../assets/img/donut_red 1.png":
      return require("../assets/img/donut_red 1.png");
    case "../assets/img/donut_yellow 1.png":
      return require("../assets/img/donut_yellow 1.png");
    case "../assets/img/green_donut 1.png":
      return require("../assets/img/green_donut 1.png");
    case "../assets/img/tasty_donut 1.png":
      return require("../assets/img/tasty_donut 1.png");
    default:
      return require("../assets/img/donut_red 1.png");
  }
};
export default getLocalImage;
