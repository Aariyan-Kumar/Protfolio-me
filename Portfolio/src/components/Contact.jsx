import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';


function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [err, setErr] = useState({});
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const validate = () => {
        let err = {};
        if (!formData.name) {
            err.name = "Name is Required";

        }
        if (!formData.email) {
            err.name = "Email is Required";

        }
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            err.email = "Email is invalid";
        }
        if (!formData.message) {
            err.message = "Message is required";
        }
        return err;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validateErrors = validate();
        if (Object.keys(validateErrors).length > 0) {
            setErr(validateErrors);
        }
        else {
            setErr({});
            setIsSending(true);

            emailjs.send(
                "service_0k3kl15",
                "template_jsbmdzt",
                formData,
                "aXW-kmo2vy8IMzT_w",
            ).then((res) => {
                toast.success("Message sent successfully");
                setFormData({ name: "", email: "", message: "" });
            }).catch((error) => {
                console.log("FAILED...", error);
                toast.error("Failed to send message. Please try again later.")
            }).finally(() => {
                setIsSending(false);
            })

        }
    }

    return (
        <>
            <div className="p-4 lg:w-3/4" id='contact'>
                <Toaster />
                <h2 className="my-8 text-center text-4xl font-semibold tracking-tigher">Let's Connect</h2>
                <motion.form
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    onSubmit={handleSubmit}>
                    <div className="mb-4 flex space-x-4">
                        <div className="lg:w-1/2">
                            <input
                                type="text"
                                id='name'
                                name='name'
                                value={formData.name}
                                placeholder='Name...'
                                onChange={handleChange}
                                className='mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none'
                            />
                            {err.name && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    className="text-sm text-rose-800">
                                    {err.name}
                                </motion.p>
                            )}
                        </div>
                        <div className="lg:w-1/2">
                            <input
                                type="text"
                                id='email'
                                name='email'
                                value={formData.email}
                                placeholder='Email...'
                                onChange={handleChange}
                                className='mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none'
                            />
                            {err.email && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    className="text-sm text-rose-800">
                                    {err.name}
                                </motion.p>
                            )}
                        </div>
                    </div>
                    <div className="mb-4 ">
                        <textarea
                            id='messagae'
                            name='message'
                            value={formData.message}
                            placeholder='Message...'
                            onChange={handleChange}
                            className='mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none'
                            rows="6"
                        />
                        {err.message && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-sm text-rose-800">
                                {err.name}
                            </motion.p>
                        )}
                    </div>
                    <button type='submit' className={`mb-8 w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 ${isSending ? "cursor-not-allowed opacity-50" : ""}`} disabled={isSending}>
                        <div className="flex item-center justify-center gap-2">
                            {isSending ? "Sending..." : "Send"}
                            <FiSend />
                        </div>
                    </button>
                </motion.form>
            </div>
        </>
    )
}

export default Contact
