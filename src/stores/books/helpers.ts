export const convertData = (data: any) => {
  return data.map((item: any) => {
    if (isDateValid(item.publishedDate)) {
      item.publishedDate = new Date(item.publishedDate);
    } else {
      item.publishedDate = null;
    }

    return item;
  });
};

const isDateValid = (dateStr: string) => {
  return !isNaN(new Date(dateStr).getTime());
};
