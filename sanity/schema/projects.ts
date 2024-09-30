export default {
  name: "projects",
  type: "document",
  title: "Projects",
  fields: [
    {
      name: "key",
      type: "string",
      title: "Key",
    },

    {
      name: "title",
      type: "string",
      title: "Title",
    },

    {
      name: "overview",
      type: "string",
      title: "Overview",
      description: "A short one-liner description of the project.",
    },

    {
      name: "finishedAt",
      type: "date",
      title: "Finished At",
    },

    {
      name: "image",
      title: "Image",
      type: "image",
    },

    {
      name: "techstack",
      title: "TechStack",
      type: "array",
      of: [
        {
          title: "Framework",
          name: "framework",
          type: "object",
          fields: [
            {
              title: "Name",
              name: "name",
              type: "string",
            },
            {
              title: "Image",
              name: "image",
              type: "url",
            },
          ],
        },
      ],
    },

    {
      name: "github",
      title: "Github",
      type: "string",
    },

    {
      name: "demo",
      title: "Demo",
      type: "string",
    },
  ],
};
