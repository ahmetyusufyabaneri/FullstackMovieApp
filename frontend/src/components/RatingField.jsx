const RatingField = ({ label, value, data }) => {
  const rating = Number(data.rating);
  const color =
    rating > 9
      ? "#0079FF"
      : rating > 7.5
      ? "#77B254"
      : rating > 5
      ? "#DF9755"
      : rating > 3
      ? "#FF7D29"
      : "#FF0001";
  return (
    <p className="flex items-center gap-1">
      <span className="font-bold">{label}</span>
      <span
        style={{ backgroundColor: color }}
        className="p-2 rounded-full text-white font-bold"
      >
        {value}
      </span>
    </p>
  );
};

export default RatingField;
