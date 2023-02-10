import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CertificateGenerator from '../components/certificates/CertificateGenerator';

export const Certificates = () => {
  return (
    <div>
        <Navbar />
            <div className="container mt-10">
                <CertificateGenerator/>
            </div>
        <Footer />
    </div>
  )
}
