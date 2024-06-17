const getUserDetails = async (userId: string) => {
  const response = await fetch(`/api/users/${userId}`);
  const data = await response.json();
  return data;
};
