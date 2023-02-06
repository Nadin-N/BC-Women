export function BlogCard({
  poster,
  tag,
  title,
  description,
  userName,
  avatar,
  postedAt,
}) {
  return (
    <div>
      <div>
        <img src={poster} alt={title} />
      </div>
      <div>
        <h2>{tag}</h2>
        <p>{title}</p>
        <p>{description}</p>
      </div>
      <div>
        <div>
          <img src={avatar} alt={userName} />
        </div>
        <div>
          <h3>{userName}</h3>
          <p>{postedAt}</p>
        </div>
      </div>
    </div>
  );
}
