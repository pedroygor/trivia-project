export const getTokenApi = async () => {
  const resolve = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = await resolve.json();
  return data;
};

export const getAsksApi = async (token) => {
  const requestFetch = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
  const requestJSON = await requestFetch.json();
  return requestJSON;
};
