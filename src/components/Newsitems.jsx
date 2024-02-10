import image from "../assets/news.jpg";
const Newsitems = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-secondary text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src ? src : image}
        style={{ height: "220px", width: "320px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "Hii,RISHABH SINGH If you wand more information you can click Read More buttion for more informatin Thank You."}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Newsitems;
