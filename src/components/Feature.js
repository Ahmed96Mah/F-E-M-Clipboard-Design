import Image from './Image.js';

const Feature = ({ img, title, text, Class }) => {
  return (
    <div className={Class}>
      <Image src={img} alt={title} />
      <p className="title">{title}</p>
      <p className="text">{text}</p>
    </div>
  );
};

export default Feature;
