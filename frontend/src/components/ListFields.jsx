const ListFields = ({ label, array }) => {
  return (
    <p className="flex items-center gap-1">
      <span className="font-bold">{label}:</span>
      {array.map((value, index) => (
        <span key={index} className="bg-gray-200 p-2 rounded-full font-bold">
          {value}
        </span>
      ))}
    </p>
  );
};

export default ListFields;
