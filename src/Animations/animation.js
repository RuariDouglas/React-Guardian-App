export const pageAnimation = {
  hidden: {
    opacity: 0,
    rotation: 0.06,
    transition: { delay: 2 },
  },
  show: {
    opacity: 1,
    rotation: 0.06,
    transition: { delay: 1 },
  },
  exit: {
    opacity: 0,
    rotation: 0.06,
    transition: {
      duration: 0.4,
    },
  },
};
export const articleAnimation = {
  hidden: {
    opacity: 0,
    rotation: 0.06,
  },
  show: {
    opacity: 1,
    rotation: 0.06,
  },
  exit: {
    opacity: 0,
    rotation: 0.06,
    transition: {
      duration: 1,
    },
  },
};

export const titleAnim = {
  hidden: { y: 100, rotation: 0.06 },
  show: {
    rotation: 0.06,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const fade = {
  hidden: { opacity: 0, rotation: 0.06 },
  show: {
    rotation: 0.06,
    opacity: 1,
    transition: {
      duration: 0.25,
    },
  },
  exit: {
    opacity: 0,
    rotation: 0.06,
    transition: {
      duration: 1,
    },
  },
};

export const photoAnim = {
  hidden: { scale: 1.5, opacity: 0, rotation: 0.06 },
  show: {
    rotation: 0.06,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeIn",
    },
  },
};

export const lineAnim = {
  hidden: {
    rotation: 0.06,
    width: "0%",
  },
  show: {
    rotation: 0.06,
    width: "100%",
    transition: {
      duration: 1,
    },
  },
};

export const slider = {
  hidden: { x: "-130%", skew: "45deg", rotation: 0.06 },
  show: {
    rotation: 0.06,
    x: "100%",
    skew: "0deg",
    transition: { ease: "easeOut", duration: 1 },
  },
};

export const sliderContainer = {
  hidden: { opacity: 1, rotation: 0.06 },
  show: {
    opacity: 1,
    rotation: 0.06,
    transition: { staggerChildren: 0.1, ease: "easeOut" },
  },
};

export const scrollReveal = {
  hidden: {
    rotation: 0.06,
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.5,
    },
  },
  show: {
    rotation: 0.06,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};
