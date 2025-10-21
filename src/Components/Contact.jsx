import React, { useState } from 'react';
import st from '../ComponentsCss/Contact.module.css';

const Contact = () => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [text, setText] = useState("");
    const [msg, setMsg] = useState([]);

    const addmessage = () => {
        if (text.trim() === "") return;
        setText("");
        setMsg([...msg, { name, text }]);
    };

    const handlesend = (e) => {
        e.preventDefault();
        addmessage();
        setName("");
        setMail("");
    };

    return (
        <div className={st.contactpage}>
            <div className={st.totalcontactform}>
                <div className={st.brandname}>
                    <p>INKSPIRE.</p>
                </div>
                <div className={st.finalcontactsection}>
                    <div className={st.contactSection}>
                        <h2>Contact Us</h2>
                        <p>Have questions or need support? We'd love to hear from you.</p>
                        <form className={st.contactForm}>
                            <input
                                type="text"
                                placeholder="Your Name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                required
                                value={mail}
                                onChange={(e) => setMail(e.target.value)}
                            />
                            <textarea
                                placeholder="Your Message"
                                rows="5"
                                required
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                            <button type="submit" onClick={handlesend}>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
                {msg.length === 0 ? (<p className={st.nomsg}>No messages yet</p>):(
            <div className={st.messagecollector}>
                <h3>Messages</h3>
                <div className={st.msgrid}>
                    {msg.map((item, index) => (
                        <div key={index} className={st.messagestorage}>
                            <h2>{item.name}</h2>
                            <p>{item.text}</p>
                            <div className={st.clearbtn}>
                                <button onClick={() => setMsg(msg.filter((_, i) => i !== index))}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
                )}
                
                
        </div>
    );
};

export default Contact;