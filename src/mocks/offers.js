export default [{
  city: `Amsterdam`,
  id: 1,
  mark: `Premium`,
  photos: [{
    src: `https://baconmockup.com/800/400/`,
    title: `alt text 1`
  }, {
    src: `https://baconmockup.com/700/400/`,
    title: `alt text 2`
  }],
  type: `Private room`,
  bedrooms: 1,
  adults: 1,
  price: 123,
  rating: 5,
  inside: [`TV`, `Kitchen`],
  host: {
    name: `test user`,
    avatar: `https://baconmockup.com/128/128/`,
    super: false
  },
  title: `this is a title`,
  description: `this is a description`,
  reviews: [{
    time: `2020-05-01`,
    rating: 5,
    user: {
      name: `test user2`,
      avatar: `https://baconmockup.com/128/128/`
    },
    text: `good place`
  }]
}];
