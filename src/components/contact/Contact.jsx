import "./Contact.css"

export default function Contact() {
  return (
    <div id="contact" className="form">
      <div className="contact-Form1">
        <h2>LET’S TALK</h2>
        <form method="post" action="https://formspree.io/f/mzzjewno">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="half"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="half"
            required
          />
          <input
            type="tel"
            name="mobile_no"
            placeholder="Mobile No"
            className="half"
            required
          />

          <textarea name="message" placeholder="Message" required></textarea>
          <div className="contact-Btn">
            <button type="submit" className="submit-btn">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
