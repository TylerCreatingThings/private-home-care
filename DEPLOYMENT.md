# Deployment Guide

## Quick Start (Development)

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Production Deployment

### Option 1: Vercel (Recommended - Free & Easy)

Vercel is the creator of Next.js and offers the best integration.

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"
   - Done! Your site will be live at `https://your-project.vercel.app`

3. **Custom Domain (Optional)**
   - In Vercel dashboard, go to Settings > Domains
   - Add your custom domain
   - Update DNS records as instructed
   - SSL certificate is automatically provisioned

### Option 2: Netlify

1. **Build Configuration**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy**
   - Push code to GitHub
   - Connect repository to Netlify
   - Deploy

### Option 3: DigitalOcean App Platform

1. **Create App**
   - Connect GitHub repository
   - Select Node.js environment
   - Build command: `npm run build`
   - Run command: `npm start`

2. **Configure**
   - Set environment variables if needed
   - Choose instance size
   - Deploy

### Option 4: Self-Hosted (VPS/Dedicated Server)

**Requirements:**
- Node.js 18+
- PM2 or similar process manager
- Nginx (recommended as reverse proxy)

**Steps:**

1. **Clone Repository**
   ```bash
   git clone YOUR_REPO_URL
   cd privatehomecare
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Build Production**
   ```bash
   npm run build
   ```

4. **Install PM2**
   ```bash
   npm install -g pm2
   ```

5. **Start Application**
   ```bash
   pm2 start npm --name "homecare" -- start
   pm2 save
   pm2 startup
   ```

6. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

7. **Setup SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

## Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_PHONE=416-303-4390
NEXT_PUBLIC_EMAIL=sigal888@hotmail.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production, set these in your hosting platform's environment variables section.

## Email Integration (Future Enhancement)

To enable real email sending instead of mailto links:

1. **Choose Email Service**
   - SendGrid (recommended)
   - Mailgun
   - Amazon SES
   - Resend

2. **Install Package**
   ```bash
   npm install @sendgrid/mail
   # or
   npm install nodemailer
   ```

3. **Update API Routes**
   Edit `app/api/booking/route.ts` and `app/api/contact/route.ts` to send actual emails.

4. **Add Environment Variables**
   ```env
   SENDGRID_API_KEY=your_api_key
   ```

## Performance Optimization

1. **Image Optimization**
   - Images are automatically optimized by Next.js
   - Use WebP format when possible

2. **Caching**
   - Static pages are cached automatically
   - Configure CDN caching headers if needed

3. **Analytics**
   - Add Google Analytics or Plausible
   - Install: `npm install @next/third-parties`

## Monitoring

1. **Vercel Analytics** (if using Vercel)
   ```bash
   npm install @vercel/analytics
   ```
   
   Add to `app/layout.tsx`:
   ```tsx
   import { Analytics } from '@vercel/analytics/react'
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     )
   }
   ```

2. **Error Tracking**
   - Sentry
   - LogRocket
   - Bugsnag

## Security Checklist

- [ ] Enable HTTPS
- [ ] Set up CORS properly
- [ ] Add rate limiting to API routes
- [ ] Implement CSRF protection
- [ ] Regular dependency updates
- [ ] Environment variables are properly secured
- [ ] No sensitive data in client-side code

## Backup Strategy

1. **Database Backups** (when implemented)
   - Daily automated backups
   - 30-day retention

2. **Code Backups**
   - GitHub repository
   - Tagged releases

## Domain Setup

1. **Purchase Domain**
   - GoDaddy, Namecheap, Google Domains, etc.

2. **Configure DNS**
   For Vercel:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Verify**
   - Wait for DNS propagation (up to 48 hours)
   - Verify SSL certificate is active

## Cost Estimate

**Free Tier (Hobby)**
- Vercel: Free (with limits)
- Domain: $10-15/year
- **Total: ~$15/year**

**Production (Recommended)**
- Vercel Pro: $20/month
- Domain: $15/year
- Email service: $0-15/month
- **Total: ~$20-35/month**

**Enterprise**
- Dedicated hosting: $50-200/month
- Domain: $15/year
- Email service: $15-50/month
- CDN: $20-100/month
- **Total: ~$85-350/month**

## Support

For deployment issues:
- Email: sigal888@hotmail.com
- Phone: 416-303-4390

For Next.js questions:
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js GitHub Discussions](https://github.com/vercel/next.js/discussions)

