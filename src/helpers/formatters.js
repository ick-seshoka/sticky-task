export const getNameFirstLetter = (name) => {
  return name.charAt(0).toUpperCase();
};

export const formatName = (name) => {
  const firstLetter = getNameFirstLetter(name);

  return firstLetter + name.substring(1, name.legnth);
};
