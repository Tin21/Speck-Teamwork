import PropTypes from 'prop-types';
import {
  Section as SectionWrapper,
  SectionInner,
  SectionSubtitle,
  SectionTitle,
} from './SectionStyle';

const Section = ({ title, subtitle, button, children, isFlexDisplay }) => {
  return (
    <SectionWrapper>
      <SectionInner>
        <SectionTitle isFlexDisplay={isFlexDisplay}>
          {title}
          {button}
        </SectionTitle>
        <SectionSubtitle>{subtitle}</SectionSubtitle>
        {children}
      </SectionInner>
    </SectionWrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  isFlexDisplay: PropTypes.bool,
  button: PropTypes.node,
  children: PropTypes.node,
};

export default Section;
