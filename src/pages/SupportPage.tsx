import { useCallback, useEffect, useRef } from "react";
import PageHeader from "../components/ui/PageHeader";
import { CONTACT_METHODS } from "../constants/contact-method";

type InputElement = HTMLElement & {
  value: string;
  invalid: boolean;
  required?: boolean;
};

type InputFieldRef = {
  [key: string]: InputElement | null;
};

export default function SupportPage() {
  const inputFieldRef = useRef<InputFieldRef>({});

  const handleSelectChange = useCallback((event: CustomEvent) => {
    const name = (event.target as HTMLElement).getAttribute("name");
    const value = event.detail.value;
    if (name && inputFieldRef.current[name]) {
      (inputFieldRef.current[name] as InputElement).value = value;
      (inputFieldRef.current[name] as InputElement).invalid = false;
    }
  }, []);

  useEffect(() => {
    const selectElement = inputFieldRef.current
      .contactMethod as HTMLElement | null;
    if (selectElement) {
      selectElement.addEventListener(
        "select-change",
        handleSelectChange as EventListener
      );
    }
    return () => {
      if (selectElement) {
        selectElement.removeEventListener(
          "select-change",
          handleSelectChange as EventListener
        );
      }
    };
  }, [handleSelectChange]);

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    let isValid = true;
    const formData = new FormData();

    Object.keys(inputFieldRef.current).forEach((field) => {
      const textField = inputFieldRef.current[field];
      if (textField) {
        if (textField.required && !textField.value?.trim()) {
          textField.invalid = true;
          isValid = false;
        } else {
          textField.invalid = false;
          formData.append(field, textField.value);
        }
      }
    });

    if (isValid) {
      console.log("Form is valid and submitted");
      console.log(
        "🚀 ~ handleSubmit ~ formData:",
        Object.fromEntries(formData)
      );
    } else {
      console.log("Form is invalid, please fill out all required fields");
    }
  };

  return (
    <div className="max-w-[900px] mx-auto">
      <div className="mb-4">
        <PageHeader
          title="How can we help you?"
          description="Please fill out the form below and we will get back to you as soon as possible in the way you prefer."
        />
      </div>
      <form>
        <div className="w-full space-y-4 bg-white p-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <vaadin-text-field
              label="First name"
              required
              class="w-full"
              ref={(el) =>
                (inputFieldRef.current.firstName = el as InputElement)
              }
            >
              <div slot="error-message">First name is required</div>
            </vaadin-text-field>
            <vaadin-text-field
              label="Last name"
              required
              class="w-full"
              ref={(el) =>
                (inputFieldRef.current.lastName = el as InputElement)
              }
            >
              <div slot="error-message">Last name is required</div>
            </vaadin-text-field>
          </div>
          <vaadin-text-field
            label="Email address"
            required
            clear-button-visible
            class="w-full"
            ref={(el) => (inputFieldRef.current.email = el as InputElement)}
          >
            <div slot="error-message">Email is required</div>
          </vaadin-text-field>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <vaadin-text-field
              label="Country code"
              class="w-full"
              required
              ref={(el) =>
                (inputFieldRef.current.countryCode = el as InputElement)
              }
            >
              <div slot="error-message">Country code is required</div>
            </vaadin-text-field>
            <vaadin-number-field
              label="Phone number"
              required
              class="w-full md:col-span-3"
              ref={(el) => (inputFieldRef.current.phone = el as InputElement)}
            >
              <div slot="error-message">Phone number is required</div>
            </vaadin-number-field>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <vaadin-text-field
              label="Street"
              class="w-full md:col-span-3"
              required
              ref={(el) => (inputFieldRef.current.street = el as InputElement)}
            >
              <div slot="error-message">Street is required</div>
            </vaadin-text-field>
            <vaadin-text-field
              label="House number"
              class="w-full"
              required
              ref={(el) =>
                (inputFieldRef.current.houseNumber = el as InputElement)
              }
            >
              <div slot="error-message">House number is required</div>
            </vaadin-text-field>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <vaadin-number-field
              label="Postal code"
              class="w-full"
              required
              ref={(el) =>
                (inputFieldRef.current.postalCode = el as InputElement)
              }
            >
              <div slot="error-message">Postal code is required</div>
            </vaadin-number-field>
            <vaadin-text-field
              label="City"
              class="w-full md:col-span-3"
              required
              ref={(el) => (inputFieldRef.current.city = el as InputElement)}
            >
              <div slot="error-message">City is required</div>
            </vaadin-text-field>
          </div>
          <div className="w-full">
            <comet-select
              items={JSON.stringify(CONTACT_METHODS)}
              label="How do you want to be contacted?"
              name="contactMethod"
              required
              ref={(el) =>
                (inputFieldRef.current.contactMethod = el as InputElement)
              }
            >
              <div slot="error-message">Contact method is required</div>
            </comet-select>
          </div>
          <vaadin-text-field
            label="Contract number (if applicable)"
            class="w-full"
            ref={(el) =>
              (inputFieldRef.current.contractNumber = el as InputElement)
            }
          >
            <div slot="error-message">Contract number is required</div>
          </vaadin-text-field>
          <div className="flex justify-end mt-10">
            <vaadin-button type="button" theme="primary" onClick={handleSubmit}>
              Submit
            </vaadin-button>
          </div>
        </div>
      </form>
    </div>
  );
}
