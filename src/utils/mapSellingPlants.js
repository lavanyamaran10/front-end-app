import plant0 from "../assets/rosegold.png";
import plant1 from "../assets/plant1.png";
import plant3 from "../assets/plant3.png";
import plant4 from "../assets/plant4.png";
import plant5 from "../assets/plant5.png";
import plant6 from "../assets/plant6.png";

export function mapPlants() {
  return [
    {
      image: plant0,
      header: "Aglaonema plant",
      content:
        "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
      price: 300,
    },

    {
      image: plant1,
      header: "Plantain Lilies",
      content:
        "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
      price: 380,
    },
    {
      image: plant3,
      header: "Cactus",
      content: "It is known for their ability to thrive in arid environments",
      price: 259,
    },
    {
      image: plant4,
      header: "Swiss cheese Plant",
      content:
        "It is a popular tropical houseplant known for its distinctive, perforated leaves",
      price: 400,
    },
    {
      image: plant5,
      header: "Sansevieria plant",
      content:
        "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
      price: 450,
    },
    {
      image: plant6,
      header: "Agave plant",
      content:
        "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
      price: 359,
    },
  ];
}
