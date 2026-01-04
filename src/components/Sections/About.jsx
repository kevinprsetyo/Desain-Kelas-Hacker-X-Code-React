import "../../script/script.js";
import about from "../../assets/images/training2.png"

export default function About() {
  return (
    <section className="about-us" id="AboutUs">
      <section className="decs">
        <h3 className="title-about">About Us</h3>
        <p className="text4">
          X-code berdiri sejak 2004 sebagai media pembelajaran cyber security dan kini berkembang
          menjadi perusahaan training berbadan hukum melalui X-code Training. Dengan pengalaman lebih dari 14 tahun,
          kami menghadirkan pelatihan Ethical Hacking & Cyber Security yang berbeda dari lainnya mulai dari dasar hingga
          tingkat lanjut, termasuk topik khusus seperti exploit development.
        </p>
      </section>
      <section className="img-abouts">
        <img src={about} alt="" className="img-about" />
      </section>
    </section>
  );
}
