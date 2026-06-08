import "./Contact.css";

function Contact() {
  return (
    <section id="contact">

      <div className="contact-container">

        <div className="contact-header">
          <span>Get In Touch</span>
          <h2>Contact Me</h2>
          <p>
            Have a project in mind or want to collaborate?
            Feel free to send me a message.
          </p>
        </div>

        <form
          className="contact-form"
          action="https://formsubmit.co/januraji2107@gmail.com"
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>

      </div>

    </section>
  );
}

export default Contact;