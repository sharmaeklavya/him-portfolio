function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contact-content">
          <div className="column left">
            <div className="text">For availing my services :</div>
            <p>
              You can contact me on the following mobile number/ email or drop
              me a message by filling up this form.
            </p>
            <br />
            <p>
              My usual working hours are: 8:00 AM to 8:00 PM. However, I can be
              contacted at any time in case of emergency.
            </p>
            <br />
            <p>
              To make a payment for my services. Head to your UPI app. Type in
              <span className="payment">&nbsp;h.sondhi@paytm</span>. Enter your
              secret PIN and Voila!
            </p>
            <div className="icons">
              <div className="row">
                <i className="fas fa-mobile-alt"></i>
                <div className="info">
                  <div className="head">Mobile Number</div>
                  <div className="sub-title">
                    <a href="tel:9650621761">9650621761</a>
                  </div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-envelope"></i>
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title">
                    <a href="mailto:himanshukumar0810@gmail.com">
                      himanshukumar0810@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <i class="fas fa-rupee-sign"></i>
                <div className="info">
                  <div className="head">Payment</div>
                  <div className="sub-title">
                    <a href="upi://pay?pa=h.sondhi@paytm&pn=HimanshuSondhi&cu=INR&mc=gpay">
                      Click to<span className="payment">&nbsp;Pay me </span>
                      directly. Thanks.
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column right">
            <div className="text">Message me</div>
            <form
              action="https://formsubmit.co/himanshusondhi9@gmail.com"
              method="POST"
            >
              <div className="fields">
                <div className="field name">
                  <input type="text" placeholder="Name" name="name" required />
                </div>
                <div className="field email">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  required
                />
              </div>
              <div className="field textarea">
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Message.."
                  name="message"
                  required
                ></textarea>
              </div>
              <div className="button-area">
                <button type="submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
