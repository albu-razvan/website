function registerHoverListeners(containers) {
  for (let i = 0; i < containers.length; i++) {
    let container = containers[i];
    const target = container.children[0];

    // hacky way of making sure there are no pixel gaps on recalculate
    target.style["transform"] = "rotateX(0.001deg) rotateY(0.001deg)";
    target.style["transition"] = "1s transform, 0.5s opacity";

    container.style.setProperty("--overlay-opacity", "0");
    container.style.setProperty("--overlay-rotation", "0deg");

    container.addEventListener("pointermove", (event) => {
      if (event.pointerType !== "mouse") {
        container.style.setProperty("--overlay-opacity", "0");
        container.style.setProperty("--overlay-rotation", "0deg");

        return;
      }

      const width = container.clientWidth;
      const height = container.clientHeight;

      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const factorY = ((x - width / 2) / width) * 2;
      const factorX = ((y - height / 2) / height) * 2;

      const valueY = factorY * 5;
      const valueX = factorX * 5;

      target.style["transition"] = "0.1s transform, 0.5s opacity";
      target.style[
        "transform"
      ] = `rotateX(${-valueX}deg) rotateY(${valueY}deg)`;

      const angle = (-Math.atan2(factorY, factorX) * 180) / Math.PI;

      container.style.setProperty(
        "--overlay-opacity",
        `${Math.max(Math.abs(factorX), Math.abs(factorY))}`
      );
      container.style.setProperty("--overlay-rotation", `${angle}deg`);
    });

    container.addEventListener("mouseout", () => {
      target.style["transition"] = "1s transform, 0.5s opacity";
      target.style["transform"] = "rotateX(0.001deg) rotateY(0.001deg)";
    });
  }
}

export { registerHoverListeners };
