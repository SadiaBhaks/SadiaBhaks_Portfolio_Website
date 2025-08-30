import React ,{useState}from "react";
import { FaLinkedin,  FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function Contact() {
  const [status, setStatus] = useState("");
    const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5lmjuj4",  
        "template_3wcitsr",  
        e.target,
        "sF08lq6pGYNSgxqU8"   
      )
       .then(
        (result) => {
          console.log("✅ Success:", result.text);
          setStatus("Message Sent Successfully ✅");
          e.target.reset();
        },
        (error) => {
          console.error("❌ Error:", error);
          setStatus("Something went wrong ❌ Please try again.");
        }
      );
  };

  return (
    <section
      id="Contact"
      className="bg-black text-white py-16 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left - Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Get In <span className="text-yellow-400">Touch</span>
          </h2>
          <p className="mb-8 text-gray-300">
            Got a brilliant idea? I'd love to hear it!
             I thrive on creative collaboration and am always excited to dive into new opportunities. Let's start a conversation!
          </p>

          <div className="space-y-4">
            <p>
              <span className="font-semibold">Email: </span> bhakssadia@gmail.com
            </p>
            <p>
              <span className="font-semibold">Phone: </span> +880 179 439-2899
            </p>
            <p>
              <span className="font-semibold">Location: </span> Sylhet, Bangladesh
            </p>
          </div>

         
          <div className="flex gap-4 mt-6">
            <a href="https://www.linkedin.com/in/sadia-bhaks-909683308/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BaVcR2I5OSROLNVRwHLGHrg%3D%3D" className="text-white hover:text-white text-2xl">
              <FaLinkedin />
            </a>
          
            <a href="https://github.com/SadiaBhaks" className="text-white hover:text-white text-2xl">
              <FaGithub />
            </a>
          </div>
        </div>

       
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md bg-black border border-gray-700 focus:outline-none focus:border-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-md bg-black border border-gray-700 focus:outline-none focus:border-blue-400"
            />
            <textarea
            name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 rounded-md bg-black border border-gray-700 focus:outline-none focus:border-blue-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-gray-400 text-white font-semibold py-2 px-4 rounded-md transition"
            >
              Send Message
            </button>
          </form>
           {status && (
          <p
            className={`mt-4 text-center font-medium ${
              status.includes("✅") ? "text-green-400" : "text-red-400"
            }`}
          >
            {status}
          </p>
        )}
        </div>
      </div>
    </section>
  );
}
