import { prisma } from "./lib/prisma";

const run = async () => {
  //   const createUser = await prisma.user.create({
  //     data: {
  //       email: "Sahwon@next.com",
  //       name: "Shawon",
  //       role: "Admin",
  //     },
  //   });

  //   console.log(createUser);

  const createProfile = await prisma.profile.create({
    data: {
      bio: "hi this is me!",
      userId: 1,
    },
  });

  console.log(createProfile);

  const createPost = await prisma.post.create({
    data: {
      title: "This is title",
      content: "this is content!",
      published: true,
      authorId: 1,
    },
  });

  console.log(createPost);
};

run();
