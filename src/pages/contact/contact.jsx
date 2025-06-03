import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs
            .sendForm(
                "service_986cf9c",
                "template_gt8mmef",
                form.current,
                "jVe5OY5OCF-c8ppvN"
            )
            .then(
                (result) => {
                    console.log("Email sent successfully:", result);
                    setStatus('success');
                    alert("Message sent successfully!");
                },
                (error) => {
                    console.error("Detailed error:", error);
                    setStatus('error');
                    alert(`Failed to send message: ${error.text}`);
                }
            );

        e.target.reset();
    };

    return (
        <div>
            {/* Header Image */}
            <div className="bg-[url('/src/assets/images/contacttop.webp')] bg-cover bg-center h-[300px] flex items-center justify-center">
                <h1 className='font-bold text-4xl md:text-5xl text-amber-50'>CONTACT</h1>
            </div>

            
        </div>
    );
};

export default Contact;