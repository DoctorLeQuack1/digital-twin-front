import { Button, Textarea, Label, TextInput } from "flowbite-react";
import { FormEvent, useRef } from "react";
import { AlertContact } from "../components/contact-components/AlertContact";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const styles = {
  div: {
    marginLeft: "5%",
    marginRight: "1%",
  },
  h1: {
    fontSize: "50px",
    fontFamily: "Arial",
    fontStyle: "italic",
    textShadow: "3px 3px rgb(73, 146, 101)",
    width: "100%",
  },
  formDiv: {
    marginLeft: "5%",
    marginTop: "1%",
  },
  formInput: {
    width: "400px",
  },
};

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const forms = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault()
    console.log(forms.current ? forms.current : 'No existe el forms')
    console.log(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, import.meta.env.VITE_PUBLIC_KEY);
    
    if (forms.current) {
    emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        forms.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSubmitted(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  }};

  return (
    <div className="h-screen" style={{ paddingLeft: "35%" }}>
      <div style={styles.div}>
        <h1 style={styles.h1}>shoot us a message</h1>
      </div>
      <div style={{width: '53%'}}>
        {isSubmitted && <AlertContact submit={setIsSubmitted} />}
      </div>
      <div style={styles.formDiv}>
        <form ref={forms} className="flex max-w-md flex-col gap-4"  onSubmit={sendEmail}>
          <div>
            <div className="mb-3 block">
              <Label htmlFor="base">Full name*</Label>
            </div>
            <TextInput name="name" id="name" type="text" sizing="md" required shadow />
          </div>
          <div>
            <div className="mb-3 block">
              <Label htmlFor="email2">Email*</Label>
            </div>
            <TextInput name="email2"
              id="email2"
              type="email"
              placeholder="name@flowbite.com"
              required
              shadow
            />
          </div>
          <Label
            htmlFor="phone-input"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone number*
          </Label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 19 18"
              >
                <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
              </svg>
            </div>
            <input
              name="phone-input"
              type="text"
              id="phone-input"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="123-456-7890"
              required
            />
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="comment">Your message</Label>
            </div>
            <Textarea name="comment" id="comment" placeholder="Leave a comment..." rows={4} />
          </div>
          <div className="flex items-center gap-2"></div>
          <Button type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};
