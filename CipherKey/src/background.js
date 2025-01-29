chrome.runtime.onInstalled.addListener(() => {
    // Initialize the session when the extension is installed
    console.log('Extension installed');
  });
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'SIGN_IN') {
      // Handle sign-in logic (verify email/password, MFA)
    }
  });
  