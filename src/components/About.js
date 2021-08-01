import Typewriter from "typewriter-effect";

function About() {
  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">
          <div className="column left">
            <img src="images/profile-1.jpeg" alt="" />
          </div>
          <div className="column right">
            <div className="text">
              <Typewriter
                id="typing"
                options={{
                  strings: [
                    "GST Computation",
                    "Bookeeping",
                    "Ledger Maintaining",
                    "TDS Collection/ Deduction",
                    "Profit Analyzing",
                    "Cost Analysis",
                    "Balance Sheet",
                    "Yearly Budgeting",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p>
              An MBA graduate in Finance. Very detail-oriented and hard-working
              individual having 6 years of work experience in the corporates.
            </p>
            <br />
            <p>
              Proficient in BUSY, Tally ERP9 version. Excellent in MS-Excel,
              MS-Word, MS-Powerpoint
            </p>
            <br />
            <p>
              ROC, Company/Partnership Firm/ One Person Company. Sole
              Proprietorship and NGO Registration, Food license and MCD license
            </p>
            <a
              class="btn line-btn-dark btn-icon btn-radius"
              href="resume.pdf"
              title="Himanshu resume"
              download
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
