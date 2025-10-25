import React from "react";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
  };

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-base-200 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-primary">
          Contact us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Enter your message..."
              rows={4}
              required
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
