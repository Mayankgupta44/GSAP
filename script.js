window.onload = function () {
  const scenes = document.querySelectorAll(".scene");
  const logo = document.getElementById("logo");
  const music = document.getElementById("background-music");
  const startOverlay = document.getElementById("start-overlay");
  let animationStarted = false;

  const colors = [
    "linear-gradient(135deg, #ff8c42, #ffb68c)",
    "linear-gradient(135deg, #4b3d36, #7a685e)",
    "linear-gradient(135deg, #2c3e50, #34495e)",
    "linear-gradient(135deg, #f0e68c, #ff4500)",
  ];

  function animateScene(tl, sceneIndex) {
    const currentScene = scenes[sceneIndex];
    const imageWrapper = currentScene.querySelector(".image-wrapper");
    const sceneBorder = currentScene.querySelector(".scene-border");

    tl.to(document.body, {
      background: colors[sceneIndex],
      duration: 1.5,
      ease: "power2.inOut",
    });

    tl.fromTo(
      currentScene,
      { opacity: 0 },
      { opacity: 0.3, duration: 0.8 },
      "<"
    ).fromTo(
      imageWrapper,
      { scale: 0.01, rotation: 5 },
      { scale: 1.05, rotation: 0, duration: 1.2, ease: "back.out(1.7)" },
      "<"
    );

    tl.to(currentScene, { opacity: 0.6, duration: 0.8 }, "<0.4").fromTo(
      imageWrapper,
      { scale: 0.01, rotation: -5 },
      { scale: 1.0, rotation: 0, duration: 1.2, ease: "back.out(1.7)" },
      "<"
    );

    tl.to(currentScene, { opacity: 1, duration: 0.8 }, "<0.4")
      .fromTo(
        imageWrapper,
        { scale: 0.01, rotation: 5 },
        {
          scale: 0.95,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
        },
        "<"
      )
      .fromTo(
        sceneBorder,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
        "<0.2"
      )
      .to(
        imageWrapper,
        {
          scale: 1,
          duration: 0.3,
          yoyo: true,
          repeat: 1,
          ease: "power1.inOut",
        },
        "+=0.1"
      );

    tl.to(currentScene, { opacity: 0, duration: 1 });
    tl.set(sceneBorder, { opacity: 0, scale: 0.8 });
  }

  function startAnimation() {
    if (animationStarted) return;
    animationStarted = true;

    gsap.to(startOverlay, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => (startOverlay.style.display = "none"),
    });

    music.play().catch((error) => console.error("Error playing music:", error));

    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power2.inOut" },
    });

    animateScene(tl, 0);
    animateScene(tl, 1);
    animateScene(tl, 2);
    animateScene(tl, 3);

    // Move logo to center after last image
    const centerX = window.innerWidth / 2 - logo.offsetWidth / 2;
    const centerY = window.innerHeight / 2 - logo.offsetHeight / 2;

    tl.to(
      logo,
      {
        bottom: "50%",
        right: "50%",
        x: "50%",
        y: "50%",
        duration: 1.5,
        ease: "back.out(1.7)",
      },
      "+=0.5"
    );
  }

  startOverlay.addEventListener("click", startAnimation);
};
