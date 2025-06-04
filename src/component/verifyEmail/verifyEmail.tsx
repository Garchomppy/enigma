import React from 'react';

export function VerifyEmail({ firstName = 'User' }) {
  // Verification URL
  const verificationUrl =
    'https://secure.gameboost.com/verify/user/abc123xyz789xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

  // Function to shorten URL
  const shortenUrl = (url: string, maxLength = 50) => {
    if (url.length <= maxLength) return url;
    return `${url.substring(0, maxLength - 3)}...`;
  };

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        padding: '20px',
        fontFamily: "'Inter', Arial, sans-serif",
        lineHeight: '1.5',
        color: '#475467',
      }}
    >
      <table
        role="presentation"
        style={{
          maxWidth: '500px',
          width: '100%',
          margin: '0 auto',
          borderCollapse: 'collapse',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        }}
      >
        <tbody>
          <tr>
            <td style={{ padding: '15px' }}>
              <img
                src="/Logo2.svg"
                alt="Career Logo"
                style={{ width: '135px', height: '28px', display: 'block' }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <hr
                style={{
                  margin: '8px 0',
                  border: '0',
                  borderTop: '1px solid #e4e7ec',
                  width: '100%',
                }}
              />
            </td>
          </tr>
          <tr>
            <td style={{ padding: '16px', textAlign: 'center' }}>
              {/* Icon and Title */}
              <div style={{ marginBottom: '16px' }}>
                {/* Todo Thay icon */}
                <img
                  src="/email-icon.png"
                  alt="Email Icon"
                  style={{
                    width: '50px', height: '50px', display: 'block', margin: '0 auto'
                  }}
                />
                <h3
                  style={{
                    fontSize: '28px',
                    lineHeight: '32px',
                    fontWeight: '600',
                    color: '#101828',
                    marginTop: '8px',
                    marginBottom: '0',
                  }}
                >
                  Verify Your Email Address
                </h3>
              </div>

              {/* Greeting Message */}
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#475467',
                  margin: '0 0 24px',
                }}
              >
                Hi {firstName}, let’s get started! Confirm your email to unlock your account.
              </p>

              {/* Chip for Time Limit */}
              <span
                style={{
                  display: 'inline-block',
                  padding: '4px 8px',
                  fontSize: '12px',
                  lineHeight: '18px',
                  color: '#ed6c02',
                  border: '1px solid #ed6c02',
                  borderRadius: '16px',
                  marginBottom: '24px',
                }}
              >
                Link expires in 1 hour
              </span>

              {/* Verification Button */}
              <a
                href={verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '12px 16px',
                  fontSize: '16px',
                  lineHeight: '24px',
                  fontWeight: '600',
                  backgroundColor: '#2494b6',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  textAlign: 'center',
                  marginBottom: '24px',
                }}
              >
                Activate My Account
              </a>
            </td>
          </tr>
          <tr>
            <td
              style={{
                backgroundColor: '#effbfc',
                padding: '16px',
                textAlign: 'center',
              }}
            >
              {/* Alternative URL Copy Option */}
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#475467',
                  margin: '0 0 8px',
                }}
              >
                Can't click the button above? Copy the link below:
              </p>
              <table
                role="presentation"
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  margin: '0 auto',
                  maxWidth: '90%',
                }}
              >
                <tbody>
                  <tr>
                    <td style={{ padding: '0', textAlign: 'left' }}>
                      <span
                        style={{
                          fontSize: '14px',
                          lineHeight: '20px',
                          color: '#2494b6',
                          wordBreak: 'break-word',
                          display: 'inline-block',
                        }}
                      >
                        {shortenUrl(verificationUrl)}
                      </span>
                    </td>
                    <td style={{ padding: '0', textAlign: 'right' }}>
                      <a
                        href={verificationUrl}
                        target="_blank"
                        style={{
                          display: 'inline-block',
                          padding: '4px 8px',
                          fontSize: '14px',
                          lineHeight: '20px',
                          fontWeight: '600',
                          color: '#2494b6',
                          backgroundColor: 'transparent',
                          border: 'none',
                          borderRadius: '8px',
                          textDecoration: 'none',
                          cursor: 'pointer',
                        }}
                      >
                        Copy
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '0 16px 24px', textAlign: 'center' }}>
              {/* Support Section */}
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#475467',
                  margin: '0',
                }}
              >
                Need help?{' '}
                <a
                  href="https://support.gameboost.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#2494b6',
                    textDecoration: 'none',
                  }}
                >
                  Contact help@enigma.com
                </a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}