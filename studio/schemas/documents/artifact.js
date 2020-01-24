export default {
  name: "artifact",
  type: "document",
  title: "Artifact",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name"
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "Some frontend will require a slug to be set to be able to show the person",
      options: {
        source: "name",
        maxLength: 96
      }
    },
    {
      name: "votes",
      title: "Votes",
      type: "number",
      readOnly: true
    }
  ],
  preview: {
    select: {
      title: "name",
      media: "image"
    }
  }
};
