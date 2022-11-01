export default {
  name: "restuarant",
  title: "Restuarant",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Restuarant Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Restuarant Description ",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Restuarant Image",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude of the Restuarant",
    },

    {
      name: "long",
      type: "number",
      title: "longitude of the Restuarant",
    },

    {
      name: "address",
      type: "string",
      title: "Restuarant Adress ",
      validation: (Rule) => Rule.required(),
    },
    // establish a rating object
    {
      name: "rating",
      type: "number",
      title: "Restuarant Rating",
      validation: (Rule) =>
        Rule.required().min(0).max(5).error("Rating must be between 0 and 5"),
    },
    {
      name: "type",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "dishes",
      title: "Dishes",
      type: "array",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
