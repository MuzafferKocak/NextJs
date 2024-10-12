const URL = `http://localhost:8080/users`

//? force-cache
export async function getUsers() {
    //* By default, Next.js automatically caches the returned values of fetch
    const res = await fetch(URL)
    //? 'force-cache' is the default, and can be omitted
   //?  const res = await fetch(URL, { cache: 'force-cache' });
    
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    return data
}