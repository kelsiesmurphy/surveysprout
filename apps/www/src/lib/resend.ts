// export const createResendContact = async (email: string) => {
//   try {
//     const { error } = await fetch(
//       "https://api.offlinecollective.co/newsletter-contact",
//       {
//         method: "POST",
//         body: JSON.stringify({
//           email: email,
//         }),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//         },
//       },
//     );

//     if (error || !user) {
//       console.error(error);
//       throw new Error("Could not get user session.");
//     }
//   } catch (err) {
//     console.error(err);
//     throw new Error("Unable to access customer record.");
//   }

//   console.log(email);
//   const error = "errorrrr";
//   throw error;
// };
