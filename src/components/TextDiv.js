const TextDiv = ({ title, text, Class }) => {
  return (
    <div className={Class}>
      <p className="title">{title}</p>
      <p className="text">{text}</p>
    </div>
  );
};

export default TextDiv;
