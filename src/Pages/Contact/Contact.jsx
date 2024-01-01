import Style from "./Contact.module.css";

const Contact = () => {
    return (
        <div className={Style.bg}>
           <div className="container">
                <div className={Style.contactIneer}>
                    <div className={Style.text}>
                        <h1>Contact Us</h1>
                        <p>Lorem ipsum doloeum rro! . Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit quaerat aliquid sit molestiae earum reprehenderit excepturi sunt at nobis atque porro minima consectetur facere quam inventore accusamus eum, quia obcaecati cum fugiat. Quisquam autem quis facere magnam soluta ullam molestias. Velit ipsam dignissimos tempora vitae, fugiat quia deleniti voluptates.</p>
                        <button className={Style.herroBtn}> Get start </button>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Contact;