/**
 * Instagram Feed Fetcher
 * Fetches latest posts from @modern_mancave
 * 
 * SETUP:
 * 1. Go to https://developers.facebook.com/apps
 * 2. Create app → Business → Instagram Basic Display
 * 3. Add Instagram Account
 * 4. Get Access Token
 * 5. Set INSTAGRAM_TOKEN in .env.local
 * 
 * OR use free service:
 * - SnapWidget: https://snapwidget.com
 * - Curator.io: https://curator.io
 * - Elfsight: https://elfsight.com/instagram-feed-instashow/
 */

const INSTAGRAM_USERNAME = 'modern_mancave'

// Placeholder: requires Instagram Basic Display API token
async function fetchInstagramPosts() {
  const token = process.env.INSTAGRAM_TOKEN
  
  if (!token) {
    console.log('No Instagram token found. Using placeholder images.')
    return []
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${token}`
    )
    
    const data = await response.json()
    return data.data || []
  } catch (error) {
    console.error('Error fetching Instagram posts:', error)
    return []
  }
}

// For now: manual approach
// Tristan can either:
// 1. Use a widget service (easiest)
// 2. Set up Instagram API (more work but free)
// 3. Manually update gallery images

console.log(`
Instagram Feed Setup for @${INSTAGRAM_USERNAME}

OPTION 1 (Recommended - Easiest):
Use SnapWidget (free):
1. Go to https://snapwidget.com/create
2. Select Instagram Feed
3. Enter username: ${INSTAGRAM_USERNAME}
4. Customize layout (grid, 4 columns)
5. Copy embed code
6. Paste into /app/page.tsx where the gallery is

OPTION 2 (Free but requires setup):
Instagram Basic Display API:
1. Create Facebook Developer account
2. Set up Instagram Basic Display app
3. Get access token
4. Add token to .env.local as INSTAGRAM_TOKEN
5. Run this script to fetch posts

OPTION 3 (Manual):
Upload images to /public/gallery/ and update the grid in page.tsx
`)

module.exports = { fetchInstagramPosts }
