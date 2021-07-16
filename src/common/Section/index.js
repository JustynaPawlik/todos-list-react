import { SectionElement, SectionHeader, SectionTitle, SectionBody } from "./styled";

const Section = ({ title, button, body, extraHeaderConntent }) => (
    <SectionElement>
        <SectionHeader>
            <SectionTitle>{title}</SectionTitle>
            {button}
            {extraHeaderConntent}
        </SectionHeader>
        <SectionBody>
            {body}
        </SectionBody>
    </SectionElement>
);

export default Section;