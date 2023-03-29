This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

<!-- ## Limiting the API request (our server is only free tier)
- [ ] Limiting outsiders by requiring a unique authentication key that is only accessible with an account.
- [ ] Limiting server traffic by allowing only one request (with a maximum of two URLs) per minute.
- [ ] Caching the scan result from the home page to avoid unnecessary rescanning. -->

## Functionality of the site

- [x] Linting (clean code)
- [x] Public API
- [x] Scanning Multiple urls from public api
- [x] Scanning result from home page
- [x] Validation -> valid input
- [ ] validation -> no xss input
- [x] Simple password complexity
- [ ] Creating an account / signing in with supabase
- [ ] Authentication
- [ ] Session management
- [ ] User Dashboard
- [ ] Scanning multiple urls from user dashboard
- [ ] Generating a pdf report from user dashboard
- [ ] Automation from user dashboard
