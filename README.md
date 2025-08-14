Dynamic Product Showcase 👟
This project is a modern, responsive web animation created to fulfill a software developer internship task. It showcases a series of sneaker images with dynamic transitions, synchronized background changes, and a final logo animation, all powered by the GreenSock Animation Platform (GSAP).

Features
Cinematic Transitions: Each product image appears in a three-stage pop-out sequence, starting from a small size and expanding with a smooth, spring-like easing effect.

Progressive Opacity: The three stages of each image transition progressively fade in from a low opacity to a final, crisp, full-clarity view with a white border.

Dynamic Backgrounds: The background of the page seamlessly transitions to a new color gradient for each product, complementing the featured shoe's colors.

Interactive Start: The animation and background music begin only after a user-initiated click, adhering to modern browser autoplay policies.

Final Logo Reveal: A custom sneaker logo, visible at the bottom-right corner, smoothly slides to the center of the screen as the animation concludes.

Full Responsiveness: The design is optimized for a wide range of screen sizes, ensuring a high-quality visual experience on both desktop and mobile devices.

Technologies Used
HTML: For the page structure.

CSS: For styling and element layout.

JavaScript & GSAP: The core of the project, used to create all the complex animations and timeline control.

How to Run the Project
Clone the repository to your local machine.

Open the index.html file in any modern web browser (e.g., Chrome, Firefox).

Make sure you have an task.mp3 audio file in the same directory as the index.html file, or update the <audio> tag's src attribute to point to your desired audio file.

Click the "Click to Start" overlay to begin the animation and music.

Customization
To make this project your own, you can easily customize the following elements:

Images: Replace the src attributes of the <img> tags with your own product images.

Colors: Modify the colors array in the <script> tag to change the background gradients for each scene.

Logo: You can edit the SVG code within the <div class="logo"> tag to create your own logo, or simply replace it with an image.

Text: Update the alt text for the images and the "Click to Start" overlay message as needed.

Timing: Adjust the duration values in the GSAP tweens within the <script> tag to control the speed and pacing of the animation.
