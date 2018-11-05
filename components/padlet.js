import Link from 'next/link'

const PadletAPI = () => (
    <div className="root-padlet">
        <div class="padlet-embed">
            <p>
                <iframe src="https://padlet.com/embed/66vk0roq9c0p" frameborder="0" allow="camera;microphone;geolocation"></iframe>
            </p>
            <div className="padlet-div">
                <Link href="https://padlet.com?ref=embed" target="_blank">
                    <img src="https://resources.padletcdn.com/assets/made_with_padlet.png" width="86" height="16" alt="Mit Padlet erstellt"></img>
                </Link>
            </div>
        </div>
    </div>
)

export default PadletAPI