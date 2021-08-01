import Typewriter from "typewriter-effect";

function Home() {
  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">Himanshu Sondhi</div>
          <div className="text-3">
            And I'm a&nbsp;
            <Typewriter
              id="typing"
              options={{
                strings: ["GST Practitioner", "n Accountant", "ITR Filer"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <a href="mailto:himanshukumar0810@gmail.com">Hire me</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
