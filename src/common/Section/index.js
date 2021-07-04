import { SectionElement, SectionHeader, SectionTitle, SectionBody } from "./styled";

const Section = ({ title, body, extraHeaderConntent }) => (
    <SectionElement>
        <SectionHeader>
            <SectionTitle>{title}</SectionTitle>
            {extraHeaderConntent}
        </SectionHeader>
        <SectionBody>
            {body}
        </SectionBody>
    </SectionElement>
);

export default Section;