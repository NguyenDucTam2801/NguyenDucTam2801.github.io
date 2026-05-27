import React, { useState } from 'react';
import { Typography } from './ui/Typography';
import Button from './ui/Button';

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            // Replace "your-email@gmail.com" with your actual email address
            const response = await fetch("https://formsubmit.co/ajax/nguyenductam12003@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    _subject: `New Portfolio Message: ${formData.subject}`, // Email subject prefix
                    message: formData.message
                })
            });

            const data = await response.json();

            if (response.ok && data.success === "true") {
                setStatus('success');
                // Clear the form after a successful send
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus('error');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="md:w-[50%] w-full flex flex-col gap-6 font-manrope">
            <div className="flex flex-col gap-2">
                <label htmlFor="name" >
                    <Typography variant="p">Enter your name</Typography>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1a1a1a] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D3E97A] border border-transparent"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="email">
                    <Typography variant="p">Enter your email</Typography>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1a1a1a] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D3E97A] border border-transparent"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="subject">
                    <Typography variant="p">Enter the subject</Typography>
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1a1a1a] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D3E97A] border border-transparent"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="message">
                    <Typography variant="p">Enter your message</Typography>
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-[#1a1a1a] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D3E97A] border border-transparent resize-none"
                />
            </div>

            {/* Submission Status Message */}
            {status === 'success' && <p className="text-[#D3E97A]">Message sent successfully!</p>}
            {status === 'error' && <p className="text-red-400">Something went wrong. Please try again.</p>}

            <Button type="submit" disabled={status === 'sending'} className="self-end md:self-start" onClick={() => { }}>
                {status === 'sending' ? 'Sending...' : 'Submit'}
            </Button>
        </form>
    );
};