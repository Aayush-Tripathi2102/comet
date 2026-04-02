// Shoe model
export type ShoeTag = "BESTSELLER" | "RESTOCKED";
interface Review {
  name: string;
  title: string;
  review: string;
  star: number;
  date: string;
  likes: number;
}
export interface Shoe {
  id: number;
  name: string;
  type: string;
  price: number;
  image: string;
  images: string[];
  tag?: ShoeTag;
  Reviews?: Review[];
}
export interface CustomerReview {
  name: string;
  title: string;
  review: string;
  image: string;
}
export interface cartItem {
  name: string;
  price: number;
  size: number;
  image: string;
  quantity: number;
  giftWrap?: boolean;
}
export const shoes: Shoe[] = [{
  id: 0,
  name: "X Lows Cortado",
  type: "Sneakers",
  price: 4999,
  image: "/shoe.png",
  images: ["/shoe.png", "/shoe.png", "/shoe.png"],
  tag: "BESTSELLER",
  Reviews: [{
    name: "John Doe",
    title: "Amazing Shoes!",
    review: "These shoes are incredibly comfortable and stylish.",
    star: 5,
    date: "2023-10-01",
    likes: 12
  }, {
    name: "Jane Smith",
    title: "Good Value for Money",
    review: "Great quality for the price. Highly recommend!",
    star: 4,
    date: "2023-09-15",
    likes: 8
  }, {
    name: "Alice Johnson",
    title: "Not as Expected",
    review: "The shoes look good but didn't fit well.",
    star: 3,
    date: "2023-08-20",
    likes: 3
  }, {
    name: "Bob Brown",
    title: "Exceeded Expectations",
    review: "I love these shoes! They exceeded my expectations in every way.",
    star: 5,
    date: "2023-07-30",
    likes: 15
  }, {
    name: "Charlie Davis",
    title: "Comfortable but Pricey",
    review: "Very comfortable shoes, but I found them a bit pricey.",
    star: 4,
    date: "2023-06-25",
    likes: 5
  }]
}, {
  id: 1,
  name: "Comet Classic Black",
  type: "Sneakers",
  price: 4599,
  image: "/shoe.png",
  images: ["/shoe.png", "/shoe.png", "/shoe.png"],
  Reviews: [{
    name: "John Doe",
    title: "Amazing Shoes!",
    review: "These shoes are incredibly comfortable and stylish.",
    star: 5,
    date: "2023-10-01",
    likes: 12
  }, {
    name: "Jane Smith",
    title: "Good Value for Money",
    review: "Great quality for the price. Highly recommend!",
    star: 4,
    date: "2023-09-15",
    likes: 8
  }, {
    name: "Alice Johnson",
    title: "Not as Expected",
    review: "The shoes look good but didn't fit well.",
    star: 3,
    date: "2023-08-20",
    likes: 3
  }, {
    name: "Bob Brown",
    title: "Exceeded Expectations",
    review: "I love these shoes! They exceeded my expectations in every way.",
    star: 5,
    date: "2023-07-30",
    likes: 15
  }, {
    name: "Charlie Davis",
    title: "Comfortable but Pricey",
    review: "Very comfortable shoes, but I found them a bit pricey.",
    star: 4,
    date: "2023-06-25",
    likes: 5
  }]
}, {
  id: 2,
  name: "Comet Classic Black",
  type: "Sneakers",
  price: 4599,
  image: "/shoe.png",
  images: ["/shoe.png", "/shoe.png", "/shoe.png"],
  Reviews: [{
    name: "John Doe",
    title: "Amazing Shoes!",
    review: "These shoes are incredibly comfortable and stylish.",
    star: 5,
    date: "2023-10-01",
    likes: 12
  }, {
    name: "Jane Smith",
    title: "Good Value for Money",
    review: "Great quality for the price. Highly recommend!",
    star: 4,
    date: "2023-09-15",
    likes: 8
  }, {
    name: "Alice Johnson",
    title: "Not as Expected",
    review: "The shoes look good but didn't fit well.",
    star: 3,
    date: "2023-08-20",
    likes: 3
  }, {
    name: "Bob Brown",
    title: "Exceeded Expectations",
    review: "I love these shoes! They exceeded my expectations in every way.",
    star: 5,
    date: "2023-07-30",
    likes: 15
  }, {
    name: "Charlie Davis",
    title: "Comfortable but Pricey",
    review: "Very comfortable shoes, but I found them a bit pricey.",
    star: 4,
    date: "2023-06-25",
    likes: 5
  }]
}, {
  id: 3,
  name: "Comet Vault White",
  type: "Sneakers",
  price: 4799,
  image: "/shoe.png",
  images: ["/shoe.png", "/shoe.png", "/shoe.png"],
  tag: "BESTSELLER",
  Reviews: [{
    name: "John Doe",
    title: "Amazing Shoes!",
    review: "These shoes are incredibly comfortable and stylish.",
    star: 5,
    date: "2023-10-01",
    likes: 12
  }, {
    name: "Jane Smith",
    title: "Good Value for Money",
    review: "Great quality for the price. Highly recommend!",
    star: 4,
    date: "2023-09-15",
    likes: 8
  }, {
    name: "Alice Johnson",
    title: "Not as Expected",
    review: "The shoes look good but didn't fit well.",
    star: 3,
    date: "2023-08-20",
    likes: 3
  }, {
    name: "Bob Brown",
    title: "Exceeded Expectations",
    review: "I love these shoes! They exceeded my expectations in every way.",
    star: 5,
    date: "2023-07-30",
    likes: 15
  }, {
    name: "Charlie Davis",
    title: "Comfortable but Pricey",
    review: "Very comfortable shoes, but I found them a bit pricey.",
    star: 4,
    date: "2023-06-25",
    likes: 5
  }]
}, {
  id: 4,
  name: "Comet Runner Blue",
  type: "Running Shoes",
  price: 3999,
  image: "/shoe.png",
  images: ["/shoe.png", "/shoe.png", "/shoe.png"],
  Reviews: [{
    name: "John Doe",
    title: "Amazing Shoes!",
    review: "These shoes are incredibly comfortable and stylish.",
    star: 5,
    date: "2023-10-01",
    likes: 12
  }, {
    name: "Jane Smith",
    title: "Good Value for Money",
    review: "Great quality for the price. Highly recommend!",
    star: 4,
    date: "2023-09-15",
    likes: 8
  }, {
    name: "Alice Johnson",
    title: "Not as Expected",
    review: "The shoes look good but didn't fit well.",
    star: 3,
    date: "2023-08-20",
    likes: 3
  }, {
    name: "Bob Brown",
    title: "Exceeded Expectations",
    review: "I love these shoes! They exceeded my expectations in every way.",
    star: 5,
    date: "2023-07-30",
    likes: 15
  }, {
    name: "Charlie Davis",
    title: "Comfortable but Pricey",
    review: "Very comfortable shoes, but I found them a bit pricey.",
    star: 4,
    date: "2023-06-25",
    likes: 5
  }]
}, {
  id: 5,
  name: "Comet High Top Red",
  type: "High Top",
  price: 5299,
  image: "/shoe.png",
  images: ["/shoe.png", "/shoe.png", "/shoe.png"],
  tag: "BESTSELLER",
  Reviews: [{
    name: "John Doe",
    title: "Amazing Shoes!",
    review: "These shoes are incredibly comfortable and stylish.",
    star: 5,
    date: "2023-10-01",
    likes: 12
  }, {
    name: "Jane Smith",
    title: "Good Value for Money",
    review: "Great quality for the price. Highly recommend!",
    star: 4,
    date: "2023-09-15",
    likes: 8
  }, {
    name: "Alice Johnson",
    title: "Not as Expected",
    review: "The shoes look good but didn't fit well.",
    star: 3,
    date: "2023-08-20",
    likes: 3
  }, {
    name: "Bob Brown",
    title: "Exceeded Expectations",
    review: "I love these shoes! They exceeded my expectations in every way.",
    star: 5,
    date: "2023-07-30",
    likes: 15
  }, {
    name: "Charlie Davis",
    title: "Comfortable but Pricey",
    review: "Very comfortable shoes, but I found them a bit pricey.",
    star: 4,
    date: "2023-06-25",
    likes: 5
  }]
}, {
  id: 6,
  name: "Comet Slip-On Grey",
  type: "Slip-On",
  price: 3499,
  image: "/shoe.png",
  images: ["/shoe.png", "/shoe.png", "/shoe.png"],
  Reviews: [{
    name: "John Doe",
    title: "Amazing Shoes!",
    review: "These shoes are incredibly comfortable and stylish.",
    star: 5,
    date: "2023-10-01",
    likes: 12
  }, {
    name: "Jane Smith",
    title: "Good Value for Money",
    review: "Great quality for the price. Highly recommend!",
    star: 4,
    date: "2023-09-15",
    likes: 8
  }, {
    name: "Alice Johnson",
    title: "Not as Expected",
    review: "The shoes look good but didn't fit well.",
    star: 3,
    date: "2023-08-20",
    likes: 3
  }, {
    name: "Bob Brown",
    title: "Exceeded Expectations",
    review: "I love these shoes! They exceeded my expectations in every way.",
    star: 5,
    date: "2023-07-30",
    likes: 15
  }, {
    name: "Charlie Davis",
    title: "Comfortable but Pricey",
    review: "Very comfortable shoes, but I found them a bit pricey.",
    star: 4,
    date: "2023-06-25",
    likes: 5
  }]
}, {
  id: 7,
  name: "Comet Vault Black",
  type: "Sneakers",
  price: 4899,
  image: "/shoe.png",
  images: ["/shoe.png", "/shoe.png", "/shoe.png"],
  tag: "RESTOCKED",
  Reviews: [{
    name: "John Doe",
    title: "Amazing Shoes!",
    review: "These shoes are incredibly comfortable and stylish.",
    star: 5,
    date: "2023-10-01",
    likes: 12
  }, {
    name: "Jane Smith",
    title: "Good Value for Money",
    review: "Great quality for the price. Highly recommend!",
    star: 4,
    date: "2023-09-15",
    likes: 8
  }, {
    name: "Alice Johnson",
    title: "Not as Expected",
    review: "The shoes look good but didn't fit well.",
    star: 3,
    date: "2023-08-20",
    likes: 3
  }, {
    name: "Bob Brown",
    title: "Exceeded Expectations",
    review: "I love these shoes! They exceeded my expectations in every way.",
    star: 5,
    date: "2023-07-30",
    likes: 15
  }, {
    name: "Charlie Davis",
    title: "Comfortable but Pricey",
    review: "Very comfortable shoes, but I found them a bit pricey.",
    star: 4,
    date: "2023-06-25",
    likes: 5
  }]
}, {
  id: 8,
  name: "Comet Classic White",
  type: "Sneakers",
  price: 4599,
  image: "/shoe.png",
  images: ["/shoe.png", "/shoe.png", "/shoe.png"],
  Reviews: [{
    name: "John Doe",
    title: "Amazing Shoes!",
    review: "These shoes are incredibly comfortable and stylish.",
    star: 5,
    date: "2023-10-01",
    likes: 12
  }, {
    name: "Jane Smith",
    title: "Good Value for Money",
    review: "Great quality for the price. Highly recommend!",
    star: 4,
    date: "2023-09-15",
    likes: 8
  }, {
    name: "Alice Johnson",
    title: "Not as Expected",
    review: "The shoes look good but didn't fit well.",
    star: 3,
    date: "2023-08-20",
    likes: 3
  }, {
    name: "Bob Brown",
    title: "Exceeded Expectations",
    review: "I love these shoes! They exceeded my expectations in every way.",
    star: 5,
    date: "2023-07-30",
    likes: 15
  }, {
    name: "Charlie Davis",
    title: "Comfortable but Pricey",
    review: "Very comfortable shoes, but I found them a bit pricey.",
    star: 4,
    date: "2023-06-25",
    likes: 5
  }]
}, {
  id: 9,
  name: "Comet Runner Green",
  type: "Running Shoes",
  price: 3999,
  image: "/shoe.png",
  images: ["/shoe.png", "/shoe.png", "/shoe.png"],
  Reviews: [{
    name: "John Doe",
    title: "Amazing Shoes!",
    review: "These shoes are incredibly comfortable and stylish.",
    star: 5,
    date: "2023-10-01",
    likes: 12
  }, {
    name: "Jane Smith",
    title: "Good Value for Money",
    review: "Great quality for the price. Highly recommend!",
    star: 4,
    date: "2023-09-15",
    likes: 8
  }, {
    name: "Alice Johnson",
    title: "Not as Expected",
    review: "The shoes look good but didn't fit well.",
    star: 3,
    date: "2023-08-20",
    likes: 3
  }, {
    name: "Bob Brown",
    title: "Exceeded Expectations",
    review: "I love these shoes! They exceeded my expectations in every way.",
    star: 5,
    date: "2023-07-30",
    likes: 15
  }, {
    name: "Charlie Davis",
    title: "Comfortable but Pricey",
    review: "Very comfortable shoes, but I found them a bit pricey.",
    star: 4,
    date: "2023-06-25",
    likes: 5
  }]
}, {
  id: 10,
  name: "Comet High Top Blue",
  type: "High Top",
  price: 5299,
  image: "/shoe.png",
  images: ["/shoe.png", "/shoe.png", "/shoe.png"],
  tag: "RESTOCKED",
  Reviews: [{
    name: "John Doe",
    title: "Amazing Shoes!",
    review: "These shoes are incredibly comfortable and stylish.",
    star: 5,
    date: "2023-10-01",
    likes: 12
  }, {
    name: "Jane Smith",
    title: "Good Value for Money",
    review: "Great quality for the price. Highly recommend!",
    star: 4,
    date: "2023-09-15",
    likes: 8
  }, {
    name: "Alice Johnson",
    title: "Not as Expected",
    review: "The shoes look good but didn't fit well.",
    star: 3,
    date: "2023-08-20",
    likes: 3
  }, {
    name: "Bob Brown",
    title: "Exceeded Expectations",
    review: "I love these shoes! They exceeded my expectations in every way.",
    star: 5,
    date: "2023-07-30",
    likes: 15
  }, {
    name: "Charlie Davis",
    title: "Comfortable but Pricey",
    review: "Very comfortable shoes, but I found them a bit pricey.",
    star: 4,
    date: "2023-06-25",
    likes: 5
  }]
}, {
  id: 11,
  name: "Comet Slip-On Black",
  type: "Slip-On",
  price: 3499,
  image: "/shoe.png",
  images: ["/shoe.png", "/shoe.png", "/shoe.png"],
  Reviews: [{
    name: "John Doe",
    title: "Amazing Shoes!",
    review: "These shoes are incredibly comfortable and stylish.",
    star: 5,
    date: "2023-10-01",
    likes: 12
  }, {
    name: "Jane Smith",
    title: "Good Value for Money",
    review: "Great quality for the price. Highly recommend!",
    star: 4,
    date: "2023-09-15",
    likes: 8
  }, {
    name: "Alice Johnson",
    title: "Not as Expected",
    review: "The shoes look good but didn't fit well.",
    star: 3,
    date: "2023-08-20",
    likes: 3
  }, {
    name: "Bob Brown",
    title: "Exceeded Expectations",
    review: "I love these shoes! They exceeded my expectations in every way.",
    star: 5,
    date: "2023-07-30",
    likes: 15
  }, {
    name: "Charlie Davis",
    title: "Comfortable but Pricey",
    review: "Very comfortable shoes, but I found them a bit pricey.",
    star: 4,
    date: "2023-06-25",
    likes: 5
  }]
}, {
  id: 12,
  name: "Comet Vault Red",
  type: "Sneakers",
  price: 4899,
  image: "/shoe.png",
  images: ["/shoe.png", "/shoe.png", "/shoe.png"],
  Reviews: [{
    name: "John Doe",
    title: "Amazing Shoes!",
    review: "These shoes are incredibly comfortable and stylish.",
    star: 5,
    date: "2023-10-01",
    likes: 12
  }, {
    name: "Jane Smith",
    title: "Good Value for Money",
    review: "Great quality for the price. Highly recommend!",
    star: 4,
    date: "2023-09-15",
    likes: 8
  }, {
    name: "Alice Johnson",
    title: "Not as Expected",
    review: "The shoes look good but didn't fit well.",
    star: 3,
    date: "2023-08-20",
    likes: 3
  }, {
    name: "Bob Brown",
    title: "Exceeded Expectations",
    review: "I love these shoes! They exceeded my expectations in every way.",
    star: 5,
    date: "2023-07-30",
    likes: 15
  }, {
    name: "Charlie Davis",
    title: "Comfortable but Pricey",
    review: "Very comfortable shoes, but I found them a bit pricey.",
    star: 4,
    date: "2023-06-25",
    likes: 5
  }]
}];
export const customerReviews: CustomerReview[] = [{
  name: "VINEET P",
  title: "COMFORT THAT STANDS OUT",
  review: "Not gonna lie, these shoes stole the spotlight more than the view. Crazy comfy, easy to style, and they’ve been my go-to ever since I got them.",
  image: "/customer.webp"
}, {
  name: "LEIKA",
  title: "COMET = COMFORT + COMPLIMENTS",
  review: "Been wearing these non-stop for errands, dates, even grocery runs. Not a single blister, only compliments. My feet are finally happy.",
  image: "/customer.webp"
}, {
  name: "VINEET P",
  title: "COMFORT THAT STANDS OUT",
  review: "Not gonna lie, these shoes stole the spotlight more than the view. Crazy comfy, easy to style, and they’ve been my go-to ever since I got them.",
  image: "/customer.webp"
}, {
  name: "LEIKA",
  title: "COMET = COMFORT + COMPLIMENTS",
  review: "Been wearing these non-stop for errands, dates, even grocery runs. Not a single blister, only compliments. My feet are finally happy.",
  image: "/customer.webp"
}, {
  name: "VINEET P",
  title: "COMFORT THAT STANDS OUT",
  review: "Not gonna lie, these shoes stole the spotlight more than the view. Crazy comfy, easy to style, and they’ve been my go-to ever since I got them.",
  image: "/customer.webp"
}];
export const cart: cartItem[] = [{
  name: "X LOWS MADAGASCAR",
  price: 4299,
  size: 8,
  image: "/shoe2.webp",
  quantity: 1,
  giftWrap: false
}, {
  name: "COMET RUNNER SHADOW",
  price: 4999,
  size: 9,
  image: "/shoe2.webp",
  quantity: 1,
  giftWrap: false
}, {
  name: "ASTRA HIGH CLASSIC",
  price: 3799,
  size: 7,
  image: "/shoe2.webp",
  quantity: 2,
  giftWrap: false
}];