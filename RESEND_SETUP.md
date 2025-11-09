# Resend Email Setup Guide

Your website is now configured to use **Resend** for email delivery. Follow these steps to complete the setup:

## Step 1: Create a Resend Account

1. Go to **[https://resend.com/signup](https://resend.com/signup)**
2. Sign up with your email (it's free!)
3. Verify your email address

## Step 2: Get Your API Key

1. Log into your Resend dashboard: **[https://resend.com/api-keys](https://resend.com/api-keys)**
2. Click **"Create API Key"**
3. Give it a name like "Private Home Care Website"
4. Copy the API key (you'll only see it once!)

## Step 3: Add the API Key to Your Project

1. Open the file `.env.local` in your project root
2. Replace `your_resend_api_key_here` with your actual API key:

```env
RESEND_API_KEY=re_YourActualAPIKey123456789
```

3. Save the file
4. **Restart your development server** (stop with Ctrl+C and run `npm run dev` again)

## Step 4: Test the Forms

1. Go to http://localhost:3000
2. Fill out either the booking form or contact form
3. Submit it
4. Check `sigal888@hotmail.com` - you should receive an email!

## ✅ What Works Now:

- **Booking Form**: Sends detailed booking requests to sigal888@hotmail.com
- **Contact Form**: Sends contact inquiries to sigal888@hotmail.com
- **Auto-reply**: Client's email is set as "reply-to" so you can respond directly
- **Professional emails**: HTML formatted with all details organized

## 📧 Email Format:

### Booking Emails Include:
- Patient name, email, phone
- Procedure type
- Surgery date
- Care type needed
- Duration
- Additional notes

### Contact Emails Include:
- Name, email, phone (if provided)
- Full message

## 🚀 For Production (Optional):

### Add Your Own Domain

Right now, emails come from `onboarding@resend.dev`. To use your own domain:

1. **Buy a domain** (if you don't have one)
2. In Resend dashboard, go to **Domains**
3. Click **Add Domain**
4. Follow the DNS setup instructions
5. Update the `from` field in:
   - `app/api/booking/route.ts` (line 21)
   - `app/api/contact/route.ts` (line 20)
   
   Change from:
   ```typescript
   from: 'Private Home Care <onboarding@resend.dev>',
   ```
   
   To:
   ```typescript
   from: 'Private Home Care <noreply@yourdomain.com>',
   ```

## 💰 Pricing:

- **Free tier**: 3,000 emails/month (100/day)
- **Pro**: $20/month for 50,000 emails/month

For your use case, the free tier should be more than enough!

## 🐛 Troubleshooting:

### "Failed to send email"
- Check that your API key is correct in `.env.local`
- Make sure you restarted the dev server after adding the key
- Check the terminal for error messages

### Email not arriving
- Check spam folder
- Verify `sigal888@hotmail.com` is correct
- Check Resend dashboard for delivery logs

### "RESEND_API_KEY is not defined"
- Make sure `.env.local` exists in the project root
- Restart the development server
- Don't include quotes around the API key

## 📱 Need Help?

- Resend Docs: https://resend.com/docs
- Resend Support: https://resend.com/support

---

Once you complete these steps, your contact forms will work perfectly! 🎉

