// src/lib/fontawesome.ts
import { library } from '@fortawesome/fontawesome-svg-core';

// Solid icons
import {
  faBars,
  faXmark,
  faArrowRight,
  faHouse,
  faAngleRight,
  faSquareArrowUpRight,
  faDownload
  // Add more icons you need here
} from '@fortawesome/free-solid-svg-icons';

// Brand icons
import {
  faGithub as faGithubBrand,
  faLinkedin as faLinkedinBrand,
  faInstagramSquare as faInstagramSquare
} from '@fortawesome/free-brands-svg-icons';

// Add icons to the library (so you can use them anywhere)
library.add(
  faBars,
  faXmark,
  faArrowRight,
  faAngleRight,
  faHouse,
  faGithubBrand,
  faLinkedinBrand,
  faSquareArrowUpRight,
  faInstagramSquare,
  faDownload

  // Add more icons as you need them
);

export { }; // This makes it a module