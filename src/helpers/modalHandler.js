const modalHandler = (state, setState) => {
  if (state === true) {
    const backdrop = document.getElementById("backdrop");
    if (backdrop) backdrop.style.animation = "fadeOut 0.5s";
    setTimeout(() => {
      setState((prev) => !prev);
    }, 400);
  } else setState((prev) => !prev);
};

export default modalHandler;
