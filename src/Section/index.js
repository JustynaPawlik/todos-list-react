import "./style.css";

const Section = ({ title, body, extraHeaderConntent }) => (
        <section className="section">
        <header className="section__header"> 
        <h2 className="section__title">{title}</h2>
        {extraHeaderConntent}
    </header>
    <div>
        {body}
    </div>
</section>
);

export default Section;