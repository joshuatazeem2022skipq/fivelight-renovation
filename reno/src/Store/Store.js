// import React from "react";
import { NotificationManager } from "react-notifications";
// import { toast } from "react-toastify";
// import { Toast } from "react-toastify/dist/components";
import { combineReducers, createStore } from "redux";
import { v4 } from "uuid";
import P1 from "../Images/About/Recent Projects/project-v1-1.jpg";
import P2 from "../Images/About/Recent Projects/project-v1-2.jpg";
import P3 from "../Images/About/Recent Projects/project-v1-3.jpg";
import P4 from "../Images/About/Recent Projects/project-v1-4.jpg";
import P5 from "../Images/About/Recent Projects/project-v1-5.jpg";

import B1 from "../Images/Blog/blog-v2-1-370x280.jpg";
import B2 from "../Images/Blog/blog-v2-2-370x280.jpg";
import B3 from "../Images/Blog/blog-v2-3-370x280.jpg";
let CardsData = {
  orders: [],
  searched: "",
  products: [
    {
      id: v4(),
      name: "Kitchen Wall design",
      href: "#",
      price: "$256",
      dis: "5%",
      cut: "$45",
      description:
        "Elevate the heart of your home with our bespoke kitchen wall design service. We understand that the kitchen is more than just a functional space—it's where memories are made and culinary creativity flourishes. Our team of experienced designers combines practicality with aesthetics to craft personalized wall designs that perfectly complement your lifestyle and culinary aspirations. Whether you're seeking a sleek, minimalist backdrop for modern cooking or a cozy, rustic atmosphere for family gatherings, we offer a diverse range of materials, colors, and finishes to suit every taste. Transform your kitchen into a culinary haven with our tailored wall design solutions and create a space that inspires culinary creativity.Discover the art of culinary design with our expert kitchen wall design service. We believe that the kitchen should reflect your personality and culinary passions, serving as a space where functionality meets style. Our dedicated team collaborates closely with you to understand your vision and lifestyle requirements, curating innovative wall designs that enhance the ambiance and functionality of your kitchen. Whether you're drawn to contemporary trends or timeless classics, we offer a wide selection of materials and finishes, from sleek tiles to textured wallpapers, ensuring a bespoke solution that resonates with your unique aesthetic. Elevate your cooking experience and add a touch of sophistication to your kitchen with our customized wall design service, where every detail is crafted to perfection",
      options: "8 colors",
      imageSrc: P1,
      images: [P1, P2, P3],
      imageAlt:
        "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
    },
    {
      id: v4(),
      name: "Washroom Wall design",
      href: "#",
      price: "$32",
      dis: "5%",
      cut: "$45",
      description:
        "Transform your washroom into a serene oasis with our tailored wall design service. We understand that the washroom is a sanctuary for relaxation and rejuvenation, and our expert designers specialize in creating spaces that seamlessly blend functionality with tranquility. From luxurious marble accents to soothing pastel tones, our diverse range of materials and finishes allows you to personalize your washroom according to your unique style and preferences. Whether you envision a contemporary spa-like retreat or a timeless, elegant ambiance, our team works closely with you to bring your vision to life. Elevate your daily routine and indulge in the ultimate bathing experience with our bespoke washroom wall design solutions.Experience the epitome of luxury with our bespoke washroom wall design service. We believe that the washroom should be a haven of comfort and sophistication, reflecting your individuality and sense of style. Our talented designers specialize in curating personalized wall designs that combine opulence with functionality, ensuring a space that is both visually stunning and highly practical. From intricate mosaic patterns to sleek, modern finishes, we offer a wide array of options to suit every taste and aesthetic preference. Elevate your washroom to new heights of elegance and sophistication with our customized wall design service, where every detail is meticulously crafted to create a space that exudes luxury and refinement.",
      options: "Black",
      imageSrc: P2,
      images: [P2, P2, P3],
      imageAlt: "Front of plain black t-shirt.",
    },
    {
      id: v4(),
      name: "Basement Design",
      href: "#",
      price: "$32",
      dis: "5%",
      cut: "$45",
      description:
        "Unlock the full potential of your basement with our comprehensive basement design service. Often overlooked and underutilized, basements offer a wealth of untapped space that can be transformed into anything from a cozy retreat to a versatile entertainment hub. Our team of experienced designers specializes in maximizing every square foot, crafting innovative layouts that cater to your specific needs and aspirations. Whether you envision a home theater for family movie nights, a stylish guest suite for hosting visitors, or a functional home office that inspires productivity, we work closely with you to conceptualize and bring your basement dreams to fruition.Beyond functionality, our basement design service prioritizes aesthetics and comfort, ensuring that your subterranean sanctuary is a seamless extension of your home's overall design. From lighting solutions that create ambiance to finishes that evoke warmth and sophistication, every detail is carefully curated to enhance your basement's appeal and usability. With our expertise guiding the way, your basement becomes not just an afterthought, but a valuable addition to your living space that enriches your lifestyle and adds significant value to your home. Whether you're seeking practical solutions for storage and organization or envisioning a luxurious retreat beneath the surface, our basement design service transforms your basement into a space you'll love to live in. ",
      options: "Black",
      imageSrc: P3,
      images: [P3, P2, P1],
      imageAlt: "Front of plain black t-shirt.",
    },
    {
      id: v4(),
      name: "Tile floor Design",
      href: "#",
      price: "$32",
      discount: "5%",
      originalPrice: "$45",
      description:
        "Our tile floor design service brings a touch of elegance and functionality to your space, transforming ordinary floors into stunning focal points. With a keen eye for detail and a passion for creativity, we specialize in crafting personalized tile designs tailored to your unique style and preferences. Whether you prefer sleek modern aesthetics or timeless classical motifs, our expert team works closely with you to bring your vision to life, ensuring every tile is meticulously placed for a flawless finish. Elevate your interior with our tile floor design service and discover the transformative power of beautiful flooring.Elevate the ambiance of your home or commercial space with our bespoke tile floor design service. From contemporary chic to rustic charm, our skilled designers harness the versatility of tiles to create captivating flooring solutions that reflect your individual taste and lifestyle. We take pride in our attention to detail, meticulously curating patterns, textures, and color palettes to enhance the aesthetic appeal of any room. Whether you're revamping a kitchen, bathroom, or entire living area, our innovative approach and commitment to quality craftsmanship ensure a stunning result that exceeds expectations. Experience the beauty of bespoke tile floor design and unlock the potential of your space.        ",
      options: "Black",
      imageSrc: P4,
      images: [P4, P2, P3],
      imageAlt: "Front of plain black t-shirt.",
    },
    {
      id: v4(),
      name: "Painting wall Design",
      href: "#",
      price: "$32",
      dis: "5%",
      cut: "$45",
      description:
        "Transforming your space with a fresh coat of paint isn't just about covering up scuffs and marks; it's an opportunity to infuse your walls with personality and style. Our painting wall design service goes beyond the conventional brush strokes, offering a palette of possibilities to elevate your interior aesthetic. Whether you crave serene minimalism, vibrant bursts of color, or intricate patterns inspired by global motifs, our team of skilled designers and painters collaborates with you to bring your vision to life. From accent walls that serve as focal points to cohesive room schemes that evoke harmony, we tailor each project to suit your taste, lifestyle, and the unique character of your homeWith our painting wall design service, your walls become canvases for creativity, reflecting your individuality and setting the tone for your entire space. We pay meticulous attention to detail, from precise color matching to flawless execution, ensuring a result that surpasses your expectations. Whether you're revitalizing a single room or undergoing a full-scale renovation, our commitment to craftsmanship and customer satisfaction ensures that every brushstroke contributes to a space that feels distinctly yours. Experience the transformative power of paint with our painting wall design service, where every wall becomes a work of art..",
      options: "Black",
      imageSrc: P5,
      images: [P5, P2, P3],
      imageAlt: "Front of plain black t-shirt.",
    },

    // More products...
  ],
};

