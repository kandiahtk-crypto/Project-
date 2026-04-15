async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setStatus("submitting");
  setErrorMessage("");

  const form = e.currentTarget;
  const formData = new FormData(form);

  const payload = {
    companyName: String(formData.get("companyName") || "").trim(),
    contactName: String(formData.get("contactName") || "").trim(),
    emailAddress: String(formData.get("emailAddress") || "").trim(),
    travelWindow: String(formData.get("travelWindow") || "").trim(),
    groupSize: String(formData.get("groupSize") || "").trim(),
    programmeType: String(by formData.get("programmeType") || "").trim(),
    programmeDetails: String(formData.get("programmeDetails") || "").trim(),
  };

  try {
    const response = await fetch("/api/enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Failed to submit enquiry");
    }

    setStatus("success");
    form.reset();
  } catch (error) {
    setStatus("error");
    setErrorMessage(
      error instanceof Error
        ? error.message
        : "Something went wrong while sending your enquiry. Please try again or contact us directly by phone or WhatsApp."
    );
  }
}
