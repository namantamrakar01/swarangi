import { v2 as cloudinary } from 'cloudinary'
import * as fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

cloudinary.config({
  cloud_name: 'dqn2dna4p',
  api_key: '966415548629842',
  api_secret: '8lfWTSPuf4r3rppIikY34AS7RNk',
})

async function uploadGuitar() {
  try {
    const guitarPath = join(__dirname, 'src/assets/mini_guitar.jpg')

    if (!fs.existsSync(guitarPath)) {
      console.error('❌ Guitar image not found at:', guitarPath)
      process.exit(1)
    }

    console.log('🎸 Uploading guitar.png to Cloudinary...')

    const uploadResponse = await cloudinary.uploader.upload(guitarPath, {
      resource_type: 'auto',
      public_id: 'swarangi-guitar',
      folder: 'swarangi',
    })

    const guitarUrl = uploadResponse.secure_url

    console.log('✅ Guitar image uploaded successfully!')
    console.log(`🖼️ Guitar URL: ${guitarUrl}`)
    console.log(`\n📋 Use this URL in your Collection component:`)
    console.log(guitarUrl)
  } catch (error) {
    console.error('❌ Error uploading guitar image:', error)
    process.exit(1)
  }
}

uploadGuitar()
