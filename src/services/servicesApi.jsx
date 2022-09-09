export const getTokenApi = async () => {
  const resolve = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = await resolve.json();
  return data;
};

export const testid = async () => {
  console.log('asdsad');
};
