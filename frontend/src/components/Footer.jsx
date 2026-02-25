import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer style={{ borderTop: '1px solid rgba(251,191,36,0.15)', marginTop: '2rem' }}>
      <Container>
        <Row>
          <Col className='text-center py-3' style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
            <span style={{ color: '#fbbf24', marginRight: '0.25rem' }}>✦</span>
            Luminary &copy; {currentYear} — Premium E-Commerce Platform
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