function ProductsSection(oldData = CardsData, newData) {
  oldData = {
    ...oldData,
    products: [...oldData.products],
    orders: [...oldData.orders],
  };
  if (newData.type === "ADD_PRODUCT") {
    oldData.products.push(newData.payload);
    NotificationManager.success("Product added", "Added");
  } else if (newData.type === "SEARCH_PRODUCT") {
    oldData.searched = newData.payload;
  } else if (newData.type === "TOGGLE_LIKED_BTN") {
    let item = oldData.products.find((product) => product.id === newData.id);
    item.abc = !item.abc;
    NotificationManager.success("Liked");
  } else if (newData.type === "ADDED_tO_CART") {
    oldData.orders.push(newData.payload);
    NotificationManager.success("Product added to cart", "Added");
  }

  return oldData;
}

let BlogsData = {
  Blogs: [
    {
      id: 1,
      image: B1,
      title: "How to protect your damaged walls",
      date: "01/01/2023",
      description: "Save Your Walls: Repair Solutions and Preventative Tips",
      Paragraph:
        "Have your once pristine walls become a canvas of imperfections – a collection of holes, scratches, or even worse, water damage? Don't fret! This comprehensive guide is here to empower you as a home improvement warrior. We'll equip you with the knowledge to not only tackle existing damage but also implement preventative measures to keep your walls looking their best. From simple patching techniques for minor dings to solutions for more extensive repairs like water damage, we've got you covered. We'll also delve into clever preventative measures like corner guards and strategic furniture placement, helping you avoid future mishaps. With a little effort and the right tools (don't worry, we'll guide you through those too!), you can restore your walls to their smooth and beautiful glory, and keep them that way for years to come.",
    },
    {
      id: 2,
      image: B2,
      title: "Learn the right way to use wall sheets",
      date: "02/02/2023",
      description: "Wall Sheets: A Quick and Easy Fix Done Right",
      Paragraph:
        "Wall sheets have become a popular choice for sprucing up your space. They offer a quick, easy, and often budget-friendly way to transform a room. But with so many varieties available, navigating the world of wall sheets can feel overwhelming. This guide will equip you with the knowledge to use wall sheets effectively. We'll delve into the different types of wall sheets, from self-adhesive to vinyl, and their ideal applications. You'll learn how to properly prepare your walls for installation and discover expert tips for achieving a flawless finish.  Whether you're a seasoned DIYer or a complete beginner, this guide will empower you to unlock the full potential of wall sheets and breathe new life into your walls.",
    },
    {
      id: 3,
      image: B3,
      title: "Difference between wallpaper and sheets",
      date: "03/03/2023",
      description:
        "Wallpaper vs. Wall Sheets: Choosing the Perfect Wall Covering for You",
      Paragraph:
        "Both wallpaper and wall sheets offer exciting ways to add personality and style to your walls. But with so many options available, deciding between the two can be tricky. This guide will break down the key differences between wallpaper and wall sheets, helping you choose the perfect solution for your needs. We'll compare their material composition, design options, ease of installation, and durability. From the classic elegance of wallpaper to the modern convenience of wall sheets, this breakdown will empower you to make an informed decision and achieve the stunning wall transformation you desire.",
    },
  ],
};
function BlogsSection(oldData = BlogsData, newData) {
  oldData = {
    ...oldData,
    products: [...oldData.Blogs],
    // orders: [...oldData.orders],
  };
  if (newData.type === "ADD_PRODUCT") {
    oldData.products.push(newData.payload);
    NotificationManager.success("Product added", "Added");
  } else if (newData.type === "SEARCH_PRODUCT") {
    oldData.searched = newData.payload;
  } else if (newData.type === "TOGGLE_LIKED_BTN") {
    let item = oldData.products.find((product) => product.id === newData.id);
    item.abc = !item.abc;
    NotificationManager.success("Liked");
  } else if (newData.type === "ADDED_tO_CART") {
    oldData.orders.push(newData.payload);
    NotificationManager.success("Product added to cart", "Added");
  }

  return oldData;
}
let initialAuthSection = {
  loggedUser: null,
  users: [],
};

function authSection(oldData = initialAuthSection, newData) {
  oldData = { ...oldData };
  if (newData.type === "USER_CREATED") {
    oldData.users.push(newData.payload);
    NotificationManager.success("Congratulations,you are signed in", "Signed");
  } else if (newData.type === "USER_LOGGED_IN") {
    oldData.loggedUser = newData.payload;
  } else if (newData.type === "USER_LOGGED_OUT") {
    localStorage.removeItem("someToken");
    oldData.loggedUser = null;
  }
  return oldData;
}

let allData = combineReducers({
  ProductsSection,
  authSection,
  BlogsSection,
});
let store = createStore(allData);

export default store;
