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

async function uploadVideo() {
  try {
    const videoPath = join(__dirname, 'src/assets/instruments_bg.mp4')

    if (!fs.existsSync(videoPath)) {
      console.error('❌ Video file not found at:', videoPath)
      process.exit(1)
    }

    console.log('📹 Uploading instruments_bg.mp4 to Cloudinary...')

    const uploadResponse = await cloudinary.uploader.upload(videoPath, {
      resource_type: 'video',
      public_id: 'swarangi-instruments-bg',
      folder: 'swarangi',
    })

    const videoUrl = uploadResponse.secure_url

    console.log('✅ Video uploaded successfully!')
    console.log(`🎬 Video URL: ${videoUrl}`)
    console.log(`\n📋 Use this URL in your Hero component:`)
    console.log(videoUrl)
  } catch (error) {
    console.error('❌ Error uploading video:', error)
    process.exit(1)
  }
}

uploadVideo()
