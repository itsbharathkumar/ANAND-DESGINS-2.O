# Anand Designs starter website

A responsive static storefront prototype for Anand Designs. It is intentionally safe to preview before payment and file-delivery services are connected.

## Included
- Responsive creative-studio homepage
- Light/dark theme toggle
- Basic English/Tamil navigation toggle
- Sample design catalogue with search and category filters
- WhatsApp enquiry links for custom work and design enquiries
- Cloudflare Pages deployment structure

## Important current limitations
This is **Phase 1: visual storefront prototype**, not a production payment/download system.
- Product cards are sample placeholders, not Anand's actual 5,000+ designs.
- The current purchase action opens WhatsApp. It does not collect money.
- No customer login, payment approval, database or PSD download delivery is active yet.
- Do not upload private PSD files into `public/`.
- The logo in `public/logo.png` is copied from the logo supplied for this project.

## Deploy a preview
1. Create a GitHub repository, for example `anand-designs-marketplace`.
2. Upload the contents of this folder to the repository root.
3. Create a Cloudflare account at https://dash.cloudflare.com/sign-up.
4. In Cloudflare, open **Workers & Pages → Create → Pages → Connect to Git**.
5. Select the GitHub repository. Use the repository root as the project directory. No build command is required; set the build output directory to `/`.
6. Deploy the preview URL. Do not change the GoDaddy DNS or the existing Vercel production domain yet.

## Planned production phases
1. Confirm domain/DNS ownership and create a staging hostname.
2. Add Cloudflare Pages Functions, D1 database and R2 private bucket.
3. Add admin authentication and product upload tools.
4. Add UPI QR payment submission, transaction ID and screenshot.
5. Add Telegram bot notifications with secure Approve/Reject callbacks.
6. On approval, create an order entitlement and issue a short-lived signed download URL from private R2 storage.
7. Add customer account, purchase history, email notification and audit trail.
8. Test security, backups, mobile layout and payment edge cases before cutover.

## Suggested product catalogue import
Prepare a CSV with columns:
`title, category, description, price_inr, preview_image_path, private_file_key, status`
Use stable unique IDs. Store previews separately from original PSDs. Keep original PSDs in a private R2 bucket, never in the public website folder.

## Required secrets for later phases
Never commit these to GitHub:
- ADMIN_EMAIL / admin auth secret
- TELEGRAM_BOT_TOKEN
- TELEGRAM_ADMIN_CHAT_ID
- R2 access credentials (prefer Cloudflare bindings instead of long-lived keys)
- Any email provider API key

## Domain safety
The current site on Vercel remains untouched. Connect `ananddesigns.online` to the new Cloudflare deployment only after the new marketplace is complete and verified.
