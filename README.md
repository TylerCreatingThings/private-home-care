# Private Home Care Services Website

A premium Next.js website for Sigal Farkas, RN, BScN - private home care nursing services specializing in post-surgical plastic surgery recovery.

## Features

- **Premium Design**: Modern, luxury aesthetic with smooth animations and gradients
- **Nurse Profile**: Professional profile showcase for Sigal Farkas, RN, BScN
- **Responsive Layout**: Fully responsive design that works on all devices
- **Booking System**: Comprehensive booking form for scheduling nursing care
- **Service Showcase**: Detailed presentation of all care services offered
- **Testimonials**: Client testimonials and trust indicators
- **Contact Integration**: Direct phone and email contact with 416-303-4390 and sigal888@hotmail.com
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Resend account (free) for email functionality

### Installation

1. Install dependencies:

```bash
npm install
```

2. **Set up Resend for email** (see `RESEND_SETUP.md` for detailed instructions):
   - Sign up at https://resend.com
   - Get your API key
   - Add it to `.env.local`:
   ```env
   RESEND_API_KEY=your_api_key_here
   ```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
privatehomecare/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Header navigation
│   ├── Hero.tsx           # Hero section with nurse profile
│   ├── Services.tsx       # Services showcase
│   ├── About.tsx          # About Sigal Farkas section
│   ├── BookingForm.tsx    # Booking form
│   ├── Testimonials.tsx   # Client testimonials
│   ├── Contact.tsx        # Contact section
│   └── Footer.tsx         # Footer
├── public/
│   └── nurse.png          # Sigal Farkas profile photo
└── package.json
```

## Customization

### Contact Information

The contact details are hardcoded in multiple components:
- Phone: 416-303-4390
- Email: sigal888@hotmail.com

To update, search for these values in:
- `components/Navigation.tsx`
- `components/Contact.tsx`
- `components/Footer.tsx`
- `components/BookingForm.tsx`

### Colors and Branding

Colors are defined in `tailwind.config.ts`:
- Primary: Blue shades
- Accent: Purple/Pink shades

### Content

All content can be edited directly in the component files. Key sections:
- Services: `components/Services.tsx`
- Testimonials: `components/Testimonials.tsx`
- About stats: `components/About.tsx`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

This is a standard Next.js app and can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted with Docker

## License

Private/Commercial Use

## Support

For questions or support, contact:
- Phone: 416-303-4390
- Email: sigal888@hotmail.com

