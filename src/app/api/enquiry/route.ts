const result = await resend.emails.send({
  from: "UK Inbound Ground Transport <onboarding@resend.dev>",
  to: "info@ukinboundgroundtransport.com",
  replyTo: emailAddress,
  subject: `New programme enquiry from ${contactName}`,
  html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #16212B;">
      <h2>New programme enquiry</h2>
      <p><strong>Company name:</strong> ${escapeHtml(companyName)}</p>
      <p><strong>Contact name:</strong> ${escapeHtml(contactName)}</p>
      <p><strong>Email address:</strong> ${escapeHtml(emailAddress)}</p>
      <p><strong>Travel window:</strong> ${escapeHtml(travelWindow || "-")}</p>
      <p><strong>Group size:</strong> ${escapeHtml(groupSize || "-")}</p>
      <p><strong>Programme type:</strong> ${escapeHtml(programmeType || "-")}</p>
      <p><strong>Itinerary and requirements:</strong></p>
      <div style="padding: 14px 16px; background: #F7F7F7; border-radius: 12px; white-space: pre-wrap;">
        ${escapeHtml(programmeDetails || "-")}
      </div>
    </div>
  `,
});

console.log("Resend result:", result);

if (result.error) {
  console.error("Resend error:", result.error);
  return NextResponse.json(
    { success: false, message: result.error.message || "Email sending failed." },
    { status: 500 }
  );
}

return NextResponse.json({ success: true });
