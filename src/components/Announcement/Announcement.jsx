import "./style.scss";

const Announcement = () => {
  return (
    <>
      <section id="projects" className="announcements">
        <div className="announcements__content">
          <div className="announcements__item">
            <img src="images/products/announcement1.jpg" alt="announcement" />
            <p>Organic juice</p>
          </div>

          <div className="announcements__item">
            <img src="images/products/announcement2.jpg" alt="announcement" />
            <p>Organic food</p>
          </div>

          <div className="announcements__item">
            <img src="images/products/announcement3.jpg" alt="announcement" />
            <p>Nuts Cookis</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Announcement;
