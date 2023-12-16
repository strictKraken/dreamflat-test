export const useDate = () => {
  const getLocalDate = (date: Date | null) => {
    if (!date) return "";
    return new Intl.DateTimeFormat("ru").format(date);
  };
  return {
    getLocalDate
  };
};
