const URL = `http://localhost:8080/users`;

// //? force-cache
// export async function getUsers() {
//     //* By default, Next.js automatically caches the returned values of fetch
//     const res = await fetch(URL)
//     //? 'force-cache' is the default, and can be omitted
//    //?  const res = await fetch(URL, { cache: 'force-cache' });

//     if (!res.ok) {
//       // This will activate the closest `error.js` Error Boundary
//       throw new Error('Failed to fetch data')
//     }
//     const data = await res.json()
//     return data
// }
// //? revalidate
// export async function getUsers() {
//   //* Automatically revalidate data after a certain amount of time has passed. This is useful for data that changes infrequently and freshness is not as critical.
//   //?   To revalidate data at a timed interval, you can use the next.revalidate option of fetch to set the cache lifetime of a resource (in seconds).
//   const res = await fetch(URL, { next: { revalidate: 20 } });

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }
//   const data = await res.json();
//   return data;
// }

//? no-store
export async function getUsers() {
  //* This will fetch data dynamically, on every request.
  const res = await fetch(URL, { cache: "no-store" });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}
