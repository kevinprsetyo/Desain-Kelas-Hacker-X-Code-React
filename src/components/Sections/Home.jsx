import "../../script/script.js";
import computer from "../../assets/images/computer.png"

export default function Home() {
  return (
    <section className="home" id="Home">
      <section className="homeLeft">
        <p className="text1">Kelashacker.com</p>
        <p className="text2">
          Dapatkan pembelajaran ethical hacking <br className="br1" /> dan cyber security terbaik.
        </p>
        <a href="#Silabus">
          <button className="btnJoin">Join Now</button>
        </a>
      </section>

      <section className="homeRight">
        <img src={computer} alt="" className="logo-computer" />
        <p className="text3">
          Cyber security Training yang sudah <br className="br2" /> terpercaya lebih dari 14 tahun.
        </p>
      </section>
    </section>
  );
}
