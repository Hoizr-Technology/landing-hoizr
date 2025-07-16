import { useEffect, useState } from "react";
import ReusableModal from "./common/reuseableModal";

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check localStorage for welcomeModal flag
    const welcomeModalShown = localStorage.getItem("welcomeModal");

    if (!welcomeModalShown || welcomeModalShown === "false") {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    // Set flag in localStorage when modal is closed
    localStorage.setItem("welcomeModal", "true");
    setIsOpen(false);
  };

  return (
    <ReusableModal
      isOpen={isOpen}
      onClose={handleClose}
      title="Welcome to Hoizr"
      width="md"
      comments=""
    >
      <div className="space-y-4 text-center">
        <div className="text-primary text-5xl mt-4 mb-4">🎧</div>
        <h3 className="text-xl font-semibold text-foreground">
          You’re early — and that makes you special.
        </h3>
        <p className="text-muted-foreground">
          Hoizr isn’t live yet. No marketing, no SEO, no noise. Just a raw,
          unfinished backstage pass into what we’re building for the nightlife
          world.
        </p>
        <p className="text-muted-foreground">
          If you’re reading this, you’re part of a small group seeing it all
          before the rest. And that means a lot.
        </p>
        <p className="text-muted-foreground">
          Thank you for stopping by. We’re building something bold — for DJs,
          agencies, and venues everywhere.
        </p>
        <div className="pt-4">
          <button onClick={handleClose} className="btn btn-primary w-full">
            Let’s Build This Together
          </button>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          (With gratitude – Sanbedan)
        </p>
      </div>
    </ReusableModal>
  );
};

export default WelcomeModal;
