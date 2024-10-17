import Image1 from "../assets/image1.webp";
import Image2 from "../assets/image2.webp";
import Image3 from "../assets/image3.webp";
function About() {
  return (
    <div className="about">
      <div className="about__container">
        <h2 className="about__hdl">About our research</h2>
        <div className="about__row">
          <div className="about__column">
            <img
              className="about__img"
              src={Image1}
              width="450"
              height="300"
              alt="image for about section"
            />
            <p className="about__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
              aspernatur sequi nisi voluptate tempora dolorem vero porro,
              dolorum distinctio nesciunt natus, nam, accusamus similique hic
              labore omnis fugiat maxime! Perferendis! Laudantium suscipit at
              voluptate cum excepturi tempore similique corrupti aspernatur,
              perspiciatis fugit eum modi exercitationem accusantium, officiis
              ut maiores debitis ullam aut veritatis magnam.
            </p>
          </div>
          <div className="about__column">
            <img
              className="about__img"
              width="450"
              height="300"
              src={Image2}
              alt="image for about section"
            />
            <p className="about__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
              aspernatur sequi nisi voluptate tempora dolorem vero porro,
              dolorum distinctio nesciunt natus, nam, accusamus similique hic
              labore omnis fugiat maxime! Perferendis! Laudantium suscipit at
              voluptate cum excepturi tempore similique corrupti aspernatur,
              perspiciatis fugit eum modi exercitationem accusantium, officiis
              ut maiores debitis ullam aut veritatis magnam.
            </p>
          </div>
          <div className="about__column">
            <img
              className="about__img"
              width="450"
              height="300"
              src={Image3}
              alt="image for about section"
            />
            <p className="about__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
              aspernatur sequi nisi voluptate tempora dolorem vero porro,
              dolorum distinctio nesciunt natus, nam, accusamus similique hic
              labore omnis fugiat maxime! Perferendis! Laudantium suscipit at
              voluptate cum excepturi tempore similique corrupti aspernatur,
              perspiciatis fugit eum modi exercitationem accusantium, officiis
              ut maiores debitis ullam aut veritatis magnam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
