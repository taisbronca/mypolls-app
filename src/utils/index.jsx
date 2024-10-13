export const getFirstAndLastName = (name) => {
  if (!name) return "";
  const array = name.split(" ");
  const length = array.length;
  let response;

  if (length > 1) {
    response = array[0] + " " + array[length - 1];
  } else {
    response = array[0];
  }

  return response;
};
