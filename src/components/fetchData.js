export default async function fetchData(page) {
  const myHeaders = new Headers();
  let offset = 0;
  offset = offset + page * 9;
  myHeaders.append("Content-Type", "application/json");
  const body = JSON.stringify({
    limit: 9,
    offset,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  try {
    const response = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
