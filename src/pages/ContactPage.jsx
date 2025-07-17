import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import toast from 'react-hot-toast';

const ContactPage = (props) => {
  const formRef = useRef(null);

  const handleSendMessage = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1cklavh', 'template_200x06a', formRef.current, {
        publicKey: '4JkAaLAbja6PHVor8',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("Message Sent Successfully.");
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Error while sending message.");
        }
      );
  };

  return (
    <div
      className="flex mt-20 xl:mt-0 xl:flex-row w-[100vw] xl:p-8 justify-center gap-6 xl:gap-0 items-center min-h-100 bg-stone-900 flex-col"
      ref={props.pageRef}
    >
      <figure className="w-1/2 min-h-100 overflow-hidden flex justify-center items-center">
        <img src="/bajgain.jpg" alt="princeBajgain" className="w-[80%] rounded-xl" />
      </figure>

      {/* 🔥 FIX: Removed duplicate div */}
      <div className="flex w-[80%] mb-3 flex-wrap border border-[#66a586] rounded-xl xl:w-1/2">
        <form
          className="flex flex-col text-white gap-6 w-full xl:w-1/2 p-10"
          ref={formRef}
          onSubmit={handleSendMessage}
        >
          <label className="md:text-2xl font-semibold tracking-widest">Full Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            className="border-b-2 border-b-[#66a586] pb-3 outline-none"
            required
          />

          <label className="md:text-2xl font-semibold tracking-widest">Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            className="border-b-2 border-b-[#66a586] pb-3 outline-none"
            required
          />

          <label className="md:text-2xl font-semibold tracking-widest">Message</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            className="border-b-2 border-b-[#66a586] pb-3 outline-none"
            rows={4}
            required
          ></textarea>

          <button
            className="bg-[#66a586] hover:bg-stone-900 hover:ring-1 hover:ring-[#66a586] cursor-pointer p-2 rounded-xl transition-all duration-500"
            type="submit"
          >
            Send Message
          </button>
        </form>

        <div className="xl:w-1/2 w-full flex flex-col flex-wrap justify-center gap-8 p-10 xl:p-20">
          <div className="flex flex-col gap-2">
            <span className="font-semibold md:text-2xl tracking-wider text-white">Contact</span>
            <span className="text-white tracking-widest">+9779708090851</span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-semibold md:text-2xl tracking-wider text-white">Location</span>
            <span className="text-white tracking-widest">Itahari, Sunsari, Nepal</span>
          </div>

          <div className="w-full flex gap-8">
            <a
              className="w-[40px] rounded-full cursor-pointer"
              href="https://www.facebook.com/prince.homa.773"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/fb.svg" alt="Facebook" />
            </a>
            <a
              className="w-[40px] rounded-full cursor-pointer"
              href="https://www.instagram.com/prince.bajagain/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/insta.svg" alt="Instagram" />
            </a>
            <a
              className="w-[40px] rounded-full cursor-pointer"
              href="https://www.linkedin.com/in/prince-bajgain-39376b363/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
