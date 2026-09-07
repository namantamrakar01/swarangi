import { v2 as cloudinary } from 'cloudinary'

// Configure Cloudinary with inline credentials
cloudinary.config({
  cloud_name: 'dqn2dna4p',
  api_key: '966415548629842',
  api_secret: '8lfWTSPuf4r3rppIikY34AS7RNk',
})

async function runCloudinaryOnboarding() {
  try {
    console.log('🚀 Starting Cloudinary Onboarding...\n')

    // Step 1: Upload an image from Cloudinary's demo domain
    console.log('📤 Uploading image...')
    const uploadResponse = await cloudinary.uploader.upload(
      'https://res.cloudinary.com/demo/image/upload/sample.jpg',
      {
        resource_type: 'auto',
        public_id: 'swarangi-sample-image',
      }
    )

    const uploadedUrl = uploadResponse.secure_url
    const publicId = uploadResponse.public_id

    console.log(`✅ Image uploaded successfully!`)
    console.log(`📎 Secure URL: ${uploadedUrl}`)
    console.log(`🆔 Public ID: ${publicId}\n`)

    // Step 2: Get image metadata
    console.log('📊 Fetching image metadata...')
    const resourceResponse = await cloudinary.api.resource(publicId)

    const width = resourceResponse.width
    const height = resourceResponse.height
    const format = resourceResponse.format
    const bytes = resourceResponse.bytes

    console.log(`✅ Metadata retrieved:`)
    console.log(`   Width: ${width}px`)
    console.log(`   Height: ${height}px`)
    console.log(`   Format: ${format}`)
    console.log(`   File size: ${bytes} bytes\n`)

    // Step 3: Transform the image
    console.log('🎨 Generating transformed image URL...')
    // f_auto: Automatically selects the best format (WebP, AVIF, etc.) based on browser support
    // q_auto: Automatically adjusts quality to balance visual quality with file size
    const transformedUrl = cloudinary.url(publicId, {
      transformation: [
        {
          fetch_format: 'auto', // f_auto: automatic format selection
          quality: 'auto', // q_auto: automatic quality optimization
        },
      ],
    })

    console.log(`✅ Transformation applied!`)
    console.log(`🔗 Transformed URL: ${transformedUrl}\n`)

    console.log('✨ Done! Click link below to see optimized version of the image. Check the size and the format.')
    console.log(`\n🌐 Open this URL in your browser:\n${transformedUrl}`)
  } catch (error) {
    console.error('❌ Error during Cloudinary onboarding:', error)
    process.exit(1)
  }
}

runCloudinaryOnboarding()
