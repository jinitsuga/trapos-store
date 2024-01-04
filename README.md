Simple e-commerce store site, built with Next.js, NextAuth, Tailwind, MongoDB to store products,
UploadThing for storing images, and the MercadoPago SDK to handle payments.

### You'll need a .env file with the following structure:

```


MONGO_URI = your db's connection URI

NEXTAUTH_URL =
NEXTAUTH_SECRET = secret for your Next Auth

ADMIN_EMAILS = the "admin emails" you want to allow into to login (this will depend on your nextauth setup)


UPLOADTHING_SECRET = Uploadthing secret
UPLOADTHING_APP_ID = Uploadthing APP ID

NEXT_PUBLIC_MP = MercadoPago public
NEXT_MPTOKEN = Token from MercadoPago


URL = your url for shortening other links and API endpoints (probably 'http://localhost:3000' during development)
NEXT_PUBLIC_URL = http://localhost:3000
PHONE = phone number you'll want the whatsapp button to text to

```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
