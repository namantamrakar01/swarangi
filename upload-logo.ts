import { v2 as cloudinary } from 'cloudinary'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

cloudinary.config({
  cloud_name: 'dqn2dna4p',
  api_key: '966415548629842',
  api_secret: '8lfWTSPuf4r3rppIikY34AS7RNk',
})

async function uploadLogo() {
  try {
    console.log('🎨 Uploading Swarangi logo to Cloudinary...')

    const logoPath = join(__dirname, 'src/assets/hero.png')

    const uploadResponse = await cloudinary.uploader.upload(logoPath, {
      resource_type: 'auto',
      public_id: 'swarangi-logo',
      folder: 'swarangi',
    })

    const logoUrl = uploadResponse.secure_url

    console.log('✅ Logo uploaded successfully!')
    console.log(`🖼️ Logo URL: ${logoUrl}`)
    console.log(`\n📋 Use this URL in your Navbar component:`)
    console.log(logoUrl)
  } catch (error) {
    console.error('❌ Error uploading logo:', error)
    process.exit(1)
  }
}

uploadLogo()
