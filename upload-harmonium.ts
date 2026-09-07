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

async function uploadHarmonium() {
  try {
    const harmoniumPath = join(__dirname, 'src/assets/mini_harmonium_compressed.jpg')

    if (!fs.existsSync(harmoniumPath)) {
      console.error('❌ Harmonium image not found at:', harmoniumPath)
      process.exit(1)
    }

    console.log('🎹 Uploading harmonium.png to Cloudinary...')

    const uploadResponse = await cloudinary.uploader.upload(harmoniumPath, {
      resource_type: 'auto',
      public_id: 'swarangi-harmonium',
      folder: 'swarangi',
    })

    const harmoniumUrl = uploadResponse.secure_url

    console.log('✅ Harmonium image uploaded successfully!')
    console.log(`🖼️ Harmonium URL: ${harmoniumUrl}`)
    console.log(`\n📋 Use this URL in your Collection component:`)
    console.log(harmoniumUrl)
  } catch (error) {
    console.error('❌ Error uploading harmonium image:', error)
    process.exit(1)
  }
}

uploadHarmonium()
