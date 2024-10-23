import PageHeader from "../components/ui/PageHeader";

export default function SupportPage() {
  const contactMethods = [
    {
      label: "Email",
      value: "email",
    },
    {
      label: "Phone",
      value: "phone",
    },
    {
      label: "Chat",
      value: "chat",
    },
    {
      label: "WhatsApp",
      value: "whatsapp",
    },
    {
      label: "Postal mail",
      value: "postal",
    },
  ];
  return (
    <div className="max-w-[900px] mx-auto">
      <div className="mb-4">
        <PageHeader
          title="How can we help you?"
          description="Please fill out the form below and we will get back to you as soon as possible in the way you prefer."
        />
      </div>
      <div className="w-full space-y-4 bg-white p-4 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <vaadin-text-field
            label="First name"
            class="w-full"
          ></vaadin-text-field>
          <vaadin-text-field
            label="Last name"
            class="w-full"
          ></vaadin-text-field>
        </div>
        <vaadin-text-field
          label="Email address"
          name="email"
          clear-button-visible
          class="w-full"
        ></vaadin-text-field>
        <vaadin-text-field
          label="Phone number"
          class="w-full"
        ></vaadin-text-field>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <vaadin-text-field
            label="Street"
            class="w-full md:col-span-3"
          ></vaadin-text-field>
          <vaadin-text-field
            label="House number"
            class="w-full"
          ></vaadin-text-field>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <vaadin-number-field
            label="Postal code"
            class="w-full"
          ></vaadin-number-field>
          <vaadin-text-field
            label="City"
            class="w-full md:col-span-3"
          ></vaadin-text-field>
        </div>
        <div className="w-full">
          <comet-select
            items={JSON.stringify(contactMethods)}
            label="How do you want to be contacted?"
          ></comet-select>
        </div>
        <vaadin-text-field
          label="Contract number (if applicable)"
          class="w-full"
        ></vaadin-text-field>
        <div className="flex justify-end mt-10">
          <vaadin-button theme="primary">Submit</vaadin-button>
        </div>
      </div>
    </div>
  );
}
