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
        "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
      options: "8 colors",
      imageSrc: P1,
      images: [{ src: P1 }, { src: P2 }, { src: P3 }],
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
        "Look like a visionary CEO and wear the same black t-shirt every day.",
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
      dis: "5%",
      cut: "$45",
      description:
        "Look like a visionary CEO and wear the same black t-shirt every day.",
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
        "Look like a visionary CEO and wear the same black t-shirt every day.",
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
