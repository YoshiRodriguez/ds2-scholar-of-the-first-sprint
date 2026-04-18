interface YouTubePlayerProps {
    url: string
}


function YouTubePlayer({ url }: Readonly<YouTubePlayerProps>) {
    return (
        <div className="ds-video-wrapper">
            <iframe
                src={url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
        </div>
    )
}

export default YouTubePlayer