export default function Project({
  image,
  title,
  description,
  link,
  className,
}) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className={className}>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </a>
  );
}
