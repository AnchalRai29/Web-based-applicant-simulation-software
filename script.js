function submitApplication() {
    // Get user inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('roles').value;
    const experience = document.getElementById('experience').value;
  
    // Get preferences
    const remote = document.getElementById('remote').checked;
    const onsite = document.getElementById('onsite').checked;
    const flexible = document.getElementById('flexible').checked;
  
    // Validation
    if (!name || !email || !experience) {
      document.getElementById('output').textContent = "Please fill in all the required fields!";
      return;
    }
  
    // Simulate application result based on inputs
    let feedbackMessage = `Thank you, ${name}! Your application for the ${role} position has been received.`;
    
    // Provide feedback based on experience and preferences
    if (experience < 2) {
      feedbackMessage += ` However, you might need more experience for this role.`;
    } else {
      feedbackMessage += ` You are a great fit for this role!`;
    }
  
    if (remote || onsite || flexible) {
      feedbackMessage += ` You've chosen the following preferences: `;
      if (remote) feedbackMessage += 'Remote Work, ';
      if (onsite) feedbackMessage += 'Onsite Work, ';
      if (flexible) feedbackMessage += 'Flexible Hours.';
      feedbackMessage = feedbackMessage.slice(0, -2) + '.'; // Remove the trailing comma
    }
  
    feedbackMessage += ` We will contact you at ${email}.`;
  
    // Display the feedback message
    document.getElementById('output').textContent = feedbackMessage;
}
