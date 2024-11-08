import { useState } from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { slideIn } from "../utils/motion";

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          to_name: "Omar",
          from_email: data.email,
          to_email: "o.a.momani@gmail.com",
          message: data.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setLoading(false);
          setMessageType("success");
          setMessage("Thank you. I will get back to you as soon as possible.");
          reset();
        },
        (error) => {
          setLoading(false);
          setMessageType("error");
          setMessage("Something went wrong. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="mt-[8rem] mb-10 flex flex-col justify-center xl:flex-row gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/20"
      >
        <p className="text-xl font-semibold text-white opacity-80">
          Get in touch
        </p>
        <h3 className="text-4xl font-bold text-white opacity-90 mb-8">
          Contact
        </h3>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 flex flex-col gap-6 font-poppins"
        >
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Name</span>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="What's your name?"
              className="bg-black/30 py-4 px-6 placeholder:text-gray-400 text-timberWolf rounded-lg outline-none border border-white/10 focus:border-white transition duration-200"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Email</span>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              placeholder="What's your email?"
              className="bg-black/30 py-4 px-6 placeholder:text-gray-400 text-timberWolf rounded-lg outline-none border border-white/10 focus:border-white transition duration-200"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </label>

          {/* Message Textarea */}
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              Your Message
            </span>
            <textarea
              {...register("message", { required: "Message is required" })}
              placeholder="What's your message?"
              className="bg-black/30 py-4 px-6 placeholder:text-gray-400 text-timberWolf rounded-lg outline-none border border-white/10 focus:border-white transition duration-200 resize-none"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-3 text-white font-bold py-3 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 transition duration-200 shadow-md transform hover:scale-105"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        {/* Dynamic message display */}
        {message && (
          <div
            className={`mt-4 p-4 rounded-md text-center ${
              messageType === "success"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {message}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Contact;
