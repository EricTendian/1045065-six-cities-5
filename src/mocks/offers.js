import faker from "faker";

const generate = (items, callback) => {
  return new Array(items).fill(null).map(callback);
};

let offers = generate(4, () => {
  return {
    city: `Amsterdam`,
    mark: faker.random.arrayElement([`Premium`, ``]),
    photos: generate(6, () => {
      return {
        src: faker.image.city(300, 300, true),
        title: faker.random.words(3)
      };
    }),
    type: faker.random.arrayElement([`Private room`, `Apartment`, `House`, `Hotel`]),
    bedrooms: faker.random.number({min: 1, max: 4}),
    adults: faker.random.number({min: 1, max: 8}),
    price: faker.random.number({min: 50, max: 500}),
    rating: faker.random.number({min: 1, max: 5}),
    inside: generate(10, () => faker.commerce.productName()),
    host: {
      name: faker.name.findName(),
      avatar: faker.image.avatar(),
      super: faker.random.boolean()
    },
    name: faker.commerce.productAdjective() + ` ` + faker.address.streetName(),
    description: faker.lorem.paragraph(),
    reviews: generate(faker.random.number({min: 0, max: 10}), () => {
      return {
        time: faker.date.past().toDateString(),
        rating: faker.random.number({min: 1, max: 5}),
        user: {
          name: faker.name.findName(),
          avatar: faker.image.avatar()
        },
        text: faker.lorem.paragraph()
      };
    })
  };
});

offers.map((element, index) => {
  element.id = index + 1;
});

export default offers;
