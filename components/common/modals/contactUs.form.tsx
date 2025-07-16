import React, { useState } from "react";
import ReusableModal from "./common/reuseableModal";

interface ContactUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  number: string;
  query: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  number?: string;
  query?: string;
}

const ContactUsModal: React.FC<ContactUsModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    number: "",
    query: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.number.trim()) {
      newErrors.number = "Phone number is required";
    } else if (!/^\+?[\d\s-()]{10,}$/.test(formData.number)) {
      newErrors.number = "Please enter a valid phone number";
    }

    if (!formData.query.trim()) {
      newErrors.query = "Query is required";
    } else if (formData.query.trim().length < 10) {
      newErrors.query = "Query must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.hoizr.com/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          number: formData.number.trim(),
          query: formData.query.trim(),
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", number: "", query: "" });

        // Auto close modal after 2 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
          onClose();
        }, 2000);
      } else {
        alert(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({ name: "", email: "", number: "", query: "" });
    setErrors({});
    setSubmitSuccess(false);
    onClose();
  };

  return (
    <ReusableModal
      isOpen={isOpen}
      onClose={handleClose}
      title="Contact Us"
      width="ml"
      comments="We'd love to hear from you! Send us a message and we'll get back to you as soon as possible."
    >
      {submitSuccess ? (
        <div className="text-center py-8">
          <div className="text-green-500 text-6xl mb-4">✓</div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Message Sent!
          </h3>
          <p className="text-gray-300">
            Thank you for contacting us. We&pos;ll get back to you soon.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white mb-2"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`input input-primary ${
                errors.name ? "border-warning" : ""
              }`}
              placeholder="Enter your full name"
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white mb-2"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`input input-primary ${
                errors.email ? "border-warning" : ""
              }`}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone Number Field */}
          <div>
            <label
              htmlFor="number"
              className="block text-sm font-medium text-white mb-2"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleInputChange}
              className={`input input-primary ${
                errors.number ? "border-warning" : ""
              }`}
              placeholder="Enter your phone number"
            />

            {errors.number && (
              <p className="text-red-500 text-sm mt-1">{errors.number}</p>
            )}
          </div>

          {/* Query Field */}
          <div>
            <label
              htmlFor="query"
              className="block text-sm font-medium text-white mb-2"
            >
              Your Message *
            </label>
            <textarea
              id="query"
              name="query"
              value={formData.query}
              onChange={handleInputChange}
              rows={4}
              className={`textarea textarea-primary ${
                errors.query ? "border-warning" : ""
              }`}
              placeholder="Tell us about your inquiry, project, or how we can help you..."
            />
            {errors.query && (
              <p className="text-red-500 text-sm mt-1">{errors.query}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`w-full py-3 px-4 hover:cursor-pointer rounded-lg font-semibold text-black transition-colors ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-primary hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-800"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </div>
      )}
    </ReusableModal>
  );
};

export default ContactUsModal;
