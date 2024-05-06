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
      images: [P1, P2, P3],
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
        "Look like a visionary CEO and wear the same black t-shirt every day.",
      options: "Black",
      imageSrc: P3,
      images: [P1, P2, P3],
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
      images: [P1, P2, P3],
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
        "Look like a visionary CEO and wear thsbscjbvb sn  s c cs  jsj d ndiwsisnw de  ce c  c s a djnajnsj djhbd c chhhhhhhjc asc aj ds da saaaaaaaaa swded c scxnsbc h ed xhebdscn cnjcbjbj cbb xcbx hhbvb c    ndjndbwhsdbxhwbdhxb w xs  s cns dc dshcjdc           nbnb jnjbe same black t-shirt every day.",
      options: "Black",
      imageSrc: P5,
      images: [P1, P2, P3],
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
      description:
        "There are not many passa,f erkjkbfubej vd hjer fe f j vdv gj  rjhg hej fvndv e fnvjer n vndfvbd v nd vn dges of lorem ipsum available alteration in",
    },
    {
      id: 2,
      image: B2,
      title: "Learn the right way to use wall sheets",
      date: "02/02/2023",
      description:
        "There are not many pas dfdfdgdfvd f vfgr dfvedfsagev freglktt rglkgklaa frt4tfs s d vcergtdslkf of lorem ipsu xhbfhvbfbbcjdbhsjcssbcsbm available alteration in",
    },
    {
      id: 3,
      image: B3,
      title: "Difference between wallpaper and sheets",
      date: "03/03/2023",
      description:
        "There are not many passages v fj vj cchjbwoodnqj jqwnis njdxqn lNQERWE qdjkkk ncd vjkekof lorem ipsum available alteration in",
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
