function submitFeedbackAndRedirect(feedback) {
  // Store the feedback in sessionStorage to pass it to the next page
  sessionStorage.setItem('feedback', feedback);
  // Create the content dynamically based on the selected feedback
  const content = `
    <div class="episode-image">
      <img src="img-poster.jpeg" alt="" height="250px" width="500px" class="img-1">
    </div>
    <div class="feedback-text" style = "color: white;">
      <p>${feedback}</p>
    </div>
  `;
  // Open the new window with the dynamically created content
  const newWindow = window.open('', '_blank');
  newWindow.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Feedback Result</title>
      <link rel="stylesheet" href="styles.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" /> 
    </head>
    <body>
      <header>
        <img src="logo.jpg" alt="" height="50px">
      </header>
      <main>
        ${content}
      </main>
    </body>
    </html>
  `);
  newWindow.document.close();
}
