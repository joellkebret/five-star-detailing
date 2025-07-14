# Five Star Detailing - Mobile Car Detailing Website

A professional, responsive website for Five Star Detailing, a mobile car detailing service in Toronto. Features a modern design with booking functionality, service packages, and a gallery of before/after results.

## 🚗 Features

- **Mobile-First Design**: Optimized for all devices with responsive layout
- **SEO Optimized**: Semantic HTML, meta tags, and structured data
- **Toronto-Themed**: Custom color scheme inspired by Toronto's aesthetic
- **Interactive Components**: Booking forms, service cards, and image galleries
- **Professional UI**: Clean, modern design with smooth animations

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Responsive Design** - Mobile-first approach

## 📱 Pages & Sections

### Home Page
- **Hero Section**: Company branding with call-to-action
- **Mission Statement**: Company values and commitment
- **Services**: Three detailing packages with pricing
- **Gallery**: Before/after car detailing photos
- **Booking Form**: Comprehensive appointment booking
- **Business Hours**: Service availability information

### Admin Page
- **Placeholder**: Coming soon admin dashboard

## 🎨 Design Features

- **Toronto Color Palette**:
  - Toronto Blue (`#008bff`)
  - Dark Gray (`#1f2937`)
  - Light Gray (`#f3f4f6`)
  - Accent Gold (`#f59e0b`)

- **Typography**: Inter font family for modern readability
- **Icons**: SVG icons for crisp, scalable graphics
- **Animations**: Smooth transitions and hover effects

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### 1. Clone and Install

```bash
git clone <repository-url>
cd five-star-detailing
npm install
```

### 2. Backend Setup

```bash
# Install backend dependencies
npm run server:install

# Copy environment configuration
cd server
cp env.example .env
```

Edit `server/.env` with your email settings:

```env
# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=bookings@mydetailingbusiness.com

# Server Configuration
PORT=3001
NODE_ENV=development
```

### 3. Email Configuration (Gmail Example)

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
   - Use this password in your `.env` file

### 4. Run the Application

**Development (Frontend + Backend):**
```bash
npm run dev:full
```

**Frontend only:**
```bash
npm run dev
```

**Backend only:**
```bash
npm run server
```

**Production:**
```bash
npm run build
npm start
```

## 📧 Email Booking Features

### What Happens When a Customer Books

1. **Form Validation**: Client-side validation ensures all required fields are completed
2. **API Request**: Form data is sent to `/api/book` endpoint
3. **Email Generation**: Professional HTML email is created with all booking details
4. **Calendar Invite**: .ics file is generated with appointment details
5. **Email Delivery**: Email with calendar attachment is sent to `bookings@mydetailingbusiness.com`
6. **User Feedback**: Customer receives confirmation message

### Email Content Includes

- **Customer Information**: Name, phone, email
- **Vehicle Details**: Make, model, year, type
- **Appointment Details**: Date, time, service package, payment method
- **Service Location**: Full address
- **Special Instructions**: Any additional requests
- **Calendar Invite**: 1-hour appointment slot

### Calendar Invite Features

- **Event Title**: Customer name + service type
- **Duration**: 1 hour by default
- **Location**: Service address
- **Description**: All booking details
- **Attendees**: Customer added for RSVP tracking

## 🛠️ Technology Stack

### Frontend
- **React 18** with functional components and hooks
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Router** for navigation

### Backend
- **Node.js** with Express.js
- **Nodemailer** for email functionality
- **ICS** for calendar invite generation
- **CORS** for cross-origin requests

### Development Tools
- **ESLint** for code quality
- **PostCSS** and **Autoprefixer**
- **Concurrently** for running multiple processes

## 📁 Project Structure

```
five-star-detailing/
├── public/                 # Static assets
│   └── images/            # Website images
├── server/                # Backend server
│   ├── server.js          # Express server
│   ├── package.json       # Backend dependencies
│   ├── env.example        # Environment template
│   └── README.md          # Backend documentation
├── src/                   # Frontend source
│   ├── components/        # React components
│   │   ├── BookingForm.jsx # Booking form with email integration
│   │   ├── Navbar.jsx     # Navigation
│   │   ├── Footer.jsx     # Footer
│   │   ├── ServiceCard.jsx # Service package cards
│   │   ├── Gallery.jsx    # Before/after gallery
│   │   └── HoursCard.jsx  # Business hours
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Main landing page
│   │   ├── Admin.jsx      # Admin placeholder
│   │   ├── Interior.jsx   # Interior service page
│   │   └── Exterior.jsx   # Exterior service page
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # React entry point
│   └── index.css          # Tailwind CSS and custom styles
├── package.json           # Frontend dependencies and scripts
├── vite.config.js         # Vite configuration with API proxy
├── tailwind.config.js     # Tailwind configuration
└── README.md              # This file
```

## 🎯 Features

### Website Features
- **Responsive Design**: Mobile-first approach
- **Service Packages**: Interior, Exterior, and Full detailing options
- **Gallery**: Before/after image comparisons
- **Contact Information**: Phone, hours, service area
- **SEO Optimized**: Meta tags, structured data, semantic HTML

### Booking System Features
- **Real-time Validation**: Form validation with helpful error messages
- **Loading States**: Visual feedback during submission
- **Error Handling**: Graceful error handling and user feedback
- **Success Confirmation**: Clear success messages
- **Form Reset**: Form clears after successful submission

### Email Features
- **Professional Templates**: Branded HTML emails
- **Complete Information**: All booking details included
- **Calendar Integration**: Automatic .ics file generation
- **Mobile Responsive**: Emails look great on all devices

## 📞 Contact Information

- **Email**: fivestardetailingto@gmail.com
- **Service Area**: Greater Toronto Area (GTA)
- **Business Hours**:
  - Weekdays: 7 AM - 10 PM
  - Weekends: 7 AM - 2 AM

## 🛠️ Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- **Toronto Blue**: Primary brand color
- **Accent Gold**: Call-to-action color
- **Toronto Dark**: Text color
- **Toronto Gray**: Secondary text

### Email Templates
Email templates are defined in `server/server.js` in the `generateEmailHTML` function. You can customize:
- Colors and branding
- Layout and sections
- Content and messaging

### Calendar Invites
Calendar invite generation is handled in the `generateCalendarInvite` function. You can modify:
- Event duration (currently 1 hour)
- Event title format
- Description content
- Attendee settings

## 🚀 Deployment

### Frontend Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service

### Backend Deployment
1. Set up environment variables on your server
2. Install dependencies: `cd server && npm install`
3. Start the server: `npm start`
4. Use a process manager like PM2 for production

### Email Service
For production, consider using:
- **SendGrid**: Reliable email delivery
- **AWS SES**: Scalable email service
- **Mailgun**: Developer-friendly email API

## 🔧 Troubleshooting

### Email Issues
- Verify SMTP credentials in `.env`
- Check email service provider settings
- Ensure 2FA is enabled for Gmail
- Test with a simple email first

### Frontend Issues
- Check browser console for errors
- Verify API endpoint configuration
- Ensure backend is running on port 3001

### Calendar Issues
- Verify date/time format in booking data
- Check timezone settings
- Test .ics file generation

## 📝 License

This project is private and proprietary to Five Star Detailing.

## 🤝 Support

For technical support or questions about the booking system, please contact the development team. 