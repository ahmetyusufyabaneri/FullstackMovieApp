const Field = ({ label, value }) => {
  return (
    <p className="flex items-center gap-1">
      <span className="font-bold">{label}</span>
      <span className="bg-gray-200 p-2 rounded-full font-bold">{value}</span>
    </p>
  );
};

export default Field;
