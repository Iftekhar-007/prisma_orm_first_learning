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
  //   const createProfile = await prisma.profile.create({
  //     data: {
  //       bio: "hi this is me!",
  //       userId: 1,
  //     },
  //   });
  //   console.log(createProfile);
  //   const createPost = await prisma.post.create({
  //     data: {
  //       title: "This is title",
  //       content: "this is content!",
  //       published: true,
  //       authorId: 1,
  //     },
  //   });
  //   console.log(createPost);
  // const getAllUser = await prisma.user.findMany({
  //   // include: {
  //   //   posts: true,
  //   //   profile: true,
  //   // },
  //   select: {
  //     id: true,
  //     name: true,
  //     email: true,
  //     posts: true,
  //     profile: true,
  //   },
  // });
  // console.dir(getAllUser, { depth: Infinity });
  // ! update profile
  // const updateProfile = await prisma.profile.update({
  //   where: {
  //     id: 1,
  //   },
  //   data: {
  //     bio: "Hello I am the boss! only boss here!",
  //     dateOfBirth: "2025-12-26T18:15:20.060Z",
  //   },
  //   select: {
  //     id: true,
  //     bio: true,
  //     dateOfBirth: true,
  //     user: true,
  //   },
  // });
  // console.log(updateProfile);
  // ! find unique
  // const findUniquePost = await prisma.post.findUnique({
  //   where: {
  //     id: 1,
  //   },
  // });
  // console.log(findUniquePost);
  // ! delete post
  // const deletePost = await prisma.post.delete({
  //   where: {
  //     id: 1,
  //   },
  // });
  // console.log(deletePost);

  // ! upsert data

  const upsertUser = await prisma.user.upsert({
    where: {
      id: 2,
    },
    update: {
      email: "iftekhar@mail.com",
      name: "Iftekhar Hossain Shawon",
      role: "Admin",
    },
    create: {
      email: "iftekhar@mail.com",
      name: "iftekhar",
    },
  });

  console.log(upsertUser);
};

run();
