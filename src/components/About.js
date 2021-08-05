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
              individual having years of work experience with corporates and
              independent clients.
            </p>
            <br />
            <p>
              Proficient in BUSY, Tally ERP9 version. Excellent in MS-Excel,
              MS-Word, MS-Powerpoint.
            </p>
            <br />
            <p>
              ITR Filing, ROC, Company/Partnership Firm/ One Person Company,
              Sole Proprietorship and NGO registration, also deals in Food
              license and MCD licenses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
