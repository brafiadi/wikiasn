import type { MetadataRoute } from 'next'

// Define the API response type
interface MenuData {
  id: number
  menu: string
  deskripsi: string
  link: string
  aktif: boolean
}

interface ApiResponse {
  success: boolean
  data: MenuData[]
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get base URL from environment variable
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN || 'https://wikiasn.vercel.app'
  const api = process.env.API_URL;
  
  try {
    // Fetch menu data from API
    const response = await fetch(`${api}/master-data/menu`)
    const menuData: ApiResponse = await response.json()
    
    // Base sitemap entries
    const staticRoutes = [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: 1,
      },
    ]
    
    // Generate dynamic routes from API data
    const dynamicRoutes = menuData.data
      .filter(item => item.aktif) // Only include active menu items
      .map(item => ({
        url: `${baseUrl}${item.link}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      }))
    
    return [...staticRoutes, ...dynamicRoutes]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    
    // Return basic sitemap in case of error
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: 1,
      },
    ]
  }
}