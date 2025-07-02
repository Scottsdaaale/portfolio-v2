import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Specific URLs that should return 410 Gone
const goneUrls = [
  '/posts/woolietv',
  '/posts/how-to-make-a-star-rating-with-react',
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if this is a permanently removed URL
  if (goneUrls.includes(pathname)) {
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>410 - Content Gone</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
          .btn-primary {
            background-color: #e4e4e7;
            color: #0a0a0a;
          }
          .btn-primary:hover {
            background-color: #d4d4d8;
          }
          .btn-secondary {
            border: 1px solid #525252;
            color: #d4d4d8;
          }
          .btn-secondary:hover {
            background-color: #262626;
          }
        </style>
        <script>
          // Simple dark mode detection
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
        </script>
      </head>
             <body class="min-h-screen flex items-center justify-center px-4 py-16" style="background-color: #0a0a0a;">
          <div class="max-w-2xl w-full">
           <div class="rounded-xl shadow-sm p-8" style="background-color: #171717; border: 1px solid #333;"">
            <!-- Header -->
            <div class="text-center mb-6">
                             <div class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4" style="background-color: rgba(239, 68, 68, 0.1); color: #ef4444;">
                 <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                 </svg>
                 HTTP 410 Gone
               </div>
               <h1 class="text-3xl font-bold" style="color: #ef4444;">
                 Content Permanently Removed
               </h1>
            </div>
            
            <!-- Content -->
                          <div class="text-center space-y-6">
                <div class="space-y-3">
                 <p class="text-lg" style="color: #a1a1aa;">
                   This blog post has been permanently removed and is no longer available.
                 </p>
                 <p style="color: #a1a1aa;">
                   The content was intentionally deleted and will not be returning. 
                   This lets search engines know to stop looking for this page.
                 </p>
                </div>

               <div class="pt-6" style="border-top: 1px solid #404040;">
                 <p class="text-sm font-medium mb-4" style="color: #e4e4e7;">
                   What would you like to do instead?
                 </p>
                
                <div class="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="/blog" class="btn-primary inline-flex items-center justify-center px-4 py-2 rounded-lg transition-colors">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    View All Blog Posts
                  </a>
                  
                  <a href="/" class="btn-secondary inline-flex items-center justify-center px-4 py-2 rounded-lg transition-colors">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                    Return to Homepage
                  </a>
                </div>
              </div>

              <div class="pt-6" style="border-top: 1px solid #404040;">
                <p class="text-xs" style="color: #71717a;">
                  If you believe this is an error, please 
                  <a href="/#contact" class="hover:underline" style="color: #60a5fa;">contact me</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </body>
      </html>
    `

    return new NextResponse(html, {
      status: 410,
      headers: { 'Content-Type': 'text/html' },
    })
  }

  // Continue to next middleware/route handler
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/posts/woolietv',
    '/posts/how-to-make-a-star-rating-with-react',
  ]
} 