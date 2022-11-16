export const params = {
  key: process.env.YOUTUBE_API_KEY ?? '',
  part: 'snippet',
  channelId: 'UCil3qVY03emphZE4V5UQtXA',
  type: 'video',
  maxResults: '5',
  order: 'date',
}

export const baseUrl = 'https://www.googleapis.com/youtube/v3/search?'
