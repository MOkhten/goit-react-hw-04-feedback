import PropTypes from 'prop-types';
import { SectionStyled, Title } from './Section.styled';

export const Section = ({ title, children }) => {
    return (
        <SectionStyled>
            {title && <Title>{title}</Title>}
            {children}
        </SectionStyled>
    );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
}
