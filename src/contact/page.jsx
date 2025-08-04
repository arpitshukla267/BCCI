'use client';
import './style.css';
import InitScrollScript from './script'; // ✅ fixed import

export default function ContactPage() {
  return (
    <div className="main-container">
      <InitScrollScript /> {/* ✅ This runs useEffect inside script.js */}

      {/* Left auto-scrolling image area */}
      <div className="scroll-section">
        <div className="scroll-track" id="scroll-track"></div>
      </div>

      {/* Right contact form */}
      <div className="form-section">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Name" className="full" required />
          <div className="row">
            <input type="email" placeholder="E-Mail" required />
            <input type="text" placeholder="Phone" required />
          </div>
          <textarea placeholder="Type Message" required></textarea>
          <div className="button-wrap">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}
