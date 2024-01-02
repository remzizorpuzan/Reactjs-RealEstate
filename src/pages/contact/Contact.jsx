import React from "react";
import "./contact.css";

const Contact = () => {
  const mapEmbedCode = `<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d390.8440972197134!2d28.96783161103024!3d38.40096489231851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDI0JzAzLjciTiAyOMKwNTgnMDMuOSJF!5e0!3m2!1sen!2str!4v1695443210873!5m2!1sen!2str" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <div className="contact-container">
      <h3 className="contact-heading">İLETİŞİM</h3>
      <div className="container mt-5">
        <h2 className="mb-3">Bize ulaşın</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              İsim Soyisim
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Mesaj
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <button className="btn btn-danger" type="submit">
            {formStatus}
          </button>
        </form>
      </div>
      <div dangerouslySetInnerHTML={{ __html: mapEmbedCode }} />
    </div>
  );
};

export default Contact;
