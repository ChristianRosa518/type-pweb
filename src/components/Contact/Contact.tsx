import React, { useState, Dispatch, SetStateAction } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";

import styles from "./Contact.module.css";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [active, setActive] = useState<boolean>(true);

  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h2>Contact me!</h2>
        <p>Leave a message, advice, or just say hi!</p>
      </div>
      <div className={styles.contactContainer}>
        <AnimatePresence>
          {active === true && <Form active={active} setActive={setActive} />}
        </AnimatePresence>
        <AnimatePresence>
          {active === false && (
            <motion.div
              key="exitbaby"
              initial={{ x: "40%", opacity: 0, position: "absolute" }}
              animate={{
                x: "0%",
                opacity: 1,
                transition: { duration: 0.4, delay: 0.25 },
                position: "absolute",
              }}
              exit={{
                x: "-40%",
                opacity: 0,
                transition: { duration: 0.4 },
                position: "absolute",
              }}
              className={styles.afterForm}
            >
              Thank you for submitting a form
              <button
                className={styles.returnForm}
                onClick={() => setActive(true)}
              >
                give it back
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

interface FormProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  // Proper type.
}

interface IFormInput {
  name: String;
  messageReason: MessageEnum;
  email: String;
  number: String;
  message: String;
}
enum MessageEnum {
  other = "other",
  jobInquiry = "Job Inquiry",
  personalProject = "Personal Project",
  advice = "Advice",
  message = "message",
}

// React hook form
const Form = ({ active, setActive }: FormProps) => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data: any /* cop out.*/) => {
    console.log(data);
    // pls dont steal, it would be a minor inconvenience.
    // emailjs
    //   .send("service_1d6oo6u", "template_rnrja4r", data, "F7eoeUPRLaGd4Yx7q")
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    setActive(false);
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
      key="formyyy"
      initial={{ x: "40%", opacity: 0 }}
      animate={{
        x: "0%",
        opacity: 1,
        transition: { duration: 0.4, delay: 0.25 },
        position: "absolute",
      }}
      exit={{
        opacity: 0,
        transition: { duration: 0.4 },
        x: "-40%",
        position: "absolute",
      }}
    >
      <div className={styles.formItem}>
        <label>Name : </label>
        <input {...register("name")} />
        {active ? <div></div> : <div></div>}
      </div>
      <div className={styles.formItem}>
        <label>Email :</label>
        <input {...register("email")} />
      </div>
      {/* <div className={styles.formItem}>
        <label>Number :</label>
        <input {...register("number")} />
      </div> */}
      {/* <div className={styles.formItem}>
        <label>Inquiry :</label>
        <select {...register("messageReason")}>
          <option value="other">Other</option>
          <option value="Job Inquiry">Job Inquiry</option>
          <option value="Personal Project">Personal Project</option>
          <option value="Advice">Advice</option>
        </select>
      </div> */}
      <div className={styles.formItemMessage}>
        <label>Message : </label>
        <textarea
          {...register("message")}
          placeholder="I haven't placed checks, so you can write anything really."
        ></textarea>
      </div>
      <div className={styles.formItemSubmit}>
        <input type="submit" />
      </div>
    </motion.form>
  );
};
