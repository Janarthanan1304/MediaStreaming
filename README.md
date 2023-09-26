# MediaStreaming
A cloud based streaming project
import subprocess

# Replace with your actual IBM Cloud Video Streaming channel's information
channel_url = "YOUR_CHANNEL_URL"
stream_key = "YOUR_STREAM_KEY"

# Input video source (e.g., a file or camera device)
input_source = "input.mp4"  # Replace with your source

# FFmpeg command to encode and stream the video to IBM Cloud
ffmpeg_command = [
    "ffmpeg",
    "-i", input_source,  # Input source
    "-c:v", "libx264",   # Video codec (H.264)
    "-preset", "veryfast",  # Video encoding preset
    "-b:v", "2M",         # Video bitrate (adjust as needed)
    "-c:a", "aac",        # Audio codec (AAC)
    "-strict", "experimental",
    "-b:a", "128k",       # Audio bitrate (adjust as needed)
    "-f", "flv",          # Output format (Flash Video)
    f"rtmp://{channel_url}/app/{stream_key}"  # IBM Cloud Video Streaming URL
]

# Start the FFmpeg process
process = subprocess.Popen(ffmpeg_command)

# Wait for the process to finish (you can add more logic here)
process.wait()
