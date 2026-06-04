const sharp = require('sharp');

async function extract() {
  const input = 'C:/Users/bauti/.gemini/antigravity-ide/brain/c268b1fb-e25a-41ca-a21d-b57d3add743e/media__1780552921023.jpg';
  const output = 'public/logo.png';
  
  try {
    const { data, info } = await sharp(input)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    // Ensure it's 4 channels (RGBA)
    if (info.channels !== 4) {
      console.error('Expected 4 channels');
      return;
    }

    // Fuchsia threshold: high red, low green, high blue
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i+1];
      const b = data[i+2];

      // Adjust these thresholds based on the fuchsia color
      // In the image, fuchsia is around rgb(228, 23, 137)
      // We also want to exclude the glitter which has white, light pink, and dark spots.
      // Glitter pink is usually R high, G high (light pink) or R high, G medium.
      // Fuchsia has very low G compared to R and B.
      
      const isFuchsia = r > 150 && g < 100 && b > 80;

      if (!isFuchsia) {
        data[i+3] = 0; // Make transparent
      } else {
        // Optional: normalize to pure fuchsia for a cleaner logo
        data[i] = 228;
        data[i+1] = 23;
        data[i+2] = 137;
        data[i+3] = 255;
      }
    }

    await sharp(data, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    })
    .png()
    .toFile(output);

    console.log('Logo extracted successfully to public/logo.png');
  } catch (error) {
    console.error('Error extracting logo:', error);
  }
}

extract();
