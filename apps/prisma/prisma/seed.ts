import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  console.time("Seeding complete 🌱");

  const FellowHumansExampleBusiness = await prisma.exampleBusiness.create({
    data: {
      name: "Fellow Humans",
      theme: {
        color: "blue",
        radius: 0.5,
      },
      logoUrl: "https://assets.bigcartel.com/theme_images/129116832/Fellow+Humans+Logo+PNGCAP.png?auto=format&fit=max&h=132&w=416",
    },
  });
  const NotAnEscapeRoomExampleBusiness = await prisma.exampleBusiness.create({
    data: {
      name: "Not An Escape Room",
      theme: {
        color: "red",
        radius: 1,
      },
      logoUrl: "https://fakeimg.pl/300/",
    },
  });

  const FellowHumansExampleBusinessProduct1 =
    await prisma.exampleBusinessProduct.create({
      data: {
        exampleBusinessId: FellowHumansExampleBusiness.id,
        name: "T-Shirt",
        description: "Fellow Humans T-Shirt",
        size: "SMALL",
        image: "https://fakeimg.pl/300/",
      },
    });
  const NotAnEscapeRoomExampleBusinessProduct1 =
    await prisma.exampleBusinessProduct.create({
      data: {
        exampleBusinessId: NotAnEscapeRoomExampleBusiness.id,
        name: "The Crypt",
        description: "The Crypt is an easy puzzle room for the whole family.",
      },
    });

  const PostPurchaseSurvey = await prisma.survey.create({
    data: {
      title: "Post-purchase Survey Template",
      metadata: {
        productName: FellowHumansExampleBusinessProduct1.name,
        productSize: FellowHumansExampleBusinessProduct1.size,
        productImage: FellowHumansExampleBusinessProduct1.image,
      },
      surveyType: "POSTPURCHASE",
    },
  });

  await prisma.surveyQuestion.createMany({
    data: [
      {
        surveyId: PostPurchaseSurvey.id,
        fieldName: "q1",
        title: "How did you hear about us?",
        subtitle: "Select one option",
        icon: "Squirrel",
        questionType: "Options",
        options: [
          {
            name: "Instagram",
            image:
              "https://cothfwilejjjgulziyfd.supabase.co/storage/v1/object/public/social_logos/instagram.svg?t=2024-11-23T13%3A36%3A29.899Z",
            order: 0,
          },
          {
            name: "Facebook",
            image:
              "https://cothfwilejjjgulziyfd.supabase.co/storage/v1/object/public/social_logos/facebook.svg?t=2024-11-23T13%3A36%3A50.510Z",
            order: 1,
          },
          {
            name: "X (formerly Twitter)",
            image:
              "https://cothfwilejjjgulziyfd.supabase.co/storage/v1/object/public/social_logos/x.svg?t=2024-11-23T13%3A37%3A35.875Z",
            order: 2,
          },
          {
            name: "TikTok",
            image:
              "https://cothfwilejjjgulziyfd.supabase.co/storage/v1/object/public/social_logos/tiktok.svg?t=2024-11-23T13%3A37%3A53.585Z",
            order: 3,
          },
          {
            name: "LinkedIn",
            image:
              "https://cothfwilejjjgulziyfd.supabase.co/storage/v1/object/public/social_logos/linkedin.svg?t=2024-11-23T13%3A38%3A21.065Z",
            order: 4,
          },
        ],
      },
      {
        surveyId: PostPurchaseSurvey.id,
        fieldName: "q2",
        title: "Could you give more details?",
        subtitle: "Tell us more about how you found us?",
        icon: "Phone",
        questionType: "Text",
      },
      {
        surveyId: PostPurchaseSurvey.id,
        fieldName: "q3",
        title: "What about our products appeal to you?",
        subtitle: "Select one option",
        icon: "Banana",
        questionType: "Options",
        options: [
          { name: "Our mission", order: 0 },
          { name: "Our shipping options", order: 1 },
        ],
      },
      {
        surveyId: PostPurchaseSurvey.id,
        fieldName: "q4",
        title: "When did you first hear about us?",
        subtitle: "Select one option",
        icon: "Ear",
        questionType: "Options",
        options: [
          { name: "Today", order: 0 },
          { name: "In the past week", order: 1 },
          { name: "Over a week ago", order: 2 },
        ],
      },
      {
        surveyId: PostPurchaseSurvey.id,
        fieldName: "q5",
        title: "Who is this purchase for?",
        subtitle: "Select one option",
        icon: "MessageCircleQuestion",
        questionType: "Options",
        options: [
          { name: "Myself", order: 0 },
          { name: "Friend or family", order: 1 },
          { name: "Coworker or client", order: 1 },
        ],
      },
      {
        surveyId: PostPurchaseSurvey.id,
        fieldName: "q6",
        title: "Would you recommend us to a friend?",
        subtitle: "Move the slider between 1 and 10",
        icon: "Users",
        questionType: "Slider",
      },
    ],
  });

  console.timeEnd("Seeding complete 🌱");
};

main()
  .then(() => {
    console.log("Process completed");
  })
  .catch((e) => console.log(e));
