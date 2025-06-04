"use client";
import React, { useRef } from 'react';
import LogoHeader from '../logoHeader';
import { MdLock, MdContentCopy } from 'react-icons/md'; // Use MdLock for password reset context

export function ForgotEmail() {
    // Create a ref for the notification element
    const notificationRef = useRef(null);

    // Verification URL
    const verificationUrl =
        'https://secure.gameboost.com/verify/user/abc123xyz789xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

    // Function to shorten URL
    const shortenUrl = (url: string, maxLength = 50) => {
        if (url.length <= maxLength) return url;
        return `${url.substring(0, maxLength - 3)}...`;
    };

    // Function to handle copy to clipboard and show notification
    const handleCopyLink = () => {
        navigator.clipboard.writeText(verificationUrl);

    };

    return (
        <div className="container">
            <div className="card">
                <LogoHeader />
                <hr className="divider" />
                <div className="card-content">
                    {/* Icon and Title */}
                    <div className="icon-title">
                        <MdLock className="icon" color="#000" style={{
                            width: '50px', height: '50px'
                        }} />
                        <h3>Forgot Your Password?</h3>
                    </div>

                    {/* Greeting Message */}
                    <p className="greeting">
                        It seems like you forgot your account password. If this is true, click below to reset your password.
                    </p>

                    {/* Chip for Time Limit */}
                    <span className="chip">Link expires in 1 hour</span>

                    {/* Verification Button */}
                    <a href={verificationUrl} target="_blank" rel="noopener noreferrer" className="button">
                        Reset a New Password
                    </a>

                    <p className="greeting">
                        If you did not forget your password, you can safely ignore this email.
                    </p>
                </div>

                {/* Alternative URL Copy Option */}
                <div className="url-copy-section">
                    <p className="url-copy-text">Can't click the button above? Copy it below:</p>
                    <div className="url-copy-container">
                        <span className="url-text">{shortenUrl(verificationUrl)}</span>
                        <button onClick={handleCopyLink} className="copy-button">
                            <MdContentCopy className="copy-icon" />
                            Copy
                        </button>
                    </div>
                </div>

                {/* Support Section */}
                <div className="support-section">
                    <p>
                        Need help?{' '}
                        <a href="https://support.gameboost.com" target="_blank" rel="noopener noreferrer" className="support-link">
                            Contact help@enigma.com
                        </a>
                    </p>
                </div>

                {/* Notification for copy confirmation */}
                <div className="notification" ref={notificationRef}>
                    <span>URL copied successfully!</span>
                </div>
            </div>

            <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        .card {
          max-width: 500px;
          border-radius: 12px;
          margin-bottom: 16px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          background-color: #ffffff;
          width: 100%;
        }

        .divider {
          margin: 8px 0;
          border: 0;
          border-top: 1px solid #e4e7ec;
          width: 100%;
          display: block;
        }

        @media (max-width: 600px) {
          .divider {
            display: block;
          }
        }

        .card-content {
          text-align: center;
          padding: 16px;
        }

        .icon-title {
          margin-bottom: 16px;
        }

        h3 {
          font-size: 28px;
          line-height: 32px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          margin-top: 8px;
          color: #101828;
        }

        .greeting {
          font-size: 16px;
          line-height: 24px;
          font-family: 'Inter', sans-serif;
          color: #475467;
          margin-bottom: 24px;
          margin-top: 15px;
        }

        .chip {
          display: inline-block;
          padding: 4px 8px;
          font-size: 12px;
          line-height: 18px;
          font-family: 'Inter', sans-serif;
          color: #ed6c02;
          border: 1px solid #ed6c02;
          border-radius: 16px;
          margin-bottom: 24px;
        }

        .button {
          display: block;
          width: 100%;
          padding: 12px 16px;
          font-size: 16px;
          line-height: 24px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          background-color: #2494b6;
          color: #ffffff;
          text-decoration: none;
          border-radius: 8px;
          text-align: center;
          transition: background-color 0.2s;
        }

        .button:hover {
          background-color: #217799;
        }

        .url-copy-section {
          background-color: #effbfc;
          padding: 16px;
        }

        .url-copy-text {
          font-size: 14px;
          line-height: 20px;
          font-family: 'Inter', sans-serif;
          color: #475467;
          margin-bottom: 8px;
          text-align: center;
        }

        .url-copy-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
        }

        .url-text {
          font-size: 14px;
          line-height: 20px;
          font-family: 'Inter', sans-serif;
          color: #2494b6;
          word-break: break-word;
          max-width: 80%;
        }

        .copy-button {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          font-size: 16px;
          line-height: 20px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          color: #2494b6;
          background: none;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .copy-button:hover {
          background-color: rgba(36, 14824, 2, 0.1);
        }

        .copy-icon {
          width: 16px;
          height: 16px;
          fill: #2494b6;
        }

        .support-section {
          display: flex;
          justify-content: center;
          padding-bottom: 24px;
        }

        .support-section {
 p {
          font-size: 14px;
          line-height: 20px;
          font-family: 'Inter', sans-serif;
          color: #475467;
          margin: 0;
        }

        .support-link {
          color: #2494b6;
          text-decoration: none;
          }

          .support-link:hover {
            text-decoration: underline;
          }

          .notification {
            position: fixed;
            bottom: 16px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #2e7d32;
            color: #ffffff;
            padding: 8px 16px;
            border-radius: 4px;
            font-size: 14px;
            line-height: 20px;
            font-family: 'Inter', sans-serif;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease;
          , visibility 0.3s ease;
        }

        .notification.show {
          opacity: 1;
          visibility: visible;
        }
      `}</style>
        </div>
    );
}