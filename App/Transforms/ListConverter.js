export const handleList = (list, itemInRow) => {
  let array = [];
  let object = {
    data: []
  };

  list.map((item) => {
    object.data.push(item);
    if(object.data.length === itemInRow) {
      array.push(object);
      object = {
        data: []
      };
    }
  });

  return array;
}
