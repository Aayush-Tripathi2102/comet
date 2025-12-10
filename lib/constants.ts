// Shoe model
export type ShoeTag = "BESTSELLER" | "RESTOCKED";

export interface Shoe {
  name: string;
  type: string;
  price: number;
  image: string;
  tag?: ShoeTag;
}

export interface CustomerReview {
  name: string;
  title: string;
  review: string;
  image: string;
}

export const shoes: Shoe[] = [
  {
    name: "X Lows Cortado",
    type: "Sneakers",
    price: 4999,
    image: "/shoe.png",
    tag: "BESTSELLER",
  },
  {
    name: "Comet Classic Black",
    type: "Sneakers",
    price: 4599,
    image: "/shoe.png",
  },
  {
    name: "Comet Vault White",
    type: "Sneakers",
    price: 4799,
    image: "/shoe.png",
    tag: "BESTSELLER",
  },
  {
    name: "Comet Runner Blue",
    type: "Running Shoes",
    price: 3999,
    image: "/shoe.png",
  },
  {
    name: "Comet High Top Red",
    type: "High Top",
    price: 5299,
    image: "/shoe.png",
    tag: "BESTSELLER",
  },
  {
    name: "Comet Slip-On Grey",
    type: "Slip-On",
    price: 3499,
    image: "/shoe.png",
  },
  {
    name: "Comet Vault Black",
    type: "Sneakers",
    price: 4899,
    image: "/shoe.png",
    tag: "RESTOCKED",
  },
  {
    name: "Comet Classic White",
    type: "Sneakers",
    price: 4599,
    image: "/shoe.png",
  },
  {
    name: "Comet Runner Green",
    type: "Running Shoes",
    price: 3999,
    image: "/shoe.png",
  },
  {
    name: "Comet High Top Blue",
    type: "High Top",
    price: 5299,
    image: "/shoe.png",
    tag: "RESTOCKED",
  },
  {
    name: "Comet Slip-On Black",
    type: "Slip-On",
    price: 3499,
    image: "/shoe.png",
  },
  {
    name: "Comet Vault Red",
    type: "Sneakers",
    price: 4899,
    image: "/shoe.png",
  },
];

export const customerReviews: CustomerReview[] = [
  {
    name: "VINEET P",
    title: "COMFORT THAT STANDS OUT",
    review: "Not gonna lie, these shoes stole the spotlight more than the view. Crazy comfy, easy to style, and they’ve been my go-to ever since I got them.",
    image: "/customer.webp",
  },
  {
    name: "LEIKA",
    title: "COMET = COMFORT + COMPLIMENTS",
    review: "Been wearing these non-stop for errands, dates, even grocery runs. Not a single blister, only compliments. My feet are finally happy.",
    image: "/customer.webp",
  },
  {
    name: "VINEET P",
    title: "COMFORT THAT STANDS OUT",
    review: "Not gonna lie, these shoes stole the spotlight more than the view. Crazy comfy, easy to style, and they’ve been my go-to ever since I got them.",
    image: "/customer.webp",
  },
  {
    name: "LEIKA",
    title: "COMET = COMFORT + COMPLIMENTS",
    review: "Been wearing these non-stop for errands, dates, even grocery runs. Not a single blister, only compliments. My feet are finally happy.",
    image: "/customer.webp",
  },
  {
    name: "VINEET P",
    title: "COMFORT THAT STANDS OUT",
    review: "Not gonna lie, these shoes stole the spotlight more than the view. Crazy comfy, easy to style, and they’ve been my go-to ever since I got them.",
    image: "/customer.webp",
  }
]