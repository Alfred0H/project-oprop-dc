/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {   
                protocol: "https",
                hostname: "images.unsplash.com"
            },
            {   
                protocol: "https",
                hostname: "unsplash.it"
            },
            {   
                protocol: "https",
                hostname: "res.cloudinary.com"
            },
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com"
            },
            {   
                protocol: "https",
                hostname: "img.freepik.com"
            }
            

        ]
    }


}

module.exports = nextConfig
